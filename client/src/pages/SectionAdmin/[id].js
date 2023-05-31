import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PrivateFirm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [firmDetails, setFirmDetails] = useState('');

  useEffect(() => {
    const fetchFirmDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/PrivateFirm/${router.query.id}`);
        const data = await response.json();
        // Set the fetched firm details in the state
        setFirmDetails(data.firmDetails);
        console.log(firmDetails)
        // console.log(data)
      } catch (error) {
        console.error('Error fetching firm details:', error);
      }
    };
    fetchFirmDetails();
  }, [id]);

  return (
    <div>
      <h1>Firm Details</h1>
      <p>Firm ID: {id}</p>
    
        <div>
          <p>Form Name: {firmDetails.FormName}</p>
          <p>District: {firmDetails.District}</p>
        </div>
      
    </div>
  );
};

export default PrivateFirm;
