import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderHistory } from './order-histoty.entity';
import { SoldItem } from './sold-item.entity';

@Entity('Order')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    price: number;

    @OneToOne(() => SoldItem)
    soldItem: SoldItem;

    @ManyToOne(() => OrderHistory)
    orderHistory: OrderHistory;
}
