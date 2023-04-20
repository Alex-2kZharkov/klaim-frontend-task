import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Form, Input } from 'antd';

import { UserAction, UserContext } from '../../store';
import { Endpoints, Routes } from '../../constants';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';
import { LoginDto, TokenDto } from '../../types';

import { useAxios } from '../../hooks/useAxios';

import styles from './SignIn.module.scss';

export const SignIn = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const { fetchData } = useAxios<TokenDto>({});

  const onFinish = async (loginDto: LoginDto) => {
    const response = await fetchData({ url: Endpoints.signIn, method: 'POST', data: loginDto });

    if (response?.data?.token) {
      dispatch({ type: UserAction.signIn });
      navigate(Routes.profile);
    }
  };

  return (
    <Layout>
      <Header />
      <Form
        className={styles.form}
        name="login-form"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
      >
        <Form.Item
          className={styles.formItem}
          label="Email"
          name="email"
          rules={[
            { type: 'email', message: 'Enter valid email' },
            {
              required: true,
              message: 'Required',
            },
          ]}
          extra={`We'll never share your email with anyone else`}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          className={styles.submitButton}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Required',
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className={styles.formItem} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};
