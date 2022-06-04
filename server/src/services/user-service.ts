import { CreateUserDto, UserDto } from '../dto/user-dto';
import { User } from '../models/user.entity';
import ApiError from '../exceptions/api-error';
import dataSource from '../utils/connect-db';
import bcrypt from 'bcrypt';
import uuid from 'uuid';
import tokenService from './token-service';
import { OrderHistory } from '../models/order-histoty.entity';
import basketService from './basket-service';
import orderHistoryService from './order-history-service';

class UserService {
    async registration(createUserDto: CreateUserDto) {
        if (
            !createUserDto.email ||
            !createUserDto.password ||
            !createUserDto.phone ||
            !createUserDto.username
        ) {
            throw ApiError.BadRequest(`Fields can't be empty!`);
        }

        const candidate = await dataSource.manager.findOneBy(User, {
            email: createUserDto.email,
        });
        if (candidate) {
            throw ApiError.BadRequest(
                `User with email ${createUserDto.email} already exist`
            );
        }

        const hashPassword = await bcrypt.hash(createUserDto.password, 3);
        //const activationLink = uuid.v4();
        const user = new User();
        user.email = createUserDto.email;
        user.password = hashPassword;
        user.username = createUserDto.username;
        user.phone = createUserDto.phone;
        user.orderHistory = new OrderHistory();

        await dataSource.manager.save(User, user);
        await basketService.createBasket(user.id);
        await orderHistoryService.createOrderHistory(user.id);
        const tokens = tokenService.generateTokens({
            id: user.id,
            email: user.email,
            phone: user.phone,
            username: user.username,
        });
        await tokenService.saveToken(user.id, tokens.refreshToken);

        return {
            ...tokens,
            user: new UserDto(user),
        };
    }

    async login({ email, password }) {
        if (!email || !password) {
            throw ApiError.BadRequest('Empty fields!');
        }

        const user = await dataSource.manager.findOneBy(User, { email });
        if (!user)
            throw ApiError.BadRequest(`User with email ${email} not found!`);

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) throw ApiError.BadRequest('Wrong password!');

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({
            id: user.id,
            email,
            phone: user.phone,
            username: user.username,
        });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        };
    }

    async logout(refreshToken: string) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError();
        }

        const user = await dataSource.manager.findOneBy(User, {
            id: (<UserDto>userData).id,
        });
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            user: userDto,
        };
    }

    async editUser({ userId, email, password, username, phone }) {
        const user = await dataSource.manager.findOneBy(User, { id: userId });
        if (!user) {
            throw ApiError.BadRequest(`User not found!`);
        }
        if (email) user.email = email;
        if (password) user.password = password;
        if (username) user.username = username;
        if (phone) user.phone = phone;

        const savedUser = dataSource.manager.save(User, user);
        return savedUser;
    }
}

export default new UserService();
