// import '../../assets/css/Trainers.css';
// import { Link } from 'react-router-dom';
// import tgbg from "../../assets/illu.jpg";
// import homeicon from '../../assets/home.png'
// import { useState, useEffect } from 'react';
//  import '../../assets/css/Trainers.css'
// // import axios from 'axios';
// import {getTrainer} from '../../services/auth'

// function Trainers() {
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

//       const response = await getTrainer();
//       //  {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,  // Corrected string interpolation
//       //   },
//       // });

//       console.log('Fetched data:', response.data);
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
//     <div>
//       <div style={{ backgroundImage: `url(${tgbg})` }} className="tgbg">
//         <Link to="/dashboard"><img className="homeicontran" src={homeicon} alt="home icon" /></Link>

       
//               <div className="views">
//                 <section id="view">
//                   <center>
//                     <h2 className='h2ad'>Available Trainers</h2>
//                   </center>
//                   <table className='admintable'>
//                     <thead>
//                       <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Mobile</th>
//                         <th>Specialist</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {servicesData.map((service, index) => (
//                         <tr key={index}>
//                           <td>{service.name}</td>
//                           <td>{service.age}</td>
//                           <td>{service.mobile}</td>
//                           <td>{service.specialist}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </section>
//       </div>
//       <Link to="/tranform"><button className="button1345">Book Your Trainer</button></Link>
//     </div>
            
//         </div>
//         </div>
//   );
// }

// export default Trainers;


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Trainers.css';
import homeicon from '../../assets/aro1.jpeg';
import tgbg from '../../assets/illu.jpg';
import { getTrainer } from '../../services/auth';

function Trainers() {
  const [allTrainers, setAllTrainers] = useState([]);
  const [filteredTrainers, setFilteredTrainers] = useState([]);
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

      const response = await getTrainer();
      console.log('Fetched data:', response.data);

      setAllTrainers(response.data);
      setFilteredTrainers(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredData = allTrainers.filter((trainer) =>
      trainer.name.toLowerCase().includes(searchTerm)
    );

    setFilteredTrainers(filteredData);
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${tgbg})` }} className="tgbg">
        <Link to="/dashboard">
          <img className="homeicontran" src={homeicon} alt="home icon" />
        </Link>
        <div className="views">
        <section id="view">
        <div  className='tbox'>
          <center>
          <h2 className="h2ad">Available Trainers</h2>
          </center>
          <div className="search-bar">
              <input
                type="text"
                placeholder="Search by trainer name"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <table className="admintable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Mobile</th>
                  <th>Specialist</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {filteredTrainers.map((trainer, index) => (
                  <tr key={index}>
                    <td>{trainer.name}</td>
                    <td>{trainer.age}</td>
                    <td>{trainer.mobile}</td>
                    <td>{trainer.specialist}</td>
                    <td>
                    <Link to={`/tranform?trainerName=${encodeURIComponent(trainer.name)}`}>
                    <button className='formbu174'>Book Trainer</button>
                    </Link>
</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </section>
        </div>
       
      </div>
    </div>
  );
}

export default Trainers;

