import { Button } from 'antd';
import React, { FC } from 'react';
import { IItem } from '../../models/IItem';
import styles from './item.module.css';

const Item: FC<IItem> = ({ photo, name, description, price, id }) => {
    return (
        <div className={styles.card}>
            <div>
                <img
                    className={styles.photo}
                    src={'https://lapki-market.herokuapp.com/' + photo}
                    alt="product"
                />
                <h2 className={styles.title}>{name}</h2>
            </div>
            <div className={styles.info}>
                <p className={styles.description}>{description}</p>
                <div>
                    <h3 className={styles.price}>Price - {price}</h3>
                    <Button className={styles.btn}>Add to cart</Button>
                </div>
            </div>
        </div>
    );
};

export default Item;
