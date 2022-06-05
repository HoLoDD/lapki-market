import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
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

    @Column('varchar')
    name: string;

    @Column('varchar')
    surname: string;

    @Column('int')
    phone: number;

    @Column('varchar')
    city: string;

    @OneToMany(() => SoldItem, (soldItem) => soldItem.order, { cascade: true })
    soldItems: SoldItem[];

    @ManyToOne(() => OrderHistory)
    orderHistory: OrderHistory;
}
