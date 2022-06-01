import { IUserResponse } from '../models/IUser';
import { authHost, host } from './index';

export interface RegUser {
    email: string;
    password: string;
    username: string;
    phone: number;
}

export const registration = async ({
    email,
    password,
    username,
    phone,
}: RegUser) => {
    const response = await host.post<IUserResponse>('api/user/reg', {
        email,
        password,
        username,
        phone,
    });
    localStorage.setItem('token', response.data.accessToken);

    return response;
};

export interface LoginUser {
    email: string;
    password: string;
}

export const login = async ({ email, password }: LoginUser) => {
    const response = await host.post<IUserResponse>('api/user/login', {
        email,
        password,
    });
    localStorage.setItem('token', response.data.accessToken);

    return response;
};

export const logout = async () => {
    const response = await authHost.get('api/user/logout');

    return response;
};

// export const check = async () => {
//     const response = host.post('api/user/login');

//     return response;
// };
