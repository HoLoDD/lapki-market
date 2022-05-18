import { Request, Response } from 'express';

class OrderController {
    async getAllOrders(req: Request, res: Response) {}

    async getOrderById(req: Request, res: Response) {}

    async addOrder(req: Request, res: Response) {}

    async editOrder(req: Request, res: Response) {}

    async deleteOrder(req: Request, res: Response) {}
}

export default new OrderController();
