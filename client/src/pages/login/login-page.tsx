import { Button, Checkbox, Form, Input, Layout, Row } from 'antd';
import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loginUser } from '../../store/reducers/action-creator';

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const { error, isLoading } = useAppSelector((state) => state.authReducer);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = () => {
        dispatch(loginUser({ email, password }));
    };

    const onFinishFailed = (errorInfo: any) => {};

    return (
        <Layout>
            <Row
                justify="center"
                align="middle"
                style={{ height: 'calc(100vh - 64px)', background: '#0cf' }}
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
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    {/* <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </Layout>
    );
};

export default Login;
