import React, { useState } from 'react';
import { Button, Drawer, Dropdown, Menu } from 'antd';
import { MenuOutlined, UserOutlined,UsergroupAddOutlined, LockOutlined, LogoutOutlined, FileOutlined, ShopOutlined, CarOutlined, DollarCircleOutlined, FilePdfOutlined, EditFilled, EyeFilled } from '@ant-design/icons';
import navItems from '../../config/navItems.json';
import { logout, setToken, setRole } from '../../redux/reducerSlice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const CustomDrawer = (props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const { role, id } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="changePassword" icon={<LockOutlined />}>
        Change Password
      </Menu.Item>
      <Menu.Item onClick={handleLogout} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  // Helper function to render the appropriate icon based on the icon name
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'home':
        return <MenuOutlined />;
      case 'person':
        return <UserOutlined />;
      case 'people':
        return <UsergroupAddOutlined />;
      case 'description':
        return <FileOutlined />;
      case 'business':
        return <ShopOutlined />;
      case 'directions_car':
        return <CarOutlined />;
      case 'attach_money':
        return <DollarCircleOutlined />;
      case 'picture_as_pdf':
        return <FilePdfOutlined />;
      default:
        return null;
    }
  };

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.subMenu) {
        return (
          <Menu.SubMenu key={item.label} title={item.label} icon={getIcon(item.icon)}>
            {renderMenuItems(item.subMenu)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.label} icon={getIcon(item.icon)}>
            <Link href={item.link}>{item.label}</Link>
          </Menu.Item>
        );
      }
    });
  };

  const renderSubMenuItems = (items) => {
    return items.map((item) => (
      <Menu.Item key={item.label} icon={getIcon(item.icon)}>
        <Link href={item.link}>{item.label}</Link>
      </Menu.Item>
    ));
  };

  return (
    <>
      <Navbar />
      <Button type="primary" style={{ marginTop: -44, position: 'absolute' }} onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Office Management System"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={300}
        headerStyle={{ background: '#f0f2f5', padding: '1px', textAlign: 'center' }}
        footerStyle={{ textAlign: 'center' }}
        footer={
          <header className="navbar">
            {/* Your other navbar contents */}
            <div className="navbar-center">
              <Dropdown overlay={menu} placement="bottomRight">
                <Image shape="circle" src={'http://localhost:3001/avatar/' + id} width={50} height={50} alt="avatar" />
              </Dropdown>
              Hello <b>{role} </b>
            </div>
          </header>
        }
      >
        {/* Drawer content */}
        <Menu mode="vertical">
          {renderMenuItems(navItems[role].navItem)}
          <Menu.SubMenu key="subMenu" title="Sub Menu" icon={<EditFilled />}>
            {renderSubMenuItems([
              { label: 'Edit', link: '/edit', icon: 'edit' },
              { label: 'View', link: '/view', icon: 'eye' },
            ])}
          </Menu.SubMenu>
        </Menu>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
