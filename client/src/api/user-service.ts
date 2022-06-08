import { IOrderHistory } from '../models/IOrderHistory';
import { IUser, IUserResponse } from '../models/IUser';
import { authHost, host } from './index';

export interface RegUser {
    email: string;
    password: string;
    username: string;
    phone: number;
}

export interface LoginUser {
    email: string;
    password: string;
}

class UserService {
    async reg({ email, password, username, phone }: RegUser) {
        const response = await host.post<IUserResponse>('api/user/reg', {
            email,
            password,
            username,
            phone,
        });
        localStorage.setItem('token', response.data.accessToken);

        return response;
    }

    async login({ email, password }: LoginUser) {
        const response = await host.post<IUserResponse>('api/user/login', {
            email,
            password,
        });
        localStorage.setItem('token', response.data.accessToken);

        return response;
    }

    async logout() {
        const response = await authHost.get('api/user/logout');
        localStorage.removeItem('token');

        return response;
    }

    async check() {
        const response = await host.get<IUserResponse>('api/user/refresh');
        localStorage.setItem('token', response.data.accessToken);

        return response;
    }

    async editProfile({ email, password, username, phone }: RegUser) {
        const response = await authHost.put<IUser>('api/user', {
            email,
            password,
            username,
            phone,
        });

        return response;
    }

    async getOrdersHistory() {
        const response = await authHost.get<IOrderHistory>('api/order-history');

        return response;
    }
}

export default new UserService();
