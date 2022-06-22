import React, { FC, useState } from 'react';
import { Button, Form, Input, Layout, Radio, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IOrder } from '../../models/IOrder';
import orderService from '../../api/order-service';
import styles from './order-form.module.css';

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
        <Layout className={styles.container}>
            <Row className={styles.card} justify="center" align="middle">
                <Form
                    className={styles.form}
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
                        <span>Payment method: </span>
                        <Radio.Group>
                            <Radio value={1}>Cash</Radio>
                            <Radio value={2} disabled>
                                Credit Card
                            </Radio>
                        </Radio.Group>
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
