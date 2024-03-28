// import { useState ,useEffect} from 'react';
// // import axios from 'axios';
// import {getTrainers} from '../../services/auth'
// import adminaca from '../../assets/schbg1.png';
// import '../../assets/css/Viewenroll.css';

// const AdminTrainer = () => {
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

//       const response = await getTrainers();
      

    
//       setServicesData(response.data);
//       // Update the state with the modified data
      
//       // Update the state with the fetched data
//       // setServicesData(response.data);
//     } catch (error) {
//       console.error('Fetching data failed:', error);
//       // Handle the error, e.g., show an error message
//     }
//   };

//   return (
//       <div>
//       <div style={{ backgroundImage: `url(${adminaca})` }} className="viewaca">
//       <div className='adminback'>
//           <div className='viewback1234'>
//             <div className="views">
//               <section id="view">
//                 <center>
//                   <h2 className='h2ad'>Bookings</h2>
//                 </center>
//                 <table className='admintable1234'>
//                   <thead>
//                     <tr>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Mobile</th>
//                       <th>Trainer</th>
//                      <th>Goal</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {servicesData.map((service, index) => (
//                       <tr key={index}>
//                         <td>{service.name}</td>
//                         <td>{service.email}</td>
//                         <td>{service.mobile}</td>
//                         <td>{service.trainer}</td>
//                         <td>{service.goal}</td>
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
// };

// export default AdminTrainer;



import { useState, useEffect } from 'react';
import { getTrainers } from '../../services/auth';
import adminaca from '../../assets/schbg1.png';
import '../../assets/css/Viewenroll.css';
import Navbar from './Navbar';
const AdminTrainer = () => {
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

      const response = await getTrainers();
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
      <div style={{ backgroundImage: `url(${adminaca})` }} className="viewaca">
        <div className="adminback">
       <Navbar/>
          <div className="viewback1234">
            <div className="views">
              <section id="view">
                <center>
                  <h2 className="h2ad">Bookings</h2>
                </center>
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <table className="admintable1234">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Trainer</th>
                      <th>Goal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((service, index) => (
                      <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.mobile}</td>
                        <td>{service.trainer}</td>
                        <td>{service.goal}</td>
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
};

export default AdminTrainer;

