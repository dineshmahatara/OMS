import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout, Pagination, Skeleton, Col, Row, Space } from 'antd';
import Login from '../login';
import { useTranslation } from "../lib/useTranslation";
const { Content, Sider } = Layout;
import Navbar from '../../Components/Navbar';
import CustomDrawer from '@/Components/Drawer';
import PrivateFormTemplete from '@/Components/Templete/PrivateFirm';

const PrivateFirm = () => {
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Layout>
      <sider>
      <CustomDrawer/>
      </sider>
      {/* <Navbar /> */}

      <Content style={{ margin: '20px', textAlign: 'center' }}>
    <div style={{marginLeft:0}}>
    <PrivateFormTemplete/>
    </div>
      </Content>
    </Layout>
  </Layout>
  
  )

};

export default PrivateFirm;
