import React, { FC, useEffect } from 'react';
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
            <h1>MAIN</h1>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {!isLoading &&
                    items.map((item) => {
                        return (
                            <div
                                key={item.id}
                                style={{
                                    border: '2px solid black',
                                    margin: '20px 10px',
                                    padding: '15px',
                                    width: 'fit-content',
                                }}
                            >
                                <h2>
                                    {item.id}. {item.name}
                                </h2>
                                <span>{item.price}</span>
                                <p>{item.description}</p>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Main;
