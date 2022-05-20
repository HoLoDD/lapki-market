import { CreateUserDto, UserDto } from '../dto/user-dto';
import { User } from '../models/user.entity';
import ApiError from '../exceptions/api-error';
import dataSource from '../utils/connect-db';
import bcrypt from 'bcrypt';
import uuid from 'uuid';
import tokenService from './token-service';

class UserService {
    async registration(createUserDto: CreateUserDto) {
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

        const saveResult = await dataSource.manager.save(User, user);
        const tokens = tokenService.generateTokens({ ...createUserDto });
        await tokenService.saveToken(user.id, tokens.refreshToken);

        return {
            ...tokens,
            user: new UserDto(user),
        };
    }

    async login({ email, password }) {
        const user = await dataSource.manager.findOneBy(User, { email });
        if (!user) throw ApiError.BadRequest('User not found');

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) throw ApiError.BadRequest('Wrong password');

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ email, password });
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
            console.log(refreshToken);
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError();
        }

        const user = await dataSource.manager.findOneBy(User, {
            id: userData.id,
        });
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            user: userDto,
        };
    }
}

export default new UserService();
