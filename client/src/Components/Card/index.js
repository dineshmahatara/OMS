import { useState } from 'react';
import { Card, Popconfirm ,message} from 'antd';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import { MenuOutlined, UserOutlined,EyeOutlined, DeleteOutlined,EditOutlined, LogoutOutlined } from '@ant-design/icons';
import axios from 'axios';

const CustomCard = (props) => {
  const router = useRouter();
  const [deleted, setDeleted] = useState(false); // State to track if the record is deleted

  const handleDelete = async () => {
    try {
      // Perform the delete action
      await axios.delete(`http://localhost:3001/deletePrivateFirm/${props.item._id}`);
      // console.log('Delete action triggered');
      // Update the state to indicate the deletion
      setDeleted(true);
      message.success('Record deleted');

    } catch (error) {
      console.error('Failed to delete:', error);
      // Handle any error occurred during deletion
      message.error('Failed to delete record');

    }
  };

  // Return null if the record is deleted to hide the card
  if (deleted) {
    return null;
  }

  return (
    <Card
      title={props.item.FormName}
      bordered={false}
      extra={
        <div>
          <a href="#" onClick={() => router.push('/SectionAdmin/' + props.item._id)}>
           <EyeOutlined /></a>
          <a href="#"> <EditOutlined style={{color:'red'}} /></a>
          <Popconfirm
            title="Are you sure you want to  delete this form?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No"
          >
        <a href="#"> <DeleteOutlined style={{color:'red'}} /></a>
          </Popconfirm>
        </div>
      }
      style={{
        width: 300,
        margin: 33,
      }}
    >
      <p>{props.item.FormName}</p>
      <p>{props.item.FormType}</p>
      <p>{props.item.FormStatus}</p>
    </Card>
  );
};

export default CustomCard;
