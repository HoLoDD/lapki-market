import React, { FC, useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
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
        <>
            <header></header>
            <main>
                <AppRouter />
                <div className="App">
                    {isLoading && <h1>Loading...</h1>}
                    {error && <h1>{error}</h1>}
                    {!isLoading && JSON.stringify(items, null, 2)}
                </div>
            </main>
            <footer></footer>
        </>
    );
};

export default App;
