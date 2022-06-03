import { Layout } from 'antd';
import React, { FC, useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/navbar/navbar';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { checkAuth } from './store/reducers/action-creator';

const App: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth());
        }
    }, []);

    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
};

export default App;
