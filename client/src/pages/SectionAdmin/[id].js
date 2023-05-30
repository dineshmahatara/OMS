import { useRouter } from 'next/router';
import {useEffect, useState} from 'react'
export default function Page() {
  const router = useRouter();
  useEffect(()=>{
    fetchRidesDetails()
  }, [])
  const fetchRidesDetails = () => {
    //       fetch('http://localhost:4000/rides/'+router.query.id)
  }
  return <p>Post: {router.query.id}</p>;
}
// import {logout,setUserDetails,fullName,phoneNumber,setToken} from '../../redux/reducerSlice/userSlice'
// import { useDispatch, useSelector } from 'react-redux';
// import Navbar from '../../Components/Navbar';
// import { useState, useEffect } from 'react';
// import Card from '../../Components/Card'
// import { Layout,Pagination,Skeleton,Col,Row, Space} from 'antd';
// import Login from '../login';
// import { useTranslation } from "../lib/useTranslation";
// import router from '../../../../server/src/routes/private_firm';
// import { useRouter } from 'next/router';
// const { Content, Sider } = Layout;
// const router=useRouter();
// useEffect(()=>{
//   fetchFirms()
// },[])
// const Homepage = () => {
//   const { token,setUserDetails,fullName,phoneNumber,role,id } = useSelector(state => state.user);
//   const { t, locale, setLocale } = useTranslation();
//   const [firmsList, setFirmList] = useState([])
//   const fetchFirms = async()=>{
//       const res = await fetch('http://localhost:3001/showPrivateFirm/'+router.query.id)
//       const data= await res.json()
//       if(data){
//         setFirmList(data.firmsList)
//       }
//   }
//   return (
//     <Layout style={{ minHeight: '100vh' }}> 
//       <Layout>
//       <sider>
    
//       </sider>
//         <Navbar />

//         <Content style={{ margin: '20px', textAlign:'center' }}>
        
//           <div style={{ padding: '50px', minHeight: '360px', backgroundColor: 'gray' }}>
//           <h1>Hello : {router.query.id}</h1>
        
       
        
      
//         </div>
//         </Content> 
//       </Layout>
//     </Layout>
//   );
// };
// export default Homepage;
