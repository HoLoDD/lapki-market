import { Request, Response } from 'express';

class OrderHistoryController {
    async getOrderHistoryById(req: Request, res: Response) {}

    async addOrderHistory(req: Request, res: Response) {}

    async deleteOrder(req: Request, res: Response) {}
}

export default new OrderHistoryController();
