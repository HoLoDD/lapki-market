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

    @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    user: User;

    @ManyToOne(() => Item, { cascade: true })
    @JoinColumn()
    items: Item[];
}
