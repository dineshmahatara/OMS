import { logout,setToken,setRole } from '../../redux/reducerSlice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import data from '../../config/data.json';
import { reach } from 'yup';
const ITEMS_PER_PAGE = 5; // Number of items to display per page
const DataDisplay = ()=> {
  const {role} =useSelector(state=> state.user)
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the current page data
  const currentData = data.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // Function to handle page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };
    return (
      <div style={{textAlign:'center'}}>
      <h1>Data Display</h1>
      <table align='center' border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>
                <img src={item.Image} alt={item.first_name} width="100" height="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => goToPage(page)}>{page}</button>
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;