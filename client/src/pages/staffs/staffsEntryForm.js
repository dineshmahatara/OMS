import { Form, Input,Layout,Collapse, Button, Row, Col } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
// import Navbar from '@Components/Navbar';
import Sidebar from '../../Components/Sidebar'
import { useTranslation } from "../lib/useTranslation";
import React from "react";
import { Radio, Space, Tabs } from 'antd';
import firstform from './firstform';
import { useState, useEffect } from 'react';
import TabContent1 from './TabContent1';
import TabContent2 from './TabContent2';
import TabContent3 from './TabContent3';
import TabContent4 from './TabContent4';
import Pinfo from './pinfo';
const { Content, Sider } = Layout;
const { Panel } = Collapse;
const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    employePost: Yup.string().required('Required'),
    permanentAddress: Yup.string().required('Required'),
    fatherName: Yup.string().required('Required'),
  });

const staffsEntryForm = () => {
  const { t, locale, setLocale } = useTranslation();
  const [tabPosition, setTabPosition] = useState('right');
  const [activeTabKey, setActiveTabKey] = useState('1');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  const handleTabChange = (key) => {
    setActiveTabKey(key);
  };

  const tabsData = [
    {
      label: t("office information"),
      key: '5',
      children: <TabContent1 />,
    },
    {
      label: t("family information"),
      key: '2',
      children: <TabContent2 />,
    },
    {
      label: t("other information"),
      key: '3',
      children: <TabContent3 />,
    },
    {
      label: t("permanent address"),
      key: '4',
      children: <TabContent4 />,
    },
    {
      label: t("personal informationooo"),
      key: '1',
      children: <Pinfo />,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setTabPosition('top');
    } else {
      setTabPosition('right');
    }
  }, [isSmallScreen]);
    const [data, setData] = useState([]);
    const router = useRouter();
    const { slug } = router.query;
    const formik = useFormik({
        initialValues: {
          fullName: '',
          employePost: '',
          permanentAddress: '',
          fatherName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          console.log(values);
        },
      });
      useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:3001/registerstaff');
          const data = await response.json();
          setData(data);
        }
        fetchData();
      }, []);
  return (
    
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Sidebar />
      </Sider>
      <Layout>
        {/* <Navbar /> */}
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: '24px', minHeight: '360px',backgroundColor:'white' }}>
          <>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
      
      </Space>
      <Tabs tabPosition="left" activeKey={activeTabKey} onChange={handleTabChange}>
        {tabsData.map((tab) => (
          <Tabs.TabPane tab={tab.label} key={tab.key}>
            {tab.children}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
export default staffsEntryForm;