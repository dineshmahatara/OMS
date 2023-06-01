import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PrivateFirm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [firmDetails, setFirmDetails] = useState('');

  useEffect(() => {
    const fetchFirmDetails = async () => {
      try {
        if(router.query.id) {
          const response = await fetch('http://localhost:3001/PrivateFirm/'+router.query.id);
        
          const data = await response.json();
          if(data) {
            console.log(data)
            setFirmDetails(data.firmDetails);
          }
          
          
          // Set the fetched firm details in the state
          
          
        }
    
        // console.log(data)
      } catch (error) {
        console.error('Erro:', error);
      }
    };
    fetchFirmDetails();
  }, [id]);

  return (
    <div>
      <h1>Firm Details</h1>
      <p>Firm ID: {id}</p>
    
        <div>
        {JSON.stringify(firmDetails)}
        {JSON.stringify(firmDetails)}
     {/* {firmDetails.FormPanNo} */}
        </div>
      
    </div>
  );
};

export default PrivateFirm;
