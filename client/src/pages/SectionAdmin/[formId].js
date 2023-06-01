import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PrivateFirm = () => {
  const router = useRouter();
  const [firmDetails, setFirmDetails] = useState('');
  const { formId } = router.query;

  useEffect(() => {
    const fetchFirmDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/PrivateFirm/${formId}`);
        const data = await response.json();
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
  return (
    <div>
      <h1>Firm Details</h1>
      <p>Firm Name: {firmDetails.FormName}</p>
      <p>Province: {firmDetails.Province}</p>
      <p>District: {firmDetails.District}</p>
      <p>Municipality: {firmDetails.Municipality}</p>

      <div>

      </div>

    </div >
  )

};

export default PrivateFirm;
