import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';

const Navbar: FC = () => {
    return (
        <Layout.Header>
            <Row justify="end">
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item>Main</Menu.Item>
                    <Menu.Item>Basket</Menu.Item>
                    <Menu.Item>UserName</Menu.Item>
                    <Menu.Item>Logout</Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
