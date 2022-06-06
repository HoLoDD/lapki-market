import React, { FC } from 'react';
import { IOrder } from '../../models/IOrder';
import Order from '../order/order';
import styles from './list-order.module.css';

interface Props {
    orders: IOrder[];
}

const OrdersList: FC<Props> = ({ orders }) => {
    return (
        <div className={styles.list}>
            {orders ? (
                orders.map((order) => <Order key={order.id} order={order} />)
            ) : (
                <h1>Orders list is empty!</h1>
            )}
        </div>
    );
};

export default OrdersList;
