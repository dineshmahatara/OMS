import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { Inter } from 'next/font/google'
import Home from '../Home'
import { Button, message, Form,Input ,Space } from 'antd';
import { UserOutlined, KeyOutlined,EyeTwoTone,EyeInvisibleOutlined } from '@ant-design/icons';
import {useState } from 'react';
import Link from 'next/link'
import { useDispatch,useSelector } from 'react-redux'
import { setUserDetails,setToken } from '../../redux/reducerSlice/userSlice';
import { useRouter } from "next/router";
import {formcontainer,login_page,login_register_logo,userInput,login_form_container,Home_form,Form_button} from '../../styles/Register.module.css'

const inter = Inter({ subsets: ['latin'] })

const LoginUser = ()=> {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [ phoneNumber, setPhoneNumber] = useState('')
  const [ password, setPassword] = useState('')
  const dispatch = useDispatch()
  const router = useRouter();
  const {token,role} = useSelector(state=>state)
  const [messageApi, contextHolder] = message.useMessage();
  const handleLogin = async()=>{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phoneNumber: phoneNumber, password:password })
  };
  try{
    const res = await fetch('http://localhost:3001/login',requestOptions)
    console.log(res)
    const data= await res.json()
    if(data){
      
      dispatch(setUserDetails(data))
  
    }
    /// To messsage show in Client Side Start
    if(res,data.success){
      messageApi.success(data.message);
    }else {
    messageApi.error(data.message);
  }
  /// To messsage show in Client Side end
  }
  catch(err){
    messageApi.error("Couldnot connect to the serrver");
  }
  
  }
  const handleLogout = ()=>{
    router.push('/Home')
    dispatch(setToken(''))
  }

  if(token){
     return( 
      <Home/>
      )
  }else{
   
  return (
<div className={login_page}>
    <div className={Home_form}> 
    <h1>Municipality  MIS</h1>
    <div className={login_register_logo} alt="Logo"/>
     <Form className={login_form_container}>

            <Input size="large" placeholder="Mobile Number" onChange={(e)=>setPhoneNumber(e.target.value)} prefix={<UserOutlined />}/><br/>
            <br/>
            <Input.Password size="large" placeholder="password" onChange={(e)=>setPassword(e.target.value)} prefix={<KeyOutlined/>} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/><br/>
            
            <Button onClick={handleLogin}>Login</Button>
          {contextHolder}
            <br/>
            Don't have an account yet? <Link href="/register">Sign Up</Link> instead 
</Form>
    </div>
    </div>
  )
}
}
export default LoginUser