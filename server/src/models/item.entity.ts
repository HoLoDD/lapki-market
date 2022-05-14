import {
    Column,
    Entity,
    JoinTable,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Type } from './type.entity';

@Entity('Item')
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('int')
    price: number;

    @Column('varchar')
    description: string;

    @Column('varchar')
    photo: string;

    @OneToOne(() => Type)
    @JoinTable()
    type: Type;
}
