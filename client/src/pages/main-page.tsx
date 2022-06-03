import { Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import ItemList from '../components/list-item/item-list';
import Loader from '../components/loader/loader';
import Searchbar from '../components/searchbar/searchbar';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchItems } from '../store/reducers/action-creator';

interface ISearch {
    input: string;
    type: number;
}

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const { items, isLoading, error } = useAppSelector(
        (state) => state.itemReducer
    );

    const [search, setSearch] = useState<ISearch>({ input: '', type: 0 });

    useEffect(() => {
        dispatch(fetchItems(search.type));
    }, [search.type]);

    return (
        <>
            <Searchbar search={search} setSearch={setSearch} />
            {isLoading && <Loader />}
            {error && <Row justify="center">{error}</Row>}
            {!isLoading && (
                <ItemList
                    items={items.filter((item) => {
                        return item.name
                            .toLowerCase()
                            .includes(search.input.toLowerCase());
                    })}
                    isBasket={false}
                />
            )}
        </>
    );
};

export default Main;
