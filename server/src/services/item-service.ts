import ApiError from '../exceptions/api-error';
import { Item } from '../models/item.entity';
import { Type } from '../models/type.entity';
import dataSource from '../utils/connect-db';

class ItemService {
    async getAllItems() {
        const items = await dataSource.manager.find(Item);
        return items;
    }

    async getItemById(itemId: number) {
        const item = await dataSource.manager.findOneBy(Item, { id: itemId });
        if (!item) {
            throw ApiError.BadRequest('Item not found');
        }
        return item;
    }

    async getItemsByCategory(categoryId: number) {
        const item = await dataSource.manager.find(Item, {
            where: {
                type: { category: { id: categoryId } },
            },
            relations: ['type'],
        });
        if (!item) {
            throw ApiError.BadRequest('Item not found');
        }
        return item;
    }

    async getItemsByType(typeId: number) {
        const item = await dataSource.manager.find(Item, {
            where: {
                type: { id: typeId },
            },
            relations: ['type'],
        });
        if (!item) {
            throw ApiError.BadRequest('Item not found');
        }
        return item;
    }

    async addItem({ name, price, description, photo, typeId }) {
        const item = new Item();
        item.name = name;
        item.price = price;
        item.description = description;
        item.photo = photo;

        const type = await dataSource.manager.findOneBy(Type, {
            id: typeId,
        });
        if (!type) {
            throw ApiError.BadRequest('Type not found');
        }
        item.type = type;
        console.log(item);

        const savedItem = await dataSource.manager.save(Item, item);
        return savedItem;
    }

    async editItem() {}

    async deleteItem() {}
}

export default new ItemService();
