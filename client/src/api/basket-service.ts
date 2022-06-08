import { authHost } from '.';
import { IItem } from '../models/IItem';

interface Basket {
    id: number;
    items: IItem[];
}

class BasketService {
    async getItems(userId: number) {
        const response = await authHost.get<Basket>(`api/basket/${userId}`);

        return response;
    }

    async addItem(userId: number, itemId: number) {
        const response = await authHost.post('api/basket/', { userId, itemId });

        return response;
    }

    async removeItem(userId: number, itemId: number) {
        const response = await authHost.delete('api/basket/', {
            data: { userId, itemId },
        });

        return response;
    }
}

export default new BasketService();
