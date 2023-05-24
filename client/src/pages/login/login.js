import { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
export default function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vR7ufSlKzNAs4FySlXMym55CtJEa7Yd8FQGceiZwbo_Iy_dLNvV-Gw2ocCxY7GLaA/pub?gid=1362133278&single=true&output=csv');
      setData(response.data.split('\n').map((line) => line.split(',')));
    };

    fetchData();
  }, []);

  const columns = data[0] ? data[0].map((header) => ({ title: header, dataIndex: header })) : [];

  return (
    <div style={{ border: '1px solid black', padding: '5px' }}>
      <Table dataSource={data.slice(1)} columns={columns} />
    </div>
  );
}
