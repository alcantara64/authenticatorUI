import react, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { VerificationService } from '../services/verificationService';

export const InputFormPage = () => {
  const [sentCode, setSentCode] = useState(false);
  const onFinish = (values: any) => {
    VerificationService.sendToken(values.phone)
      .then((res) => {
        setSentCode(true);
      })
      .catch((err) => {
        setSentCode(false);
      });
  };
  if (!sentCode) {
    return (
        <>
      <Form onFinish={onFinish}>
        <div className="userInput">
          <Form.Item
            label="phone"
            name="phone"
            rules={[{ required: true, message: 'phone number is required' }]}
          >
            <Input />
          </Form.Item>
         
        </div>
        <Button htmlType="submit">CONFIRM</Button>
      </Form>
       
       </>
    );
  } else {
    return <ConfirmOTPPage />;
  }
};

export const ConfirmOTPPage = () => {
    const [isVerified, setIsVerified] = useState(false);
    const onFinish = (values: any) => {
        VerificationService.sendToken(values.phone)
          .then((res) => {
            setIsVerified(true);
          })
          .catch((err) => {
            setIsVerified(false);
          });
      };
  return (
    <>
      <Form>
        <h1>ENTER OTP</h1>
        <div className="userInput">
          <Input name="ist" type="text" id="ist" maxLength={1} />
          <Input type="text" name="sec" id="sec" maxLength={1} />
          <Input type="text" name="third" id="third" maxLength={1} />
          <Input type="text" name="fourth" id="fourth" maxLength={1} />
          <Input type="text" name="fifth" id="fifth" maxLength={1} />
        </div>
      </Form>
      <Button>CONFIRM</Button>
    </>
  );
};
