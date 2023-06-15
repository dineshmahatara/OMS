import { useState } from 'react';
import { Card, Popconfirm, message } from 'antd';
import { useRouter } from 'next/router';
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import Link from 'next/link';
const CustomCard = (props) => {
  const router = useRouter();
  const [deleted, setDeleted] = useState(false); // State to track if the record is deleted

  const handleDelete = async () => {
    try {
      // Perform the delete action
      await axios.delete(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/deletePrivateFirm/${props.item._id}`);
      // Update the state to indicate the deletion
      setDeleted(true);
      message.success('Record deleted');
    } catch (error) {
      console.error('Failed to delete:', error);
      // Handle any error occurred during deletion
      message.error('Failed to delete record');
    }
  };

  const handleEdit = () => {
    router.push(`/Private-Firms/edit/${props.item._id}`);
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
          <Link href={`/Private-Firms/${props.item._id}`}>
            <EyeOutlined />
          </Link>
          <Link href="#" onClick={handleEdit}>
            <EditOutlined style={{ color: 'red' }} />
          </Link>
          <Popconfirm
            title="Are you sure you want to delete this form?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No"
          >
            <Link href="#">
              <DeleteOutlined style={{ color: 'red' }} />
            </Link>
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
