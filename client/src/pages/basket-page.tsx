import React, { FC, useEffect, useState } from 'react';
import { getItems } from '../api/basketAPI';
import ItemList from '../components/list-item/item-list';
import Loader from '../components/loader/loader';
import { useAppSelector } from '../hooks/redux';
import { IItem } from '../models/IItem';

const Basket: FC = () => {
    const { user } = useAppSelector((state) => state.authReducer);

    const [items, setItems] = useState<IItem[]>([] as IItem[]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getItems(user.id)
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
        </>
    );
};

export default Basket;
