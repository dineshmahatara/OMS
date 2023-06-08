
const { Content, Sider } = Layout;
// import Navbar from '../../Components/Navbar';
import CustomDrawer from '@/Components/Drawer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Button, Input,Row,Col, Space,message ,Layout} from 'antd';
const EditPage = () => {
  const router = useRouter();
  const { editFirm } = router.query; // Retrieve the editFirm parameter from the URL

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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (editFirm) {
      // Fetch the form data using the editFirm from the API
      axios
        .get(`http://localhost:3001/PrivateFirm/${editFirm}`)
        .then((response) => {
          const { data } = response;
          // Update the form data state with the fetched data
          setFormData(data);
        })
        .catch((error) => {
          console.error('Failed to fetch form data:', error);
        });
    }
  }, [editFirm]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Perform the form submission logic here
    // You can use axios or any other library to make the API call
    axios
      .put(`http://localhost:3001/editPrivateFirm/${editFirm}`, formData)
      .then((response) => {
        console.log('Form submitted successfully:', response);
        setSubmitSuccess(true);
        message.success('Form submitted successfully!');
        // Redirect the user to the detail page or any other page as needed
        router.push(`/Private-Firms/${editFirm}`);
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
      <Col span={8}> </Col>
      <Col className="gutter-row" span={16} flex={6}>
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
    <Input
      type="text"
      id="wardNo"
      name="WardNo"
      value={formData.WardNo}
      onChange={handleInputChange}
    />

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
      value={formData.RegistrationDate}
      onChange={handleInputChange}
    />

    <label htmlFor="formStatus">Form Status</label>
    <Input
      type="text"
      id="formStatus"
      name="FormStatus"
      value={formData.FormStatus}
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

export default EditPage;
