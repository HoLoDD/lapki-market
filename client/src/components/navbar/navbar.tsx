import React, { FC, useState } from 'react';
import { Layout, Menu, Row } from 'antd';
import {
    SearchOutlined,
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
    const { isAuth } = useAppSelector((state) => state.authReducer);

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
            label: 'Category',
            key: 'cat',
            icon: <SearchOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Cat',
                    children: [
                        {
                            label: 'Food',
                            key: 'type:1',
                        },
                        {
                            label: 'House',
                            key: 'type:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Dog',
                    children: [
                        {
                            label: 'Food',
                            key: 'type:3',
                        },
                        {
                            label: 'Toy',
                            key: 'type:4',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Parrot',
                    children: [
                        {
                            label: 'Food',
                            key: 'type:5',
                        },
                        {
                            label: 'Cage',
                            key: 'type:6',
                        },
                    ],
                },
            ],
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
                  label: 'Username',
                  key: 'username',
                  icon: <IdcardOutlined />,
                  children: [
                      {
                          label: 'Edit',
                          key: RouteNames.USER,
                      },
                      {
                          label: 'Basket',
                          key: RouteNames.BASKET,
                      },
                  ],
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
        console.log('click ', e);
        navigate(e.key);
        setCurrent(e.key);
    };

    const navigate = useNavigate();

    return (
        <Layout.Header>
            <Row justify="space-between">
                <img src={logo} alt="" />
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    theme="dark"
                    mode="horizontal"
                    items={nav_items}
                ></Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
