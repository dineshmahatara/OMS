import { Card } from 'antd';
import styles from '@/styles/Home.module.css'

const CustomCard = (props) => {
 return(
   
   <Card
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