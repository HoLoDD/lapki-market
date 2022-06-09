import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Row, Menu, Input, Button, MenuProps } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

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
                            key: '1',
                            onClick: () => setSearch({ ...search, type: 1 }),
                        },
                        {
                            label: 'Toys',
                            key: '2',
                            onClick: () => setSearch({ ...search, type: 4 }),
                        },
                        {
                            label: 'Carriers',
                            key: '3',
                            onClick: () => setSearch({ ...search, type: 5 }),
                        },
                        {
                            label: 'Beds',
                            key: '4',
                            onClick: () => setSearch({ ...search, type: 6 }),
                        },
                        {
                            label: 'Scratchers',
                            key: '5',
                            onClick: () => setSearch({ ...search, type: 7 }),
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
                            key: '6',
                            onClick: () => setSearch({ ...search, type: 2 }),
                        },
                        {
                            label: 'Toys',
                            key: '7',
                            onClick: () => setSearch({ ...search, type: 8 }),
                        },
                        {
                            label: 'Leashes',
                            key: '8',
                            onClick: () => setSearch({ ...search, type: 9 }),
                        },
                        {
                            label: 'Kennels',
                            key: '9',
                            onClick: () => setSearch({ ...search, type: 10 }),
                        },
                        {
                            label: 'Bowls',
                            key: '10',
                            onClick: () => setSearch({ ...search, type: 11 }),
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
                            key: '11',
                            onClick: () => setSearch({ ...search, type: 3 }),
                        },
                        {
                            label: 'Toys',
                            key: '12',
                            onClick: () => setSearch({ ...search, type: 14 }),
                        },
                        {
                            label: 'Cages',
                            key: '13',
                            onClick: () => setSearch({ ...search, type: 12 }),
                        },
                        {
                            label: 'Feeders',
                            key: '14',
                            onClick: () => setSearch({ ...search, type: 13 }),
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
                onClick={() => navigate('basket')}
            >
                Cart
            </Button>
        </Row>
    );
};

export default Searchbar;
