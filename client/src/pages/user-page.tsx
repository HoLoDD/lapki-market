import { Button, Form, Input, Layout, Row } from 'antd';
import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { editUser } from '../store/reducers/action-creator';

const User: FC = () => {
    const dispatch = useAppDispatch();
    const { user, isLoading } = useAppSelector((state) => state.authReducer);

    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(user.username);
    const [phone, setPhone] = useState<number>(user.phone);

    const onFinish = () => {
        console.log(email, password, username, phone);

        dispatch(editUser({ email, password, username, phone }));
    };

    const onFinishFailed = (errorInfo: any) => {};
    return (
        <Layout>
            <Row
                justify="center"
                align="middle"
                style={{ height: 'calc(100vh - 64px)', background: '#00bfff' }}
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
                    <Form.Item label="NEW Email" name="email">
                        <Input
                            placeholder={email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="NEW Password" name="password">
                        <Input.Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="NEW Username" name="username">
                        <Input
                            placeholder={username}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="NEW Phone" name="phone">
                        <Input
                            placeholder={phone.toString()}
                            value={phone}
                            onChange={(e) => setPhone(parseInt(e.target.value))}
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                        >
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </Layout>
    );
};

export default User;
