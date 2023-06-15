
import {logout,setUserDetails,fullName,phoneNumber,setToken} from '../../redux/reducerSlice/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar';
import { useState, useEffect } from 'react';

import { Layout } from 'antd';
import Login from '../login';
import { useTranslation } from "../lib/useTranslation";
const { Content, Sider } = Layout;
const Homepage = () => {
  const { token,setUserDetails,fullName,phoneNumber,role,id } = useSelector(state => state.user);
  const { t, locale, setLocale } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/showPrivateFirm`);
      const data = await response.json();
      
      console.log(data)
      setData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available.</p>;
  }
  return (
    <Layout style={{ minHeight: '100vh' }}> 
      <Layout>
      <sider>
    
      </sider>
        <Navbar />

        <Content style={{ margin: '20px' }}>
          <div style={{ padding: '50px', minHeight: '360px', backgroundColor: '#4ebf93' }}>
      
    <div>
    <table border={1} align='center'>
      <thead>
        <tr>
          
      <th>FormName</th>
      <th>FormObjective</th>
      <th>FormType</th>
      <th>Province</th>
      <th>District</th>
      <th>Municipality</th>
      <th>WardNo</th>
      <th>Tol</th>
      <th>FormPanNo</th>
      <th>RegistrationDate</th>
      <th>FormStatus</th>
      <th>edit</th>
      <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            
      <td>{item.FormName}</td>
      <td>{item.FormObjective}</td>
      <td>{item.FormType}</td>
      <td>{item.Province}</td>
      <td>{item.District}</td>
      <td>{item.Municipality}</td>
      <td>{item.WardNo}</td>
      <td>{item.Tol}</td>
      <td>{item.FormPanNo}</td>
      <td>{item.RegistrationDate}</td>
      <td>{item.FormStatus}</td>
      <td>edit</td>
      <td>delete</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
         </div>
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
