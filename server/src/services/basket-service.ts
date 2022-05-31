import ApiError from '../exceptions/api-error';
import { Basket } from '../models/basket.entity';
import { Item } from '../models/item.entity';
import { User } from '../models/user.entity';
import dataSource from '../utils/connect-db';

class BasketService {
    async createBasket(userId: number) {
        const basket = new Basket();
        basket.items = [];
        basket.user = await dataSource.manager.findOneBy(User, { id: userId });

        const saveResult = await dataSource.manager.save(Basket, basket);
        return saveResult;
    }

    async getBasketForUser(userId: number) {
        const basket = await dataSource.manager.findOne(Basket, {
            where: {
                user: { id: userId },
            },
            relations: ['items'],
        });

        return basket;
    }

    async addItem(userId: number, itemId: number) {
        const basket = await dataSource.manager.findOne(Basket, {
            where: {
                user: { id: userId },
            },
            relations: ['user', 'items'],
        });

        const item = await dataSource.manager.findOneBy(Item, {
            id: itemId,
        });
        if (!item) {
            throw ApiError.BadRequest('Item not found!');
        }

        basket.items.push(item);
        const saveResult = await dataSource.manager.save(Basket, basket);

        return saveResult;
    }

    async removeItem(userId: number, itemId: number) {
        const basket = await dataSource.manager.findOne(Basket, {
            where: {
                user: { id: userId },
            },
            relations: ['user', 'items'],
        });
        basket.items = basket.items.filter((item) => item.id != itemId);
        const saveResult = dataSource.manager.save(Basket, basket);
        return saveResult;
    }
}

export default new BasketService();
