import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import useLogin from './useLogin';

function Login() {
  const { handleSubmit } = useLogin();
  // loading

  return (
    <div className="flex flex-row text-center">
      <Form
        name="login-form"
        className="max-w-screen-sm"
        initialValues={{
          email: '',
          password: '',
        }}
        onFinish={handleSubmit}
        style={{ maxWidth: 500, margin: '0 auto' }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
