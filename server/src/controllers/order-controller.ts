import { NextFunction, Request, Response } from 'express';
import { CreateOrderDto } from '../dto/order-dto';
import orderService from '../services/order-service';

class OrderController {
    async getAllOrders(req: Request, res: Response) {
        try {
        } catch (error) {}
    }

    async getOrderById(req: Request, res: Response) {
        try {
        } catch (error) {}
    }

    async addOrder(
        req: Request<{}, {}, CreateOrderDto>,
        res: Response,
        next: NextFunction
    ) {
        try {
            //@ts-ignore
            const userId = req.user.id;
            const { city, name, surname, phone, price } = req.body;

            const result = await orderService.createOrder(userId, {
                city,
                name,
                phone,
                price,
                surname,
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async editOrder(req: Request, res: Response) {
        try {
        } catch (error) {}
    }

    async deleteOrder(req: Request, res: Response) {
        try {
        } catch (error) {}
    }
}

export default new OrderController();
