import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserDto } from '../dto/user-dto';
import { Token } from '../models/token.entity';
import { User } from '../models/user.entity';
import dataSource from '../utils/connect-db';

class TokenService {
    validateAccessToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY);
            return userData;
        } catch (error) {
            return null;
        }
    }

    validateRefreshToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY);
            return userData;
        } catch (error) {
            return null;
        }
    }

    generateTokens(payload: JwtPayload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
            expiresIn: '30min',
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
            expiresIn: '30d',
        });
        return {
            accessToken,
            refreshToken,
        };
    }

    async saveToken(userId: number, refreshToken: string) {
        const tokenData = await dataSource.manager.findOne(Token, {
            where: {
                user: { id: userId },
            },
            relations: ['user'],
        });

        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return await dataSource.manager.save(Token, tokenData);
        } else {
            const token = new Token();
            token.refreshToken = refreshToken;
            token.user = await dataSource.manager.findOneByOrFail(User, {
                id: userId,
            });
            const saveResult = await dataSource.manager.save(Token, token);
            return saveResult;
        }
    }

    async removeToken(refreshToken: string) {
        const deleteResult = await dataSource.manager.delete(Token, {
            refreshToken,
        });
        return deleteResult;
    }

    async findToken(refreshToken: string) {
        const tokenData = await dataSource.manager.findOneBy(Token, {
            refreshToken,
        });
        return tokenData;
    }
}

export default new TokenService();
