
import React,{useState,useEffect,useRef} from 'react';
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
  fullName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
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
  const inputRef= useRef(null)
  useEffect(()=>{
    inputRef?.current?.focus()
  },[])

  
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const [file,setFile]= useState(null)

  const registerUser = async(values)=> {
   
   var formData = new FormData();
  
   const keys= Object.keys(values)
   keys.forEach((item)=>{
    formData.append(item,values[item]);
   })
   formData.append('avatar',file);
    const requestOptions = {
      method: 'POST',
      body:formData
  };

  try{
    const res = await fetch('http://localhost:3001/register',requestOptions)
       const data = await res.json();
    console.log(data);
    if (res && data.success) {
      messageApi.success(data.msg);
      router.push('/login');
    } else {
      
      if (data.fileSizeError) {
        messageApi.error('File size exceeds the allowed limit of 2MB.');
      } else  {
        messageApi.error('Only JPG, JPEG, PNG, BMP, WEBP, SVG, and GIF files are allowed.');
      }
    }
  } catch (err) {
    messageApi.warning('An error occurred while registering.');
  }
};
  
   const handleFileSave =(e)=>{
    console.log(e.target.files)
    setFile(e.target.files[0])
   }
 
   return (
    <div className={styles.formcontainer}>
    
    
      <Formik
        initialValues={{
          fullName: '',
          password: '',
          phoneNumber: '',
          role:''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          registerUser(values)
          
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.Home_form}>
          <h1>Municipality  MIS</h1> 
          <div className={styles.login_register_logo}
              alt="Logo"/>
            <Field ref={inputRef} className={styles.UserInput} prefix={<UserOutlined className="site-form-item-icon" />}  name="fullName" placeholder="fullName" />
            {errors.fullName && touched.fullName ? (
              <div className={styles.errormessage}>{errors.fullName}</div>
            ) : null}
            <br/>
            <Field className={styles.UserInput} name="password" placeholder="password" />
            {errors.password && touched.password ? (
              <div className={styles.errormessage}>{errors.password}</div>
            ) : null}
            <br/>

              <Field className={styles.UserInput} name="confirmPassword"  placeholder="confirm password" />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div className={styles.errormessage}>{errors.confirmPassword}</div>
            ) : null}
            <br/>

            <Field className={styles.UserInput} name="phoneNumber" placeholder="phoneNumber"/>
            {errors.phoneNumber && touched.phoneNumber ? <div className={styles.errormessage}>{errors.phoneNumber}</div> : null}
            <br/>
                        <Field className={styles.UserInput} as="select" name="role">
                            <option value="">Choose one</option>
                            <option value="SuperAdmin">SuperAdmin</option>
                            <option value="Admin">Admin</option>
                            <option value="SectionAdmin">SectionAdmin</option>

                        </Field>
                        {errors.role && touched.role ? <div className={styles.errormessage}>{errors.role}</div> : null}

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