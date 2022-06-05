import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './item.entity';
import { Order } from './order.entity';

@Entity('SoldItem')
export class SoldItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('int')
    price: number;

    @ManyToOne(() => Order, (order) => order.soldItems)
    order: Order;

    @ManyToOne(() => Item, (item) => item.soldItems)
    item: Item;
}
