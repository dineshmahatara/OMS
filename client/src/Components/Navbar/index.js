import React from 'react';
import { Layout, Space, Dropdown, Menu, message } from 'antd';
import { UserOutlined, LogoutOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {setToken,setRole} from  '../../redux/reducerSlice/userSlice'

import { useRouter } from 'next/router';
import { useTranslation } from  "../../pages/lib/useTranslation";

const Navbar = () => {
  
  const { t, locale, setLocale } = useTranslation();
  const handleLanguageChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <Layout.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo" />
      <div className="center-heading" style={{color:'white',fontSize:25}}>{t("moms")}</div>
      <Space wrap>
      
        <li>
          <select value={locale} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ne">नेपाली</option>
          </select>
        </li>
      </Space>
      <style jsx>{`
        @media screen and (max-width: 767px) {
          .center-heading {
            display: none;
          }
        }
      `}</style>
    </Layout.Header>
  );
};

export default Navbar;
