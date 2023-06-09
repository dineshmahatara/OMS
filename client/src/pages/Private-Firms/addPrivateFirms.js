

// import Navbar from '../../Components/Navbar';
import CustomDrawer from '@/Components/Drawer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Button, Input,Row,Col,Select, Space,message ,Layout} from 'antd';
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';

const { Content, Sider } = Layout;
const Register = () => {
  const [datee, setDate] = useState('');
const handleDate = ({ bsDate, adDate }) => {
    setDate(bsDate);
  };
  // const router = useRouter();
  // const { editFirm } = router.query; // Retrieve the editFirm parameter from the URL

  const [formData, setFormData] = useState({
    FormPanNo: '',
          FiscalYear: '',
          FormName: '',
          FormObjective: '',
          FormType: '',
          Province: '',
          District: '',
          Municipality: '',
          WardNo: '',
          Tol: '',
          RegistrationDate: '',
          FormStatus: '',
          FirmOwner: '',
          FirmOwnerCitizenNo: '',
          FirmCapital: '',
          FirmCapitalNepali: '',
          FormObjective: '',
          FirmOwnerPhoneNumber: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const validateForm = () => {
    const {
      FormName,
      FormPanNo,
      FiscalYear,
      // Add other form fields here
    } = formData;
  
    // Check if any of the fields are empty
    if (!FormName || !FormPanNo || !FiscalYear) {
      message.error('Please Fill Empty Field');
      return false;
    }
  
    // Add additional validation rules for each field if needed
  
    return true; // Form is valid
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
      // Validate the form
  if (!validateForm()) {
    setIsSubmitting(false);
    return;
  }

    // Perform the form submission logic here
    // You can use axios or any other library to make the API call
    axios
      .post(`http://localhost:3001/registerPrivateFirm`, formData)
      .then((response) => {
        console.log('Form submitted successfully:', response);
        if(response){
          message.success('Form submitted successfully!');
        }
        else {
          message.success('Failed submitted successfully!');
        }
        setSubmitSuccess(true);
        // message.success('Form submitted successfully!');
        // Redirect the user to the detail page or any other page as needed
        // router.push(`/Private-Firms/${editFirm}`);
      })
      .catch((error) => {
        console.error('Failed to submit form:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the form data state when input fields change
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Layout>
      <sider>
        <CustomDrawer/>
      </sider>
      {/* <Navbar /> */}

      <Content style={{ margin: '20px', textAlign: 'center' }}>
      <Row gutter={16}>
      <Col span={16}> </Col>
      <Col className="gutter-row" span={8} flex={6}>
    <Space direction="horizontal">
     <div>
      <Row>
        <Col span={6}>
          <Link href="/Private-Firms"> Back back </Link>
            
        </Col>
        <Col span={18}>
          
      <h1>You are Currently Editing <i>{formData.FormName}</i></h1>
        </Col>
      </Row>
      <form onSubmit={handleFormSubmit}>
    <label htmlFor="formName">Form Name</label>
    <Input
      type="text"
      id="formName"
      name="FormName"
      value={formData.FormName}
      onChange={handleInputChange}
    />
    <label htmlFor="formPanNo">Form Pan No</label>
    <Input
      type="text"
      id="formPanNo"
      name="FormPanNo"
      value={formData.FormPanNo}
      onChange={handleInputChange}
    />

    <label htmlFor="fiscalYear">Fiscal Year</label>
    <Input
      type="text"
      id="fiscalYear"
      name="FiscalYear"
      value={formData.FiscalYear}
      onChange={handleInputChange}
    />

  

    <label htmlFor="formObjective">Form Objective</label>
    <Input
      type="text"
      id="formObjective"
      name="FormObjective"
      value={formData.FormObjective}
      onChange={handleInputChange}
    />

    <label htmlFor="formType">Form Type</label>
    <Input
      type="text"
      id="formType"
      name="FormType"
      value={formData.FormType}
      onChange={handleInputChange}
    />

    <label htmlFor="province">Province</label>
    <Input
      type="text"
      id="province"
      name="Province"
      value={formData.Province}
      onChange={handleInputChange}
    />

    <label htmlFor="district">District</label>
    <Input
      type="text"
      id="district"
      name="District"
      value={formData.District}
      onChange={handleInputChange}
    />

    <label htmlFor="municipality">Municipality</label>
    <Input
      type="text"
      id="municipality"
      name="Municipality"
      value={formData.Municipality}
      onChange={handleInputChange}
    />

    <label htmlFor="wardNo">Ward No</label>
    <Select
      id="wardNo"
      name="WardNo"
      value={formData.WardNo}
      onChange={(value) => handleInputChange({ target: { name: 'WardNo', value } })}
    >
      {[...Array(9)].map((_, index) => (
        <Option key={index + 1} value={String(index + 1)}>
          {index + 1}
        </Option>
      ))}
    </Select>

    <label htmlFor="tol">Tol</label>
    <Input
      type="text"
      id="tol"
      name="Tol"
      value={formData.Tol}
      onChange={handleInputChange}
    />

    <label htmlFor="registrationDate">Registration Date</label>
        <Input
      type="text"
      id="registrationDate"
      name="RegistrationDate"
      value={datee.toString()}
      onChange={handleInputChange}
      // style={{ visibility: 'hidden' }}
    />
<Calendar onChange={handleDate} language="dark" theme="deepdark" dateFormat="YYYY-MM-DD" />

    <label htmlFor="formStatus">Form Status</label>
    <Input
      type="text"
      id="formStatus"
      name="FormStatus"
      value={formData.FormStatus}
      onChange={handleInputChange}
    />
          <label htmlFor="firmOwner">Firm Owner</label>
      <Input
        type="text"
        id="firmOwner"
        name="FirmOwner"
        value={formData.FirmOwner}
        onChange={handleInputChange}
      />

      <label htmlFor="firmOwnerCitizenNo">Firm Owner Citizen No</label>
      <Input
        type="text"
        id="firmOwnerCitizenNo"
        name="FirmOwnerCitizenNo"
        value={formData.FirmOwnerCitizenNo}
        onChange={handleInputChange}
      />

      <label htmlFor="firmCapital">Firm Capital</label>
      <Input
        type="number"
        id="firmCapital"
        name="FirmCapital"
        value={formData.FirmCapital}
        onChange={handleInputChange}
      />

      <label htmlFor="firmCapitalNepali">Firm Capital Nepali</label>
      <Input
        type="text"
        id="firmCapitalNepali"
        name="FirmCapitalNepali"
        value={formData.FirmCapitalNepali}
        onChange={handleInputChange}
      />

      <label htmlFor="firmOwnerPhoneNumber">Firm Owner Phone Number</label>
      <Input
        type="text"
        id="firmOwnerPhoneNumber"
        name="FirmOwnerPhoneNumber"
        value={formData.FirmOwnerPhoneNumber}
        onChange={handleInputChange}
      />
       
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Save and Go Back'}
      </button>
      {submitSuccess && (
        <div>
          <p>Form submitted successfully!</p>
          <Link href="/Private-Firms"> Back back </Link>
          {/* Additional success message or actions */}
        </div>
      )}
    </form>
    </div>
    </Space>
      </Col>
        </Row>
      </Content>
    </Layout>
  </Layout>
  
  );
};

export default Register;
