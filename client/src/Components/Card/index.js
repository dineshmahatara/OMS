import { Card } from 'antd';
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import firstForm from '@/pages/staffs/firstform';

const CustomCard = () => {
  const [formItem, setFormItem] = useState([]);
  const router = useRouter()

  useEffect(() => {
    const fetchFormDetail = async () => {
      try {
        const response = await fetch('http://localhost:3001/PrivateFirm/');
        const data = await response.json();
        const formItemObject = JSON.parse(JSON.stringify(data));
        const firstForm = formItemObject.firmsList[0];
        setFormItem(formItemObject.firmsList);
      } catch (error) {
        console.error('Error fetching Details:', error);
      }
    };

    fetchFormDetail();
    const interval = setInterval(fetchFormDetail, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleFormDetail = (productId) => {
    router.push(`/SectionAdmin/${productId}`);
  };

  return (
    <>
      {formItem.map((item) => (
        <Card
          key={item._id}
          onClick={() => handleFormDetail(item._id)}
          title={item.FormName}
          bordered={false}
          extra={<a href="#">Edit</a>}
          style={{
            width: 300,
            margin: 33,
          }}
        >
          <p>{item.FormName}</p>
          <p>{item.FormType}</p>
          <p> {item.FormStatus}</p>
        </Card>
      ))}
    </>
  );
};

export default CustomCard;
