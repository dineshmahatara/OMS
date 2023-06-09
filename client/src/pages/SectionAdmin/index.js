
import { logout, setUserDetails, fullName, phoneNumber, setToken } from '../../redux/reducerSlice/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar';
import { useState, useEffect } from 'react';
import Card from '../../Components/Card'
import { Layout, Pagination, Skeleton, Col, Row, Space } from 'antd';
import Login from '../login';
import { useTranslation } from "../lib/useTranslation";
// import styles from '../styles/Home.module.css';
// import styles from '../../styles/Home.module.css'
import PDF from '@/Components/PDF';
const { Content, Sider } = Layout;
const Homepage = () => {
  const { token, setUserDetails, fullName, phoneNumber, role, id } = useSelector(state => state.user);
  const { t, locale, setLocale } = useTranslation();
  const [firmsList, setFirmList] = useState([])
  const fetchFirms = async (page = 2) => {
    const res = await fetch('http://localhost:3001/PrivateFirm?FormStatus=Passive&page=' + page)
    const data = await res.json()
    if (data) {
      setFirmList(data.firmsList)
    }
  }
  useEffect(() => {
    fetchFirms()
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <sider>

        </sider>
        {/* <Navbar /> */}

        <Content style={{ margin: '20px', textAlign: 'center' }}>
          <PDF/>
          <div><h1 style={{textAlign:'center', margin:444}}> Dashboard will be dispaly here</h1></div>
        </Content>
      </Layout>
    </Layout>
  );
};

export async function getServerSideProps({ req, res }) {
  const { token } = req.cookies;

  if (!token) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return { props: {} };
  }
  return { props: {} };
}
export default Homepage;
