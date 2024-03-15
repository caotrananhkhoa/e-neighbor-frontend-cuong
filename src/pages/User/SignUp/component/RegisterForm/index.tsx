import { useIntl } from '@umijs/max';
import { Form } from 'antd';
import React from 'react';

import Button from '@/components/Button';
import InputText from '@/components/Input';
import HiddenInput from '@/components/Input/HiddenInput';
import { REGISTER_FORM_KEY } from '@/const/register-form';

const { Item } = Form;
export type TRegisterForm = Partial<TPropsFormInput> & {
  isLoading: boolean;
};

const RegisterForm: React.FC<TRegisterForm> = ({ control, errors, onSubmit, isLoading }) => {
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();

  return (
    <Form layout="vertical" rootClassName="custom-ant-form" form={form}>
      <Item
        label={formatMessage({
          id: 'register.form.userName.label',
          defaultMessage: 'Username',
        })}
      >
        <InputText
          placeholder="abcxyz"
          placement="top"
          control={control}
          error={errors}
          name={REGISTER_FORM_KEY['userName']}
          size="large"
        />
      </Item>
      <Item
        label={formatMessage({
          id: 'register.form.fullName.label',
          defaultMessage: 'Fullname',
        })}
        required
      >
        <InputText
          placeholder="abcxyz"
          placement="top"
          control={control}
          error={errors}
          name={REGISTER_FORM_KEY['fullName']}
          size="large"
        />
      </Item>
      <Item
        label={formatMessage({
          id: 'register.form.password.label',
          defaultMessage: 'Password',
        })}
        required
      >
        <HiddenInput
          placeholder="******"
          placement="top"
          control={control}
          error={errors}
          name={REGISTER_FORM_KEY['password']}
          size="large"
        />
      </Item>
      <Item
        label={formatMessage({
          id: 'register.form.password.confirm.label',
          defaultMessage: 'Password Confirmation',
        })}
        required
      >
        <HiddenInput
          placeholder="******"
          placement="top"
          control={control}
          error={errors}
          name={REGISTER_FORM_KEY['passwordConfirm']}
          size="large"
        />
      </Item>
      <Item
        label={formatMessage({
          id: 'register.form.email.label',
          defaultMessage: 'Your Email',
        })}
        required
      >
        <InputText
          placeholder="x@mail-to.com"
          placement="top"
          control={control}
          error={errors}
          name={REGISTER_FORM_KEY['email']}
          size="large"
        />
      </Item>
      <Button
        onClick={onSubmit}
        htmlType="submit"
        onSubmit={onSubmit}
        btnSize="large"
        type="primary"
        className="w-full"
        loading={isLoading}
      >
        {formatMessage({
          id: 'register.form.submit',
          defaultMessage: 'Sign Up',
        })}
      </Button>
    </Form>
  );
};

export default RegisterForm;
