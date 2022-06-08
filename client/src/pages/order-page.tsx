import { Button, Form, Input, Layout, Row } from 'antd';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import orderService from '../api/order-service';
import { IOrder } from '../models/IOrder';

interface Props {
    price: number;
}

const Order: FC<Props> = ({ price }) => {
    const [order, setOrder] = useState<IOrder>({ price } as IOrder);

    const navigate = useNavigate();

    const onFinish = () => {
        orderService.createOrder(order);
        navigate('../');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo);
    };

    return (
        <Layout>
            <Row
                justify="center"
                align="middle"
                style={{
                    height: 'calc(100vh - 64px)',
                    background: '#8cd3ff',
                }}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input
                            value={order.name}
                            onChange={(e) =>
                                setOrder({ ...order, name: e.target.value })
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Surname"
                        name="surname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your surname!',
                            },
                        ]}
                    >
                        <Input
                            value={order.surname}
                            onChange={(e) =>
                                setOrder({ ...order, surname: e.target.value })
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            value={order.phone}
                            onChange={(e) =>
                                setOrder({
                                    ...order,
                                    phone: parseInt(e.target.value),
                                })
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="City"
                        name="city"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your city!',
                            },
                        ]}
                    >
                        <Input
                            value={order.city}
                            onChange={(e) =>
                                setOrder({
                                    ...order,
                                    city: e.target.value,
                                })
                            }
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <h1>Total price: {price}</h1>

                        <Button type="primary" htmlType="submit">
                            Confirm
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </Layout>
    );
};

export default Order;
