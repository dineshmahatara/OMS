import { Form, Input, DatePicker, Select, Button } from 'antd';

const { Option } = Select;

const TabContent1 = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item label="Date of Provisional Appointment" name="provisionalAppointmentDate">
        <DatePicker format="DD/MM/YYYY" />
      </Form.Item>

      <Form.Item label="Date of Permanent Appointment" name="permanentAppointmentDate">
        <DatePicker format="DD/MM/YYYY" />
      </Form.Item>

      <Form.Item label="Transferred From Office" name="transferredFromOffice">
        <Input />
      </Form.Item>

      <Form.Item label="Date of Office Leave" name="officeLeaveDate">
        <DatePicker format="DD/MM/YYYY" />
      </Form.Item>

      <Form.Item label="Transferred To Office" name="transferredToOffice">
        <Input />
      </Form.Item>

      <Form.Item label="Date of Office Leave" name="officeLeaveDate2">
        <DatePicker format="DD/MM/YYYY" />
      </Form.Item>

      <Form.Item label="Date of Employed Charge In Office" name="employedChargeDate">
        <DatePicker format="DD/MM/YYYY" />
      </Form.Item>

      <Form.Item label="Date of Attendance In Office" name="attendanceDate">
        <DatePicker format="DD/MM/YYYY" />
      </Form.Item>

      <Form.Item label="Working Branch or Office" name="workingBranch">
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

export default TabContent1;
