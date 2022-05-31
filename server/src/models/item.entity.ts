import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Basket } from './basket.entity';
import { Type } from './type.entity';

@Entity('Item')
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('int')
    price: number;

    @Column('varchar')
    description: string;

    @Column('varchar', { nullable: true })
    photo: string;

    @ManyToOne(() => Type, (type) => type.items, { cascade: true })
    @JoinColumn()
    type: Type;

    @ManyToMany(() => Basket, (basket) => basket.items)
    baskets: Basket[];
}
