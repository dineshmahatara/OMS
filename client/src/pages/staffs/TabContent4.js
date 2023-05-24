import { Form, Input, Button } from 'antd';
import { TabContent } from 'react-bootstrap';

const TabContent4 = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Permanent Address"
        name="PermanentAddress"
        rules={[
          {
            required: true,
            message: 'Please enter Permanent Address',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="District"
        name="PermanentAddressDistrict"
        rules={[
          {
            required: true,
            message: 'Please enter District',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Municipality"
        name="PermanentAddressMun"
        rules={[
          {
            required: true,
            message: 'Please enter Municipality',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ward"
        name="PermanentAddressWard"
        rules={[
          {
            required: true,
            message: 'Please enter Ward',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tol"
        name="PermanentAddressTol"
        rules={[
          {
            required: true,
            message: 'Please enter Tol',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TabContent4;
