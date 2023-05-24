import { Form, Input, Button } from 'antd';

const TabContent3 = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="राष्ट्रिय परिचय पत्र नं:"
        name="EmployeeNationalIDNo"
        rules={[
          {
            required: true,
            message: 'Please enter Employee National ID Number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="नागरिकता नं:"
        name="EmployeeCitizenshipNo"
        rules={[
          {
            required: true,
            message: 'Please enter Employee Citizenship Number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="UCIN नं:"
        name="EmployeeUCINNo"
        rules={[
          {
            required: true,
            message: 'Please enter Employee UCIN Number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="पान नं:"
        name="EmployeePANNo"
        rules={[
          {
            required: true,
            message: 'Please enter Employee PAN Number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="नागरिक लगानी कोष नं:"
        name="EmployeeInvestmentFundNo"
        rules={[
          {
            required: true,
            message: 'Please enter Employee Investment Fund Number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="सावधिक जीवन विमा नं:"
        name="EmployeeLifeInsuranceNo"
        rules={[
          {
            required: true,
            message: 'Please enter Employee Life Insurance Number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="कर्मचारी संचय कोष नं:"
        name="EmployeeProvidentFundNo"
        rules={[
          {
            required: true,
            message: 'Please enter Employee Provident Fund Number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="कर्मचारी संकेत नं:"
        name="EmployeeSymbolNo"
        rules={[
          {
            required: true,
            message: 'Please enter Employee Symbol Number',
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

export default TabContent3;
