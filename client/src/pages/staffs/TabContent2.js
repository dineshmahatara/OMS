import { Form, Input, Button } from 'antd';

const TabContent2 = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item label="Father Name" name="fatherName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Mother Name" name="motherName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Grandfather Name" name="grandFatherName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Trustable Person Name" name="trustablePersonName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Spouse Name" name="spouseName" rules={[{ required: true }]}>
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

export default TabContent2;
