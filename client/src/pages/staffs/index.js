
import Navbar from '../Components/Navbar';
// import Sidebar from '../Components/Sidebar';
import Drawer from '@/Components/Sidebar';
import { useRouter } from 'next/router';
import staffsEntryForm from './staffsEntryForm'
import React from "react";
import { Layout, Collapse } from 'antd';
const { Content, Sider } = Layout;
const { Panel } = Collapse;

const Homepage = () => {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Sidebar />
      </Sider>
      <Layout>
        <Navbar />
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: '24px', minHeight: '360px',backgroundColor:'red' }}>fsdfdfdf</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Homepage;
