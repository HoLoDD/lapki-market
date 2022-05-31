import { NextFunction, Request, Response } from 'express';
import basketService from '../services/basket-service';

class BasketController {
    async getBasketById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const basket = await basketService.getBasketForUser(id);

            res.json(basket);
        } catch (error) {
            next(error);
        }
    }

    async addItemToBasket(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, itemId } = req.body;
            const result = await basketService.addItem(userId, itemId);

            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async removeItemFromBasket(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const { userId, itemId } = req.body;
            const result = await basketService.removeItem(userId, itemId);

            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new BasketController();
