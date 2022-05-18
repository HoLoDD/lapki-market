import { Request, Response } from 'express';

class BasketController {
    async getBasketById(req: Request, res: Response) {}

    async addBasket(req: Request, res: Response) {}

    async editBasket(req: Request, res: Response) {}

    async deleteBasket(req: Request, res: Response) {}
}

export default new BasketController();
