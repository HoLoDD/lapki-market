import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../pages/main-page';
import { privateRoutes, publicRoutes } from '../routes/routes';

const AppRouter: FC = () => {
    const isAuth = false;
    // const { store } = useContext(Context);

    //   useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //       store.checkAuth();
    //       console.log(store.isAuth);
    //     }
    //   }, [store]);

    return (
        <Routes>
            {isAuth &&
                privateRoutes.map(({ element: Element, ...props }) => (
                    <Route element={<Element />} {...props} />
                ))}

            {publicRoutes.map(({ element: Element, ...props }) => (
                <Route element={<Element />} {...props} />
            ))}
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;
