import { ShoppingCartOutlined } from '@ant-design/icons';
import { Row, Menu, Input, Button } from 'antd';
import React, { FC, useState } from 'react';
import styles from './searchbar.module.css';

const Searchbar: FC = () => {
    const [search, setSearch] = useState('');

    return (
        <Row align="middle" className={styles.row} justify="space-around">
            <Row>
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.input}
                    placeholder="Search"
                />
            </Row>
            <Menu
                className={styles.menu}
                mode="horizontal"
                selectable={false}
                disabledOverflow={true}
            >
                <Menu.Item className={styles.item}>Cat</Menu.Item>
                <Menu.Item className={styles.item}>Dog</Menu.Item>
                <Menu.Item className={styles.item}>Bird</Menu.Item>
            </Menu>
            <Button icon={<ShoppingCartOutlined />} type="ghost" shape="round">
                Cart
            </Button>
        </Row>
    );
};

export default Searchbar;
