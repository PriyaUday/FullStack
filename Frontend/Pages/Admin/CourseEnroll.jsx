
// import  { useState, useEffect } from 'react';
// // import axios from 'axios';
// import clas from "../../assets/bluefloral.jpg";
// import '../../assets/css/CourseEnroll.css'
// import {enrollStudents} from '../../services/auth'
// function User() {
//   const [servicesData, setServicesData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []); // Fetch data when the component mounts

//   const fetchData = async () => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await enrollStudents();
//       // {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,  // Corrected string interpolation
//       //   },
//       // });

//       console.log('Fetched data:', response.data);
      
//       // Update the state with the modified data
//       setServicesData(response.data);
//       // Update the state with the fetched data
//       // setServicesData(response.data);
//     } catch (error) {
//       console.error('Fetching data failed:', error);
//       // Handle the error, e.g., show an error message
//     }
//   };

//   return (
//     <div>
//       <div style={{ backgroundImage: `url(${clas})` }} className="clas">
//         <div className='adminback'>
//           <div className='viewback5678'>
//             <div className="views1234">
//               <section id="view">
//                 <center>
//                   <h2 className='h2ad'>Enrollment Status</h2>
//                 </center>
//                 <table className='admintable5678'>
//                   <thead>
//                     <tr>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Gender</th>
//                       <th>Mobile</th>
//                       <th>Address</th>
//                       <th>Birthdate</th>
//                       <th>City</th>
//                       <th>Postal</th>
//                       <th>Region</th>
                          
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {servicesData.map((service, index) => (
//                       <tr key={index}>
//                         <td>{service.name}</td>
//                         <td>{service.email}</td>
//                         <td>{service.gender}</td>
//                         <td>{service.mobile}</td>
//                         <td>{service.address}</td>
//                         <td>{service.date}</td>
                        
//                         <td>{service.city}</td>
//                         <td>{service.postal}</td>
//                         <td>{service.region}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default User;



import { useEffect, useState } from 'react';
import clas from "../../assets/bluefloral.jpg";
import '../../assets/css/CourseEnroll.css';
import { enrollStudents } from '../../services/auth';
import Navbar from './Navbar';

function User() {
  const [servicesData, setServicesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      const response = await enrollStudents();
      setServicesData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredData = servicesData.filter((service) =>
      service.name.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filteredData);
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${clas})` }} className="clas">
      <div className='adminback'>
      <Navbar></Navbar>
      <div className='viewback5678'>
      <div className="views1234">
              <section id="view">
                <center>
                  <h2 className='h2ad'>Enrollment Status</h2>
                </center>
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <table className='admintable5678'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Mobile</th>
                      <th>Address</th>
                      <th>Birthdate</th>
                      <th>City</th>
                      <th>Postal</th>
                      <th>Region</th>
                      <th>Course name</th>

                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((service, index) => (
                      <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.gender}</td>
                        <td>{service.mobile}</td>
                        <td>{service.address}</td>
                        <td>{service.date}</td>
                        <td>{service.city}</td>
                        <td>{service.postal}</td>
                        <td>{service.region}</td>
                        <td>{service.courseName}</td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
