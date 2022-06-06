import React, { FC } from 'react';
import styles from './order.module.css';
import { Row } from 'antd';
import { IOrder } from '../../models/IOrder';

interface Props {
    order: IOrder;
}

const Order: FC<Props> = ({
    order: { id, city, name, phone, price, surname, soldItems },
}) => {
    return (
        <div className={styles.card}>
            <h1>Order ID: {id}</h1>
            <h3>
                Client - {name} {surname} ({phone})
            </h3>
            <h3>City - {city}</h3>
            <h3>Total cost - {price}</h3>
            <div>
                <h2>Items:</h2>
                {soldItems?.length ? (
                    soldItems.map((item) => (
                        <Row justify="space-between">
                            <span>{item.name}</span>
                            <span>Price: {item.price}</span>
                        </Row>
                    ))
                ) : (
                    <h2>Empty</h2>
                )}
            </div>
        </div>
    );
};

export default Order;
