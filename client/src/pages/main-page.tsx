import { PageHeader } from 'antd';
import React, { FC, useEffect } from 'react';
import ItemList from '../components/list-item/item-list';
import Searchbar from '../components/searchbar/searchbar';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchItems } from '../store/reducers/action-creator';

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const { items, isLoading, error } = useAppSelector(
        (state) => state.itemReducer
    );

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    return (
        <>
            <Searchbar />
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {!isLoading && <ItemList items={items} />}
            </div>
        </>
    );
};

export default Main;
