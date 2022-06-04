import React, { FC, useState } from 'react';
import { Layout, Menu, Row } from 'antd';
import {
    HomeTwoTone,
    IdcardOutlined,
    LogoutOutlined,
    LoginOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import logo from './../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../routes/routes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logoutUser } from '../../store/reducers/action-creator';

const Navbar: FC = () => {
    const dispatch = useAppDispatch();
    const { isAuth, user } = useAppSelector((state) => state.authReducer);

    const logout = () => {
        dispatch(logoutUser());
    };

    const nav_items: MenuProps['items'] = [
        {
            label: 'Home',
            key: '',
            icon: <HomeTwoTone />,
        },

        {
            label: (
                <a
                    href="https://ant.design"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    About
                </a>
            ),
            key: 'alipay',
        },
        isAuth
            ? {
                  label: user.username,
                  key: RouteNames.USER,
                  icon: <IdcardOutlined />,
              }
            : {
                  label: 'Reg',
                  key: 'reg',
                  icon: <LoginOutlined />,
              },
        isAuth
            ? {
                  label: 'Logout',
                  onClick: logout,
                  key: 'logout',
                  icon: <LogoutOutlined />,
              }
            : {
                  label: 'Login',
                  key: 'login',
              },
    ];

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
        setCurrent(e.key);
    };

    const navigate = useNavigate();

    return (
        <Layout.Header>
            <Row justify="space-between">
                <img src={logo} alt="" />
                <Menu
                    selectable={false}
                    onClick={onClick}
                    theme="dark"
                    mode="horizontal"
                    disabledOverflow={true}
                    items={nav_items}
                ></Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
