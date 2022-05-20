import { User } from '../models/user.entity';

interface UserReg {
    email: string;
    username: string;
    phone: number;
    password: string;
}

export class CreateUserDto {
    readonly email: string;
    readonly username: string;
    readonly phone: number;
    readonly password: string;

    constructor({ email, username, phone, password }: UserReg) {
        this.email = email;
        this.username = username;
        this.phone = phone;
        this.password = password;
    }
}

export class UserDto {
    readonly id: number;
    readonly email: string;
    readonly username: string;
    readonly phone: number;

    constructor(model: User) {
        this.email = model.email;
        this.username = model.username;
        this.phone = model.phone;
        this.id = model.id;
    }
}
