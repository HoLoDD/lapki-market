import {
    Column,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Item } from './item.entity';

@Entity('Type')
export class Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @OneToOne(() => Item)
    item: Item;

    @ManyToOne(() => Category)
    category: Category;
}
