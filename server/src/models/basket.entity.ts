import {
    BaseEntity,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './item.entity';
import { User } from './user.entity';

@Entity('Basket')
export class Basket extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    user: User;

    @ManyToMany(() => Item, (item) => item.baskets)
    @JoinTable()
    items: Item[];
}
