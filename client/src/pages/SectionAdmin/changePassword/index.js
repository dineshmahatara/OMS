

// // import Navbar from '../../Components/Navbar';
// import CustomDrawer from '@/Components/Drawer';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import { Button, Input,Row,Col, Space,message ,Layout} from 'antd';
// const { Content, Sider } = Layout;
// const changePassword = () => {
//   const router = useRouter();
//   const { id } = router.query; // Retrieve the id parameter from the URL

//   const [formData, setFormData] = useState({
//           currentPassword: '',
//           newPassword: ''

//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   useEffect(() => {
//     if (id) {
//       // Fetch the form data using the id from the API
//       axios
//         .get(`http://localhost:3001/changePassword/${id}`)
//         .then((response) => {
//           const { data } = response;
//           // Update the form data state with the fetched data
//           setFormData(data);
//         })
//         .catch((error) => {
//           console.error('Failed to fetch form data:', error);
//         });
//     }
//   }, [id]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Perform the form submission logic here
//     // You can use axios or any other library to make the API call
//     axios
//       .put(`http://localhost:3001/changePassword/${id}`, formData)
//       .then((response) => {
//         console.log('Form submitted successfully:', response);
//         setSubmitSuccess(true);
//         message.success('Form submitted successfully!');
//         // Redirect the user to the detail page or any other page as needed
//         // router.push(`/Private-Firms/${id}`);
//       })
//       .catch((error) => {
//         console.error('Failed to submit form:', error);
//       })
//       .finally(() => {
//         setIsSubmitting(false);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // Update the form data state when input fields change
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//     <Layout>
//       <sider>
//         <CustomDrawer/>
//       </sider>
//       {/* <Navbar /> */}

//       <Content style={{ margin: '20px', textAlign: 'center' }}>
//       <Row gutter={16}>
//       <Col span={16}> </Col>
//       <Col className="gutter-row" span={8} flex={6}>
//     <Space direction="horizontal">
//      <div>
//       <Row>
//         <Col span={6}>
//           <Link href="/SectionAdmin"> Back back </Link>
            
//         </Col>
//         <Col span={18}>
          
//         </Col>
//       </Row>
//       <form onSubmit={handleFormSubmit}>
//     <label htmlFor="currentPassword">Current Password</label>
//     <Input
//       type="text"
//       id="formName"
//       name="currentPassword"
//       value={formData.currentPassword}
//       onChange={handleInputChange}
//     />
//     <label htmlFor="newPassword">CurrentPassword</label>
//     <Input
//       type="text"
//       id="newPassword"
//       name="newPassword"
//       value={formData.newPassword}
//       onChange={handleInputChange}
//     />

//       <button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? 'Submitting...' : 'Save and Go Back'}
//       </button>
//       {submitSuccess && (
//         <div>
//           <p>Form submitted successfully!</p>
//           <Link href="/Private-Firms"> Back back </Link>
//           {/* Additional success message or actions */}
//         </div>
//       )}
//     </form>
//     </div>
//     </Space>
//       </Col>
//         </Row>
//       </Content>
//     </Layout>
//   </Layout>
  
//   );
// };

// export default changePassword;
import { Modal } from "antd";
import { useState } from "react";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { message } from 'antd';
import { useRouter } from 'next/router';
// import { CustomButton } from "../../components/customButton";
// import { useNavigate } from "react-router-dom";
// import { responseHandler } from "../../utils/responseHandler"
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

// const { id } = router.query;
// import { logoutResetDetails } from "../../redux/actions/userAction"
const AccountingSettings = () => {
  const router = useRouter();
 // Retrieve the id parameter from the URL
    const [showPassword, setShowPassword] = useState(true)
    const dispatch = useDispatch()
    const { id } = useSelector(state => state.user)
    const usersSchema = Yup.object().shape({

        currentPassword: Yup.string()
            .min(5, "Too Short!")
            .max(100, "Too Long!")
            .required("Required"),

        newPassword: Yup.string()
            .min(5, "Too Short!")
            .max(100, "Too Long!")
            .required("Required"),

        confirmPassword: Yup.string()
            .min(5, "Too Short!")
            .max(100, "Too Long!")
            .required("Required")
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),

    });
    // const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <Modal
                footer={null}
                onCancel={() => setIsModalOpen(false)}
                open={isModalOpen}>
                <h3>Change Password</h3>
                <Formik
                    initialValues={{

                        currentPassword: "",
                        newPassword: "",
                        confirmPassword: "",
                    }}
                    validationSchema={usersSchema}
                    onSubmit={async (values) => {
                        const { confirmPassword, ...updatedValues } = values
                        const requestOptions = {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(updatedValues),
                        };
                        try {
                            const res = await fetch(`http://localhost:3001/changePassword/${id}`, requestOptions)
                            // const res = await fetch(`http://localhost:3001/changePassword/${id}`, requestOptions)
                            const data = await res.json()
                            const notify = responseHandler(res, data.errorMsg)
                            toast(notify)
                            if (res.status === 200) {
                                message.success(data.msg, [2])
                                dispatch(logoutResetDetails())
                                navigate('/')
                            } else {
                                message.error(data.msg, [2])
                            }
                        } catch (error) {
                            toast.error('error', { position: toast.POSITION.TOP_CENTER });
                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div>
                                <Field
                                    name="currentPassword"
                                    placeholder="Current Password"
                                    type={showPassword ? 'password' : 'text'}
                                />
                                {errors.currentPassword && touched.currentPassword ? (
                                    <div className="validaton-message">{errors.currentPassword}</div>
                                ) : null}
                            </div>
                            <div>
                                <Field
                                    name="newPassword"
                                    placeholder="New Password"
                                    type={showPassword ? 'password' : 'text'}
                                />
                                {errors.newPassword && touched.newPassword ? (
                                    <div className="validaton-message">{errors.newPassword}</div>
                                ) : null}
                            </div>
                            <div>
                                <Field
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    type={showPassword ? 'password' : 'text'}
                                />
                                <div onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Show" : "Hide"}</div>
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div className="validaton-message">
                                        {errors.confirmPassword}
                                    </div>
                                ) : null}
                            </div>
                            <button name="Change Password" type="submit" />
                        </Form>
                    )}
                </Formik>
            </Modal>

            <h1>Account Settings</h1>
            <div className="account_settings">
                <button>Change User Name</button>
                <button onClick={() => setIsModalOpen(true)}>Change Password</button>
                <button >Deactivate Account</button>
            </div>
        </>
    );
}
export default AccountingSettings;