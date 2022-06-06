import { ISoldItem } from './ISoldItem';

export interface IOrder {
    id?: number;
    price: number;
    name: string;
    surname: string;
    phone: number;
    city: string;
    soldItems?: ISoldItem[];
}
