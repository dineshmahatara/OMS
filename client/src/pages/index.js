import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import SectionAdminDashBoard from './SectionAdmin'
import SuperadminDashBoard from './SuperAdmin'
import AdminDashBoard from './Admin'
import { useDispatch } from 'react-redux';
import Login from './login'
import Navbar from '@/Components/Navbar'

import CustomDrawer from '../Components/Drawer'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })
const Main = () => {
  const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
      }
  const { token, id,role } = useSelector(state => state.user)

  const Dashboard = ()=> {
    switch(role){
      case 'Admin': 
        return  <AdminDashBoard/>
      case 'SectionAdmin':
        return <SectionAdminDashBoard/>
      case 'SuperAdmin':
        return <SuperadminDashBoard/>
    }
   
  }

  const Auth = ()=> {
    return (
      <Login/>
    )
  }
  return (
    <div>
        {/* <Navbar/> */}
      {role ?<CustomDrawer/>: null }
      {token ? <Dashboard/> : <Auth/>}
    </div>
  )
}


export default Main;
