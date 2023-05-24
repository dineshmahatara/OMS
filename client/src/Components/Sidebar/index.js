import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, TeamOutlined, FormOutlined, SettingOutlined } from '@ant-design/icons';
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
// import { useTranslation } from "../lib/useTranslation";
import { Button, Drawer,Dropdown, Menu } from 'antd';
import { MenuOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';
import { logout,setToken,setRole } from '../../redux/reducerSlice/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from  "../../pages/lib/useTranslation";
const { SubMenu } = Menu;
const Sidebar = () => {
  const [open, setOpen] = useState(false);
 
  const { t, locale, setLocale } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className="sidebar" style={{height: '100vh', backgroundColor: 'black', overflowY: 'scroll'}}>
      <div className="sidebar-header">
        <div alt="Logo" className={styles.HeaderLogo}/>
      </div>
      {/* {navItems[role].navItem.map(item => (
          <Link key={item.label} href={item.link}>
            {item.label}
          </Link>
        ))} */}
      <Menu theme='dark' mode="inline" inlineCollapsed={collapsed} >
        <SubMenu key="sub1" icon={<HomeOutlined className="custom-active-class"/>} title="Dashboard">
          <Menu.Item key="1">{t("initialsetup")}</Menu.Item>
          <Menu.Item key="2">Dashboard 2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<UserOutlined />} title="Users">
          <Menu.Item key="3">User List</Menu.Item>
          <Menu.Item key="4">Add User</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<TeamOutlined />} title="कर्मचारीहरू">
          <Menu.Item key="sub31">
          <Link href="/staffs">कर्मचारी विवरण</Link>
        </Menu.Item>
          <Menu.Item key="sub32">
          <Link href="/staffs/staffsEntryForm">नया कर्मचारी</Link>
          </Menu.Item>
          <Menu.Item key="sub33">कार्यालय अनुसार कर्मचारी</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<FormOutlined />} title="Forms">
          <Menu.Item key="7">Form List</Menu.Item>
          <Menu.Item key="8">Add Form</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<SettingOutlined />} title="Settings">
          <Menu.Item key="9">General Settings</Menu.Item>
          <Menu.Item key="10">Account Settings</Menu.Item>
        </SubMenu>
      </Menu>
      <div className="sidebar-toggle" onClick={toggleCollapse}>
        {collapsed ? <HomeOutlined /> : <UserOutlined />}
      </div>
    </div>
  );
};

export default Sidebar;
