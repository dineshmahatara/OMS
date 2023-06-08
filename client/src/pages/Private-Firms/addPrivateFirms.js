
import React, { useState } from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Link from 'next/link';
 import style1 from '@/styles/Home.module.css';
 import styles from '../../styles/Register.module.css'
 import { useRouter } from "next/router";
 import newstyles from '@/styles/Home.module.css'
 import { LockOutlined, UserOutlined } from '@ant-design/icons';
 import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import {Input } from 'antd';
import login from '../SectionAdmin'
 import { Button, message } from 'antd';
 const SignupSchema = Yup.object().shape({
  FormPanNo: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    phoneNumber:Yup.string().typeError('must be a number'),
   Province: Yup.string() .required('Required'),
   District: Yup.string() .required('Required'),
   Municipality: Yup.string() .required('Required'),
   WardNo: Yup.string() .required('Required'),
   FormName: Yup.string() .required('Required'),
   Tol: Yup.string() .required('Required')
 });


 const Register = () => {
  const [datee, setDate] = useState('');
  const handleDate = ({ bsDate, adDate }) => {
    setDate(bsDate);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const [file,setFile]= useState(null)
 
  const registerFirm = async(values)=> {
  const requestOptions ={
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
  }
  try{
    const res = await fetch('http://localhost:3001/registerPrivateFirm',requestOptions)
    const data = await res.json()
    console.log(data)
    if(res && data.success){
      messageApi.success(data.msg);
    }else{
      messageApi.error(data.msg);
    }
    }catch(err){
      messageApi.warning(data.msg);
    }
   }
  // This code is for uploading files
  //  const handleFileSave =(e)=>{
  //   console.log(e.target.files)
  //   setFile(e.target.files[0])
  //  }
   const wardOptions = Array.from({ length: 10 }, (_, index) => index + 1);

   return (
    <div className={styles.formcontainer}>
    
    
      <Formik
        initialValues={{
          FormPanNo: '',
          FiscalYear: '',
          FormName: '',
          FormObjective: '',
          FormType: '',
          Province:'',
          District: '',
          Municipality: '',
          WardNo: '',
          Tol: '',
          RegistrationDate:'',
          FormStatus: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          registerFirm(values)
          
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.Home_form}>
            <Field className={styles.UserInput} prefix={<UserOutlined className="site-form-item-icon" />} name="FormName" placeholder="FormName" />
            {errors.FormName && touched.FormPanNo ? (
              <div className={styles.errormessage}>{errors.FormName}</div>
            ) : null}
            <br/>
            <Field className={styles.UserInput} prefix={<UserOutlined className="site-form-item-icon" />} name="FormPanNo" placeholder="FormPanNo" />
            {errors.FormPanNo && touched.FormPanNo ? (
              <div className={styles.errormessage}>{errors.FormPanNo}</div>
            ) : null}
            <br/>
            <Field className={styles.UserInput} as="select" name="FiscalYear">
                            <option value="">Choose one</option>
                            <option value="2082">2080</option>
                            <option value="2081">2081</option>
                            <option value="2082">2082</option>
                            <option value="2083">2083</option>

              </Field>
          
                        <Field className={styles.UserInput} as="select" name="Province">
                            <option value="">Choose one</option>
                            <option value="Koshi">Koshi</option>
                            <option value="Lumbini">Lumbini</option>
                            <option value="Gandagi">Gandagi</option>

                        </Field>
                        {errors.Province && touched.Province ? <div className={styles.errormessage}>{errors.District}</div> : null}
                        <Field className={styles.UserInput} as="select" name="District">
                            <option value="">Choose one</option>
                            <option value="Pyuthan">Pyuthan</option>
                            <option value="Gulmi">Gulmi</option>
                            <option value="Palpa">Palpa</option>

                        </Field>
                        {errors.District && touched.District ? <div className={styles.errormessage}>{errors.District}</div> : null}
                        
                        <Field className={styles.UserInput} as="select" name="Municipality">
                            <option value="">Choose one</option>
                            <option value="Jhimruk">Jhimruk</option>
                            <option value="Mandavi">Mandavi</option>
                            <option value="Gaumukhi">Gaumukhi</option>

                        </Field>
                        {errors.Municipality && touched.Municipality ? <div className={styles.errormessage}>{errors.Municipality}</div> : null}
                        <label>Select Firm Type:</label>
                        <Field className={styles.UserInput} as="select" name="FormType">
                            <option value="">Choose one</option>
                            <option value="Type1">Type1</option>
                            <option value="Type2">Type2</option>
                            <option value="Type3">Type3</option>

                        </Field>
                        {errors.FormType && touched.FormType ? <div className={styles.errormessage}>{errors.FormType}</div> : null}
                        <Field className={styles.UserInput} prefix={<UserOutlined className="site-form-item-icon" />} name="Tol" placeholder="Tol" />
            {errors.Tol && touched.Tol ? (
              <div className={styles.errormessage}>{errors.Tol}</div>
            ) : null}
            <br/>
                        <Field className={styles.UserInput} as="select" id="WardNo" name="WardNo">
            {wardOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Field>
         
          <Calendar className={styles.UserInput}  onChange={handleDate} language="dark" theme="deepdark" dateFormat="YYYY-MM-DD" />
           
          <Field  className={styles.UserInput} prefix={<UserOutlined className="site-form-item-icon" />} name="RegistrationDate" value={datee} placeholder="RegistrationDate" />
          <Field className={styles.UserInput} as="select" name="FormStatus">
                            <option value="">Choose one</option>
                            <option value="Active">Active</option>
                            <option value="Passive">Passive</option>
                        

              </Field>
              {/* This code for Upload file */}
                {/* <input type="file" onChange={handleFileSave}/> */}
            <button className={styles.Form_button}  type="submit">Submit</button>
        
          </Form>
        
        )}
      </Formik>
      {contextHolder}
      
    </div>
  );
 }

 export default Register