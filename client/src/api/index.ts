import axios, { AxiosRequestConfig } from 'axios';

const host = axios.create({
    baseURL: 'https://lapki-market.herokuapp.com/',
});

const authHost = axios.create({
    baseURL: 'https://lapki-market.herokuapp.com/',
});

const authInterceptor = (config: AxiosRequestConfig) => {
    config.headers!.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

authHost.interceptors.request.use(authInterceptor);

export { host, authHost };
