import React, { FC } from 'react';
import { Button } from 'antd';
import userService from '../../api/basket-service';
import { useAppSelector } from '../../hooks/redux';
import { IItem } from '../../models/IItem';
import styles from './item.module.css';

interface Props {
    item: IItem;
    setItems?: (items: IItem) => void;
    isBasket: boolean;
}

const Item: FC<Props> = ({ item, setItems, isBasket }) => {
    const { user } = useAppSelector((state) => state.authReducer);

    const addToBasket = async () => {
        const response = await userService.addItem(user.id, item.id);
        alert('Product "' + item.name + '" added to basket!');
    };

    const removeFromBasket = async () => {
        const response = await userService.removeItem(user.id, item.id);
        setItems!(item);
        alert('Product "' + item.name + '" added to basket!');
    };

    return (
        <div className={styles.card}>
            <div>
                <img
                    className={styles.photo}
                    src={'https://lapki-market.herokuapp.com/' + item.photo}
                    alt="product"
                />
                <h2 className={styles.title}>{item.name}</h2>
            </div>
            <div className={styles.info}>
                <p className={styles.description}>{item.description}</p>
                <div>
                    <h3 className={styles.price}>Price: {item.price} UAH</h3>
                    <Button
                        className={
                            isBasket ? styles.btn_remove : styles.btn_add
                        }
                        onClick={
                            isBasket
                                ? () => removeFromBasket()
                                : () => addToBasket()
                        }
                    >
                        {isBasket ? 'Remove' : 'Add to cart'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Item;
