import axios, { AxiosRequestConfig } from 'axios';
import { useAppDispatch } from '../hooks/redux';
import { IUserResponse } from '../models/IUser';
import { authSilce } from '../store/reducers/auth-slice';

const host = axios.create({
    // baseURL: 'http://localhost:4000',
    baseURL: 'https://lapki-market.herokuapp.com/',
    withCredentials: true,
});

const authHost = axios.create({
    // baseURL: 'http://localhost:4000',
    baseURL: 'https://lapki-market.herokuapp.com/',
    withCredentials: true,
});

const authReqInterceptor = (config: AxiosRequestConfig) => {
    config.headers!.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};
authHost.interceptors.request.use(authReqInterceptor);

authHost.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalReq = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalReq._isRetry = true;
            try {
                const response = await host.get<IUserResponse>(
                    '/api/user/refresh'
                );
                localStorage.setItem('token', response.data.accessToken);
                return authHost.request(originalReq);
            } catch (error) {
                console.log('User is not authorized');
            }
        }
        throw error;
    }
);

export { host, authHost };
