import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    OneToOne,
} from 'typeorm';
import { Basket } from './basket.entity';
import { OrderHistory } from './order-histoty.entity';

@Entity('User')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { unique: true })
    email: string;

    @Column('varchar')
    username: string;

    @Column('varchar')
    password: string;

    @Column('int')
    phone: number;

    @OneToOne(() => Basket)
    basket: Basket;

    @OneToOne(() => OrderHistory)
    orderHistory: OrderHistory;
}
