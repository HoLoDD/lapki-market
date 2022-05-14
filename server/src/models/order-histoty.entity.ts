import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { User } from './user.entity';

@Entity('OrderHistory')
export class OrderHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    user: User;

    @OneToMany(() => Order, (order) => order.orderHistory)
    orders: Order[];
}
