import { Layout } from 'antd';
import React, { FC, useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/navbar/navbar';

const App: FC = () => {
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
