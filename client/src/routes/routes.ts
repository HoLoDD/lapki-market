import React from 'react';
import Login from '../pages/login-page';
import Reg from '../pages/reg-page';
import Basket from '../pages/basket-page';
import Order from '../pages/order-page';
import Item from '../pages/item-page';
import User from '../pages/user-page';
import OrderHistory from '../pages/order-history-page';

export interface IRoute {
    key: string;
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    REGISTRATION = '/reg',
    LOGIN = '/login',
    USER = '/user',
    ITEM = '/item',
    BASKET = '/basket',
    // ORDER = '/order',
    ORDER_HISTORY = '/history',
}

export const publicRoutes: IRoute[] = [
    {
        key: RouteNames.REGISTRATION,
        path: RouteNames.REGISTRATION,
        element: Reg,
    },
    {
        key: RouteNames.LOGIN,
        path: RouteNames.LOGIN,
        element: Login,
    },
    {
        key: RouteNames.ITEM,
        path: RouteNames.ITEM,
        element: Item,
    },
];

export const privateRoutes: IRoute[] = [
    {
        key: RouteNames.BASKET,
        path: RouteNames.BASKET,
        element: Basket,
    },
    // {
    //     key: RouteNames.ORDER,
    //     path: RouteNames.ORDER,
    //     element: Order,
    // },
    {
        key: RouteNames.USER,
        path: RouteNames.USER,
        element: User,
    },
    {
        key: RouteNames.ORDER_HISTORY,
        path: RouteNames.ORDER_HISTORY,
        element: OrderHistory,
    },
    {
        key: RouteNames.ITEM,
        path: RouteNames.ITEM,
        element: Item,
    },
];
