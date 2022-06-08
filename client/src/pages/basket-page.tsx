import { Button, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../api/basket-service';
import ItemList from '../components/list-item/item-list';
import Loader from '../components/loader/loader';
import Modal from '../components/modal/modal';
import { useAppSelector } from '../hooks/redux';
import { IItem } from '../models/IItem';
import Order from './order-page';

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
                <h1 style={{ textAlign: 'center', fontSize: '160px' }}>
                    EMPTY
                </h1>
            )}
            {!isLoading && items && (
                <ItemList
                    items={items}
                    setItems={(item) =>
                        setItems(items.filter((i) => i.id !== item.id))
                    }
                    isBasket={true}
                />
            )}
            {!isLoading && (
                <Row justify="space-around" align="middle">
                    <h1 style={{ textAlign: 'center', fontSize: '100px' }}>
                        {'Total price: ' + sum}
                    </h1>
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
