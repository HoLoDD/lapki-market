import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
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

    @OneToOne(() => Type, (type) => type.item, { cascade: true })
    @JoinColumn()
    type: Type;
}
