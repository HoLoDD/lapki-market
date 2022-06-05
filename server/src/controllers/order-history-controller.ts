import { Request, Response } from 'express';
import orderHistoryService from '../services/order-history-service';

class OrderHistoryController {
    async getOrderHistoryById(req: Request, res: Response) {
        try {
            //@ts-ignore
            const userId = req.user.id;
            const orderHistory =
                await orderHistoryService.getOrderHistoryForUser(userId);

            res.json(orderHistory);
        } catch (error) {}
    }

    async deleteOrder(req: Request, res: Response) {
        try {
        } catch (error) {}
    }
}

export default new OrderHistoryController();
