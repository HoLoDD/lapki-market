import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import Main from '../pages/main-page';
import { privateRoutes, publicRoutes } from '../routes/routes';
import Loader from './loader/loader';

const AppRouter: FC = () => {
    const { isAuth } = useAppSelector((state) => state.authReducer);

    return (
        <Routes>
            {isAuth &&
                privateRoutes.map(({ element: Element, ...props }) => (
                    <Route element={<Element />} {...props} />
                ))}

            {!isAuth &&
                publicRoutes.map(({ element: Element, ...props }) => (
                    <Route element={<Element />} {...props} />
                ))}
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;
