import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../dto/user-dto';
import tokenService from '../services/token-service';
import userService from '../services/user-service';

class UserController {
    async getAllUser(req: Request, res: Response, next: NextFunction) {
        try {
            res.json({ message: 'ALL USER GET' });
        } catch (error) {
            next(error);
        }
    }

    async register(
        req: Request<{}, {}, CreateUserDto>,
        res: Response,
        next: NextFunction
    ) {
        try {
            const { email, password, username, phone } = req.body;
            const userData = await userService.registration({
                email,
                password,
                username,
                phone,
            });
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });

            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const userData = await userService.login({ email, password });
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });

            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');

            return res.json(token);
        } catch (error) {
            next(error);
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await userService.refresh(refreshToken);

            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });

            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }

    async check(req: Request, res: Response, next: NextFunction) {
        try {
            const token = tokenService.generateTokens({
                //@ts-ignore
                id: req.user.id,
                //@ts-ignore
                email: req.user.email,
                //@ts-ignore
                phone: req.user.phone,
                //@ts-ignore
                username: req.user.username,
            });
            res.json({ token });
        } catch (error) {
            next(error);
        }
    }

    async editUser(req: Request, res: Response, next: NextFunction) {
        try {
            //@ts-ignore
            const userId = req.user.id;
            const { email, password, username, phone } = req.body;
            const userData = await userService.editUser({
                userId,
                email,
                password,
                username,
                phone,
            });

            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();
