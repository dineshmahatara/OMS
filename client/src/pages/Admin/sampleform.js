import React, { useState } from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Link from 'next/link';
 import style1 from '@/styles/Home.module.css';
 import styles from '../../styles/Register.module.css'
 import { useRouter } from "next/router";
 import newstyles from '@/styles/Home.module.css'
 import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Input } from 'antd';
import login from '../SectionAdmin'
 import { Button, message } from 'antd';
 const SignupSchema = Yup.object().shape({
  FormPanNo: Yup.string().required('Required'),
  FiscalYear: Yup.string().required('Required'),
  FormName: Yup.string().required('Required'),
  FormObjective: Yup.string().required('Required'),
  FormType: Yup.string().required('Required'),
  District: Yup.string().required('Required'),
  Municipality: Yup.string().required('Required'),
  WardNo: Yup.string().required('Required'),
  Tol: Yup.string().required('Required'),
  RegistrationDate: Yup.string().required('Required'),
  FormStatus: Yup.string().required('Required'),
    password: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    phoneNumber:Yup.string()
    .typeError('must be a number')
    // .test('checkLength', 'the number should exactly be 10 digits', val=> val.toString().length ==10 )
     .required('Required'),
     confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
    ,
   role: Yup.string()
    .required('Required')
 });


 const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const [file,setFile]= useState(null)
 
  const registerUser = async(values)=> {
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
  
   const handleFileSave =(e)=>{
    console.log(e.target.files)
    setFile(e.target.files[0])
   }
   return (
    <div className={styles.formcontainer}>
    
    
      <Formik
        initialValues={{
          FormPanNo: '',
          FiscalYear: '2079',
          FormName: 'KashiPokhara Krishi Samuha',
          FormObjective: 'Krishi Saman Production',
          FormType: 'Krishi',
          District: 'Pyuthan',
          Municipality: 'Jhimruk',
          WardNo: '1',
          Tol: 'Bandikot',
          RegistrationDate: '2052-11-26',
          FormStatus: 'Active',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          registerUser(values)
          
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.Home_form}>
          <div>
          <label htmlFor="FormPanNo">Form Pan No</label>
          <Field type="text" id="FormPanNo" name="FormPanNo" />
          <ErrorMessage name="FormPanNo" component="div" />
        </div>

        <div>
          <label htmlFor="FiscalYear">Fiscal Year</label>
          <Field type="text" id="FiscalYear" name="FiscalYear" />
          <ErrorMessage name="FiscalYear" component="div" />
        </div>

        <div>
          <label htmlFor="FormName">Form Name</label>
          <Field type="text" id="FormName" name="FormName" />
          <ErrorMessage name="FormName" component="div" />
        </div>
                <input type="file" onChange={handleFileSave}/>
            <button className={styles.Form_button}  type="submit">Submit</button>
            Register if don't have Account <Link href="/login" className={styles.Form_button}>Login</Link>
          </Form>
          
        
        )}
      </Formik>
      {contextHolder}
      
    </div>
  );
 }

 export default Register