import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { Basket } from './basket.entity';
import { OrderHistory } from './order-histoty.entity';

@Entity('User')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { unique: true })
    email: string;

    @Column('varchar', { unique: true })
    username: string;

    @Column('varchar')
    password: string;

    @Column('int', { nullable: true })
    phone: number;

    @OneToOne(() => Basket)
    @JoinColumn()
    basket: Basket;

    @OneToOne(() => OrderHistory)
    @JoinColumn()
    orderHistory: OrderHistory;
}
