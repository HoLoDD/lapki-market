import {
    BaseEntity,
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './item.entity';

@Entity('SoldItem')
export class SoldItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('int')
    price: number;

    @OneToOne(() => Item)
    item: Item;
}
