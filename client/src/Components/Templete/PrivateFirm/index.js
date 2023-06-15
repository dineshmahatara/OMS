import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout, Pagination, Skeleton, Col, Row, Space } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';

const PrivateFormTemplete=()=>{
  function printDocument() {
    const input = document.getElementsByClassName('invoicePages');
    const pdf = new jsPDF();
  
    const options = {
      scale: 2, // Adjust the scale for image quality (experiment with different values)
      useCORS: true, // Enable cross-origin resource sharing
    };
  
    const savePDF = (index) => {
      if (index >= input.length) {
        pdf.save('download.pdf');
        return;
      }
  
      if (index !== 0) {
        pdf.addPage();
      }
  
      html2canvas(input[index], options).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(
          imgData,
          'PNG',
          0,
          0,
          pdf.internal.pageSize.getWidth(),
          pdf.internal.pageSize.getHeight()
        );
  
        savePDF(index + 1);
      });
    };
  
    savePDF(0); // Start from the first page
  }
  
  
  
  
  
  
    const router = useRouter();
    const [firmDetails, setFirmDetails] = useState('');
    const { formId } = router.query;
  
    useEffect(() => {
      const fetchFirmDetails = async () => {
        try {
          const response = await fetch(`http://localhost:3001/PrivateFirm/${formId}`);
          const data = await response.json();
          console.log(data)
          setFirmDetails(data);
        } catch (error) {
          console.error('Erro:', error);
        }
      }
      fetchFirmDetails();
    }, [formId]);
  
    if (!firmDetails) {
      return <p>Loading ....</p>
    }
   
    const dateString = firmDetails.RegistrationDate;
    let Barsa, Mahina, Gate;
    
    if (dateString) {
      const parts = dateString.split('-');
      Barsa = parts[0];
      Mahina = parts[1];
      Gate = parts[2];
    
      console.log('Year:', Barsa);
      console.log('Month:', Mahina);
      console.log('Day:', Gate);
    } else {
      console.log('Invalid date string');
    }
    
    return(
        <>
        

<div style={{}}>
        <button onClick={() => printDocument()}>Print</button>
      </div>
      
<div className='PrivateFormPage'>
<div className='invoicePages ' id="invoicePageOne" style={pageStyle}>
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
  <p><strong> प्रा.फ दर्ता नं.:-{firmDetails.FirmRegistrationNo}</strong> </p>
  <p> <strong>दर्ता मिति:-</strong> {firmDetails.RegistrationDate}</p>
</div>
</div>
<div className='documentHeader'> <p>प्राइभेट फर्म दर्ता प्रमाण पत्र </p></div>
<div className='PrivateFormPageContainer'> 
<p> निम्‍न अनुसारको विवरण भएको श्री<strong style={{textDecoration:'underline'}}> {firmDetails.FormName} </strong> फर्मलाई संम्बत {Barsa}  साल {Mahina} महिना {Gate} मा उद्योग
/बाणिज्य सम्बन्धी कार्य संचालन गर्नको लागि लुम्बिनी प्रदेश प्राइभेट फर्म दर्ता ऐन २०७६ र नियमावली २०७६ तथा झिमरुक 
गाउँपालिकाको प्राइभेट फर्म दर्ता  कार्यविधि २०७७ को दफा ६ (१) बमोजिम दर्ता गरी यो प्रमाण पत्र प्रदान गरिएको छ।</p>
</div>
<div style={{textAlign:'left', margin:'50px'}}>
<h2><u><strong>विवरण</strong></u></h2>
<p><strong>प्रोपाइटरको नामथर :</strong>{firmDetails.FirmOwner} </p>
<p><strong>नागरिकता नम्वर :</strong>{firmDetails.FirmOwnerCitizenNo} </p>
<p><strong>फर्मको ठेगाना :</strong>{firmDetails.Municipality} वडा नं.- {firmDetails.WardNo}, {firmDetails.Tol}, {firmDetails.District} </p>
<p><strong>पुँजी रु :</strong>{firmDetails.FirmCapital}({firmDetails.FirmCapitalNepali}) </p>
<p><strong>उद्धेश्य:</strong>{firmDetails.FormObjective} </p>
</div>
<div className='signature'>


<p style={{ textDecorationLine: 'underline', textDecorationStyle: 'dashed' }}>{firmDetails?.userId?.[0]?.fullName}</p>

<p> प्रमाणित गर्ने</p>
<p> अधिकृत</p>
</div>
</div>

</div>
</div>
<div className='PrivateFormPage'>
<div className='invoicePages' id="" style={pageStyle}>
        <div className='pfborder'>
        <div className='' PrivateFirm>
        <table className='ptable'>
  <tr>
    <th colSpan={7}>नविकरण सम्वन्धी विवरण</th>
  </tr>
  <tr>
    <th rowSpan={2} >क्र.स.</th>
    <th rowSpan={2}>नविकरण मिति</th>
    <th rowSpan={2}>असुली आ.व.</th>
    <th rowSpan={2}>रसिद नं.</th>
    <th rowSpan={2}>प्रमाण पत्रको मान्य अवधि</th>
    <th colSpan={2}>नविकरण गर्ने अधिकारीको</th>
  </tr>
  <tr>
    <th>दस्तखत</th>
    <th>कार्यालको छाप</th>
  </tr>
  {Array(6).fill().map((_, index) => (
    <tr key={index}>
      <td style={{ height: '40px', border:'22px', borderColor:'red' }}> </td>
      <td style={{ height: '40px', border:'22px'  }}> </td>
      <td style={{ height: '40px', border:'22px'  }}> </td>
      <td style={{ height: '40px', border:'22px'  }}> </td>
      <td style={{ height: '40px', border:'22px'  }}> </td>
      <td style={{ height: '40px', border:'22px'  }}> </td>
      <td style={{ height: '40px' , border:'22px' }}> </td>
   
    </tr>
  ))}
</table>

        <p> यो प्रमाण पत्र आर्थिक वर्ष समाप्त भएको ३ महिना भित्र नविकरण गर्नु पर्ने छ।</p>
        </div>
        </div>
</div>
</div>
</>
    )
}
const pageStyle = {
  backgroundColor:'green',
  width: '882px',
  minHeight: '1202px',
  backgroundColor:'red',
  position:'relative'

  // margin:'20px'
};
export default PrivateFormTemplete;