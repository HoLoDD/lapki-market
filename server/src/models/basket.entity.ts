import {
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './item.entity';
import { User } from './user.entity';

@Entity('Basket')
export class Basket {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    user: User;

    @ManyToOne(() => Item)
    @JoinColumn()
    items: Item[];
}
