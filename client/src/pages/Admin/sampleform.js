// import React from 'react';
// import { Formik, Field, ErrorMessage, Form } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   FiscalYear: Yup.string().required('Fiscal Year is required'),
//   FormObjective: Yup.string().required('Form Objective is required'),
//   FormStatus: Yup.string().required('Form Status is required'),
// });

// const MyForm = () => {
//   const initialValues = {
//     FiscalYear: '',
//     FormName: 'Dara Lamb',
//     FormObjective: '',
//     FormType: 'Type3',
//     Province: 'Lumbini',
//     District: 'Pyuthan',
//     Municipality: 'Jhimruk',
//     WardNo: '7',
//     Tol: 'Dolores doloremque a',
//     FormPanNo: 'Laborum cupidatat ve',
//     RegistrationDate: '22-Jan-1979',
//     FormStatus: '',
//   };

//   const handleSubmit = async(values) => {
//     // Handle form submission
//     const requestOptions ={
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(values)
//     }
//     try{
//       const res = await fetch('http://localhost:3001/registerPrivateFirm',requestOptions)
//       const data = await res.json()
//       console.log(data)
//       if(res && data.success){
//         messageApi.success(data.msg);
//       }else{
//         messageApi.error(data.msg);
//       }
//       }catch(err){
//         messageApi.warning(data.msg);
//       }
//      }
//     // console.log(values);


//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchema}
//     >
//       <Form>
//         {Object.keys(initialValues).map((fieldName) => (
//           <div key={fieldName}>
//             <label htmlFor={fieldName}>{fieldName}:</label>
//             <Field type="text" name={fieldName} />
//             <ErrorMessage name={fieldName} component="div" />
//           </div>
//         ))}
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// const App = () => {
//   return <MyForm />;
// };

// export default App;