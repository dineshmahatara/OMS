
import {logout,setUserDetails,setToken} from '../../redux/reducerSlice/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import { Layout } from 'antd';
import Login from '../login';
import { useTranslation } from "../lib/useTranslation";
import CustomDrawer from '../../Components/Drawer'
const { Content, Sider } = Layout;
const Homepage = () => {
  const { token,setUserDetails, role } = useSelector(state => state.user);
  const { t, locale, setLocale } = useTranslation();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Sidebar />
        <Drawer/>
      </Sider>
      <Layout>
        <Navbar />
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: '24px', minHeight: '360px', backgroundColor: 'red' }}>
          <div>

      <h1>{t("home")}</h1>
      <p>{t("about")}</p>
      <p>{t("contact")}</p>
    </div>
          
          Content goes here</div>
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
