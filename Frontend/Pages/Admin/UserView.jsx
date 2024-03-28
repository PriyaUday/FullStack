
// import  { useState, useEffect } from 'react';
// // import axios from 'axios';
// import clas from "../../assets/bluefloral.jpg";
// import '../../assets/css/UserView.css'
// import {getUserDetails} from '../../services/auth'
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

//       const response = await getUserDetails();
//       //  {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,  // Corrected string interpolation
//       //   },
//       // });

//       console.log('Fetched data:', response.data);
//       const modifiedData = response.data.slice(1);

//       // Update the state with the modified data
//       setServicesData(modifiedData);
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
    
//           <div className='viewback'>
//             <div className="views">
//               <section id="view">
//                 <center>
//                   <h2 className='h2ad'>Registered Users</h2>
//                 </center>
//                 <table className='admintable'>
//                   <thead>
//                     <tr>
//                       <th>Name</th>
//                       <th>Email</th>
                     
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {servicesData.map((service, index) => (
//                       <tr key={index}>
//                         <td>{service.name}</td>
//                         <td>{service.email}</td>
                       
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


import  { useState, useEffect } from 'react';
import clas from "../../assets/bluefloral.jpg";
import '../../assets/css/UserView.css'
import { getUserDetails } from '../../services/auth';
import Navbar from './Navbar';
function User() {
  const [originalData, setOriginalData] = useState([]);
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

      const response = await getUserDetails();

      console.log('Fetched data:', response.data);
      const modifiedData = response.data.slice(1);

      // Update the state with the fetched data
      setOriginalData(modifiedData);
      setFilteredData(modifiedData);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredUsers = originalData.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filteredUsers);
  };

  return (
    <div>
    <div style={{ backgroundImage: `url(${clas})` }} className="clas">
    <div className='adminback'>
    <Navbar></Navbar>
          <div className='viewback'>
            <div className="views">
              <section id="view">
                <center>
                  <h2 className='h2ad'>Registered Users</h2>
                </center>
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <table className='admintable'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((user, index) => (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
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
