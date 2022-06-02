import { Row } from 'antd';
import React, { FC } from 'react';
import { IItem } from '../../models/IItem';
import Item from '../item/item';

const ItemList: FC<{ items: IItem[] }> = ({ items }) => {
    return (
        <Row
            style={{ overflowY: 'scroll', maxHeight: '70vh' }}
            justify="space-around"
        >
            {items ? (
                items.map((item) => {
                    return <Item key={item.id} {...item} />;
                })
            ) : (
                <h1>Product list is empty!</h1>
            )}
        </Row>
    );
};

export default ItemList;
