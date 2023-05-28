import { Table, Pagination, Layout, Space, Input } from 'antd';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Navbar from '../../Components/Navbar';
import { useTranslation } from "../lib/useTranslation";

const { Content } = Layout;
const { Search } = Input;

const Homepage = () => {
  const { fullName, phoneNumber, role, id } = useSelector(state => state.user);
  const { t, locale, setLocale } = useTranslation();
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/showPrivateFirm');
      const data = await response.json();
      console.log(data);
      setData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const filteredData = data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setSearchedData(filteredData);
  }, [searchText, data]);

  const handleTableChange = (pagination, filters, sorter) => {
    const sortedData = sortTableData(searchedData, sorter);
    setSearchedData(sortedData);
  };

  const sortTableData = (data, sorter) => {
    const { columnKey, order } = sorter;
    return data.sort((a, b) => {
      if (order === 'ascend') {
        return a[columnKey].localeCompare(b[columnKey]);
      } else if (order === 'descend') {
        return b[columnKey].localeCompare(a[columnKey]);
      }
      return 0;
    });
  };

  const columns = [
    { key: 'FormName', title: 'FormName' },
    { key: 'FormType', title: 'FormType' },
    { key: 'Province', title: 'Province' },
    { key: 'District', title: 'District' },
    { key: 'Municipality', title: 'Municipality' },
    { key: 'WardNo', title: 'WardNo' },
    { key: 'Tol', title: 'Tol' },
    { key: 'FormPanNo', title: 'FormPanNo' },
    { key: 'RegistrationDate', title: 'RegistrationDate' },
    { key: 'FormStatus', title: 'FormStatus' },
  ];

  const renderEditDeleteIcons = (text, record) => (
    <Space size="middle">
      <EditOutlined />
      <DeleteOutlined />
      <DeleteOutlined />
    </Space>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content style={{ margin: '20px' }}>
        <div style={{ padding: '50px', minHeight: '360px', backgroundColor: '#4ebf93' }}>
          <div style={{ marginBottom: '16px', textAlign: 'right' }}>
            <Search
              placeholder="Search..."
              allowClear
              enterButton
              onSearch={value => setSearchText(value)}
            />
          </div>
          <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
            <Table
              dataSource={searchedData}
              pagination={{
                defaultPageSize: 10,
                pageSizeOptions: ['10', '20', '30', '40'],
                showSizeChanger: true,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
              onChange={handleTableChange}
              scroll={{ x: 'max-content' }}
            >
              {columns.map(column => (
                <Table.Column
                  key={column.key}
                  title={column.title}
                  dataIndex={column.key}
                  sorter
                />
              ))}
              <Table.Column
                title="Actions"
                key="actions"
                render={renderEditDeleteIcons}
              />
            </Table>
          </div>
        </div>
      </Content>
    </Layout>
  );
};


export async function getServerSideProps({ req, res }) {
  const { token } = req.cookies;

  if (!token) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return { props: {} };
  }
  return { props: {} };
}

export default Homepage;
