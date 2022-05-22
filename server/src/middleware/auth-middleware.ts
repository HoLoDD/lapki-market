import { NextFunction, Request, Response } from 'express';
import { UserDto } from '../dto/user-dto';
import ApiError from '../exceptions/api-error';
import tokenService from '../services/token-service';

export default function (req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        //@ts-ignore
        req.user = userData;
        next();
    } catch (error) {
        return next(ApiError.UnauthorizedError());
    }
}
