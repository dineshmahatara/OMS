import React, { useState } from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import { useTranslation } from "../lib/useTranslation";

const Pinfo = () => {
  const [date, setDate] = useState('');

  const handleDate = ({ bsDate, adDate }) => {
    setDate(adDate);
  };

  const { t, locale, setLocale } = useTranslation();

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="First Name"
        name="FirstName"
        rules={[
          {
            required: true,
            message: 'Please enter First Name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Middle Name"
        name="MiddleName"
        rules={[
          {
            required: true,
            message: 'Please enter Middle Name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="LastName"
        rules={[
          {
            required: true,
            message: 'Please enter Last Name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="DateOfBirth"
        rules={[
          {
            required: true,
            message: 'Please select Date of Birth',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Employee Designation"
        name="EmployeeDesignation"
        rules={[
          {
            required: true,
            message: 'Please enter Employee Designation',
          },
        ]}
      >
        <div>
          <Calendar onChange={handleDate} language="dark" theme="deepdark" dateFormat="DDDD, YYYY-MM-DD" />
          <Input value={date} />
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Pinfo;
