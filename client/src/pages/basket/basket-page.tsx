import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import userService from '../../api/basket-service';
import { IItem } from '../../models/IItem';

import { Button, Row } from 'antd';
import ItemList from '../../components/list-item/item-list';
import Order from '../../components/order-form/order-form';
import Modal from '../../components/modal/modal';
import Loader from '../../components/loader/loader';

import styles from './basket-page.module.css';

const Basket: FC = () => {
    const { user } = useAppSelector((state) => state.authReducer);

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState<IItem[]>([] as IItem[]);
    const sum = items.reduce((sum, item) => sum + item.price, 0);
    const [isModal, setIsModal] = useState<boolean>(false);

    useEffect(() => {
        userService
            .getItems(user.id)
            .then((respose) => {
                setItems(respose.data.items);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            <Modal visible={isModal} setVisible={setIsModal}>
                <Order price={sum}></Order>
            </Modal>
            {!isLoading && items.length === 0 && (
                <h1 className={styles.empty}>EMPTY</h1>
            )}
            {!isLoading && items && (
                <div className={styles.content}>
                    <ItemList
                        items={items}
                        setItems={(item) =>
                            setItems(items.filter((i) => i.id !== item.id))
                        }
                        isBasket={true}
                    />
                </div>
            )}
            {!isLoading && (
                <Row justify="space-around" align="middle">
                    <h1 className={styles.totalSum}>{'Total price: ' + sum}</h1>
                    <Button
                        size="large"
                        type="primary"
                        onClick={() => setIsModal(true)}
                    >
                        Order
                    </Button>
                </Row>
            )}
        </>
    );
};

export default Basket;
