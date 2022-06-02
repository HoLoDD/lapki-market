import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Row, Menu, Input, Button, MenuProps } from 'antd';
import React, { FC } from 'react';
import styles from './searchbar.module.css';

interface ISearch {
    input: string;
    type: number;
}

interface Props {
    search: ISearch;
    setSearch: (search: ISearch) => void;
}

const Searchbar: FC<Props> = ({ search, setSearch }) => {
    const categories: MenuProps['items'] = [
        {
            label: 'ALL',
            key: 'all',
            onClick: () => setSearch({ ...search, type: 0 }),
        },
        {
            label: 'Cat',
            key: 'cat',
            icon: <DownOutlined />,
            children: [
                {
                    type: 'group',
                    children: [
                        {
                            label: 'Food',
                            key: 'type:1',
                            onClick: () => setSearch({ ...search, type: 4 }),
                        },
                        {
                            label: 'House',
                            key: 'type:2',
                            onClick: () => setSearch({ ...search, type: 9 }),
                        },
                    ],
                },
            ],
        },
        {
            label: 'Dog',
            key: 'dog',
            icon: <DownOutlined />,
            children: [
                {
                    type: 'group',
                    children: [
                        {
                            label: 'Food',
                            key: 'type:3',
                            onClick: () => setSearch({ ...search, type: 5 }),
                        },
                        {
                            label: 'Toy',
                            key: 'type:4',
                            onClick: () => setSearch({ ...search, type: 8 }),
                        },
                    ],
                },
            ],
        },
        {
            label: 'Bird',
            key: 'bird',
            icon: <DownOutlined />,
            children: [
                {
                    type: 'group',
                    children: [
                        {
                            label: 'Food',
                            key: 'type:5',
                            onClick: () => setSearch({ ...search, type: 6 }),
                        },
                        {
                            label: 'Cage',
                            key: 'type:6',
                            onClick: () => setSearch({ ...search, type: 7 }),
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <Row align="middle" className={styles.row} justify="space-around">
            <Row>
                <Input
                    value={search.input}
                    onChange={(e) =>
                        setSearch({ ...search, input: e.target.value })
                    }
                    className={styles.input}
                    placeholder="Search"
                />
            </Row>
            <Menu
                className={styles.menu}
                items={categories}
                mode="horizontal"
                selectable={false}
                disabledOverflow={true}
            />

            <Button
                className={styles.btn}
                icon={<ShoppingCartOutlined />}
                type="ghost"
                shape="round"
            >
                Cart
            </Button>
        </Row>
    );
};

export default Searchbar;
