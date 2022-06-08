import React, { FC, useEffect, useState } from 'react';
import userService from '../../api/user-service';
import OrdersList from '../../components/list-order/list-order';
import Loader from '../../components/loader/loader';
import { IOrder } from '../../models/IOrder';

const OrderHistory: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState<IOrder[]>([] as IOrder[]);
    console.log(orders);

    useEffect(() => {
        userService
            .getOrdersHistory()
            .then((respose) => {
                setOrders(respose.data.orders);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div style={{ height: '80vh' }}>
            {isLoading && <Loader />}
            {!isLoading && orders.length === 0 && (
                <h1 style={{ textAlign: 'center', fontSize: '160px' }}>
                    Order history is empty!
                </h1>
            )}
            {!isLoading && orders && <OrdersList orders={orders} />}
        </div>
    );
};

export default OrderHistory;
