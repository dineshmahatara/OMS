import { Card } from 'antd';
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
const CustomCard = (props) => {
  const router = useRouter();
 return(
   
   <Card onClick={()=> router.push('/SectionAdmin/'+props.item._id)}
  //  {/* <Card onClick={() => router.push(`/getPrivateFirm/${props.item._id}`)} */}
    title={props.item.FormName}
    bordered={false}
    extra={<a href="#">Edit</a>}
    style={{
   width: 300,
   margin:33,
    }}
  >
    <p>{props.item.FormName}</p>
    <p>{props.item.FormType}</p>
    <p> {props.item.FormStatus}</p>
  </Card>
   
)}
export default CustomCard;