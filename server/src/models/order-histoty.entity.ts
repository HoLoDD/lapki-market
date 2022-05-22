import {
    BaseEntity,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { User } from './user.entity';

@Entity('OrderHistory')
export class OrderHistory extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToMany(() => Order, (order) => order.orderHistory)
    orders: Order[];
}
