import { Row } from 'antd';
import React, { FC } from 'react';
import { IItem } from '../../models/IItem';
import Item from '../item/item';

interface Props {
    items: IItem[];
    setItems?: (items: IItem) => void;
    isBasket: boolean;
}

const ItemList: FC<Props> = ({ items, setItems, isBasket }) => {
    return (
        <Row
            style={{ overflowY: 'scroll', maxHeight: '70vh' }}
            justify="space-around"
        >
            {items ? (
                items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                            setItems={setItems}
                            isBasket={isBasket}
                        />
                    );
                })
            ) : (
                <h1>Product list is empty!</h1>
            )}
        </Row>
    );
};

export default ItemList;
