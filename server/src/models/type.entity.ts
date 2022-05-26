import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Item } from './item.entity';

@Entity('Type')
export class Type extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @OneToMany(() => Item, (item) => item.type)
    items: Item[];

    @ManyToOne(() => Category)
    category: Category;
}
