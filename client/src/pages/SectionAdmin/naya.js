import React from 'react';
import ReactDOM from 'react-dom';
import MyDocument from './doc';
import { PDFViewer } from '@react-pdf/renderer';


const viewer=()=>{
    return(
        <PDFViewer>
        <MyDocument />
      </PDFViewer>
    )
}
export default viewer;