import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout, Pagination, Skeleton, Col, Row, Space } from 'antd';
import Login from '../login';
import { useTranslation } from "../lib/useTranslation";
const { Content, Sider } = Layout;
import Navbar from '../../Components/Navbar';
import CustomDrawer from '@/Components/Drawer';
const PrivateFirm = () => {
  const router = useRouter();
  const [firmDetails, setFirmDetails] = useState('');
  const { editFormId } = router.query;

  useEffect(() => {
    const fetchFirmDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/PrivateFirm/${editFormId}`);
        const data = await response.json();
        setFirmDetails(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
    fetchFirmDetails();
  }, [editFormId]);

  if (!firmDetails) {
    return <p>Loading ....</p>
  }
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Layout>
      <sider>
      <CustomDrawer/>
      </sider>
      {/* <Navbar /> */}

      <Content style={{ margin: '20px', textAlign: 'center' }}>
       <div>
        <div className='PrivateFormPage'>
        <div className='pfborder'>
        <div className='' PrivateFirm>

        <div className='letterhead'> 
        <div className='letterheadLogo'> </div>
        <div className='letterheadphoto'><p> फर्मवालको फोटो</p> </div>
        <h1 style={{fontSize:'25px',fontFamily:'cursive'}}> झिमरुक गाउँपालिका</h1> 
              <h1 style={{fontSize:'29px'}}>गाउँपालिका कार्यपालिकाको कार्यालय</h1>
              <h1>भ्यागुते ,प्युठान</h1>
              <h1> लुम्बिनी प्रदेश,नेपाल</h1>
        </div>
        <div className='privateFormreg'>
          <p> प्रा.फ दर्ता नं.:-</p>
          <p> दर्ता मिति:-</p>
        </div>
             
    
      </div>
      <div className='documentHeader'> <p>प्राइभेट फर्म दर्ता प्रमाण पत्र </p></div>
      <div className='PrivateFormPageContainer'> 
      <p> निम्न अनुसारको विवरण भएको श्री<strong style={{textDecoration:'underline'}}> {firmDetails.FormName} </strong> फर्मलाई संवत {firmDetails.FormName} मा उद्योग
      बाणीज्य सम्वन्धी कार्य संचालन गर्नको लागि लुम्बिनी प्रदेश प्राइभेट फर्म दर्ता ऐन २०७६ र नियमावली २०७६ तथा झिमरुक 
      गाउँपालिकाको प्राइभेट फर्म दर्ता  कार्यविधि २०७७ को दफा ६ (१) बमोजिम दर्ता गरी यो प्रमाण पत्र प्रदान गरिएको छ।</p>
      </div>
      <div style={{textAlign:'left', margin:'50px'}}>
      <h2><strong>विवरण</strong></h2>
      <p><strong>प्रोपाइटरको नामथर :</strong>{firmDetails.Municipality} </p>
      <p><strong>नागरिकता नम्वर :</strong>{firmDetails.Municipality} </p>
      <p><strong>फर्मको ठेगाना :</strong>{firmDetails.Municipality} </p>
      <p><strong>पुँजी रु :</strong>{firmDetails.Municipality} </p>
      <p><strong>उद्धेश्य:</strong>{firmDetails.FormObjective} </p>
      </div>
      <div className='signature'>
        <p> ....................</p>
        <p> प्रमाणित गर्ने</p>
        <p> अधिकृत</p>
      </div>
      


    </div>
    
    </div>
    <div className='PrivateFormPage'>
        <div className='pfborder'>
        <div className='' PrivateFirm>
        <table className='PrivateFormTable' style={{border:'1px solid'}}>
              <tr>
              <th colSpan={7}> नविकरण सम्वन्धी विवरण</th>
              </tr>
              <tr>
                <th rowSpan={2}> क्र.स. </th>
                <th rowSpan={2}> नविकरण मिति </th>
                <th rowSpan={2}> असुली आ.व. </th>
                <th rowSpan={2}> रसिद नं. </th>
                <th rowSpan={2}> प्रमाण पत्रको मान्य अवधि </th>
                <th colSpan={2}>नविकरण गर्ने अधिकारीको  </th>
                
              </tr>
              <tr>
                <th> दस्तखत </th>
                <th> कार्यालको छाप </th>
              </tr>
              <tr>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
              </tr>
              <tr>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
              </tr>
              <tr>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
              </tr>
              <tr>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
              </tr>
              <tr>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
              </tr>
              <tr>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
              </tr>
              
        </table>
        <p> यो प्रमाण पत्र आर्थिक वर्ष समाप्त भएको ३ महिना भित्र नविकरण गर्नु पर्ने छ।</p>
        </div>
        </div>
        </div>
    
    </div>
    

      </Content>
    </Layout>
  </Layout>
  
  )

};

export default PrivateFirm;
