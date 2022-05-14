import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from './type.entity';

@Entity('Category')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @OneToMany(() => Type, (type) => type.category)
    type: Type[];
}
