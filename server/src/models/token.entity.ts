import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('Token')
export class Token extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { unique: true })
    refreshToken: string;

    @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    user: User;
}
