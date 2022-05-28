import React, { FC, useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchItems } from './store/reducers/action-creator';

const App: FC = () => {
    const dispatch = useAppDispatch();
    const { items, isLoading, error } = useAppSelector(
        (state) => state.itemReducer
    );

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    return (
        <div className="App">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {!isLoading && JSON.stringify(items, null, 2)}
        </div>
    );
};

export default App;
