import { CreateOrderDto } from '../dto/order-dto';
import ApiError from '../exceptions/api-error';
import { Basket } from '../models/basket.entity';
import { Order } from '../models/order.entity';
import { SoldItem } from '../models/sold-item.entity';
import dataSource from '../utils/connect-db';
import basketService from './basket-service';
import orderHistoryService from './order-history-service';

class OrderService {
    async createOrder(
        userId: number,
        { city, name, surname, phone, price }: CreateOrderDto
    ) {
        if (!city || !name || !surname || !phone || !price) {
            throw ApiError.BadRequest('Empty fields!');
        }

        const order = new Order();
        order.name = name;
        order.city = city;
        order.surname = surname;
        order.phone = phone;
        order.price = price;
        order.soldItems = [];

        const basket = await basketService.getBasketForUser(userId);
        basket.items.forEach((item) => {
            const soldItem = new SoldItem();
            soldItem.name = item.name;
            soldItem.price = item.price;
            soldItem.item = item;
            order.soldItems.push(soldItem);
        });
        basket.items = [];
        const saveResult = await dataSource.manager.save(Order, order);
        await dataSource.manager.save(Basket, basket);
        await orderHistoryService.addOrder(userId, order);
        return saveResult;
    }
}

export default new OrderService();
