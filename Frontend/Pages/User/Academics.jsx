// import './Academics.css'
// import yoga1 from "../assets/yoga1.jpg"
// import yoga2 from "../assets/yoga2.jpg"
// import yoga3 from "../assets/yoga3.jpg"
// import yoga4 from "../assets/yoga4.jpg"
// import yoga5 from "../assets/yoga5.jpg"
// import yoga6 from "../assets/yoga6.jpg"
// import homeicon from '../assets/home.png'

// import { Link } from 'react-router-dom'
// function Homepage() {
//   return (
//     <div className='academy'>
//         <Link to="/dashboard"><img className="homeicon" src={homeicon}></img></Link>
//      <main >
//       <div className="about-me-text">
//         <p>FEATURED ACADEMY</p>
//         <div className='eventside'>Balance is the key to a peaceful mind; yoga is the journey to find it.</div>
//       </div>
      
//     <div className="about-me">
//       <div className='event1'><img src={yoga1} alt="me"></img><p className='p1'>ISHA YOGA ACADEMY</p><p className='p2'>Place: Coimbatore</p><Link to="/classes"><button className='button-33'>VIEW ACADEMY</button></Link></div>&nbsp;
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <div className='event2'><img src={yoga2} alt="me"></img><p className='p1'>DHIYANAM ACADEMY</p><p className='p2'>Place: Bangalore</p><button className='button-33'>VIEW ACADEMY</button>
//       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <div className='event3'><img src={yoga3} alt="me"></img><p className='p1'>MANTRA ACADEMY</p><p className='p2'>Place: Chennai</p><button className='button-33'>VIEW ACADEMY</button></div>
//     </div>
//     <div className="about-me1">
//       <div className='event4'><img src={yoga4} alt="me"></img><p className='p4'>SARVA ACADEMY</p><p className='p3'>Place: Bangalore</p><button className='button-33'>VIEW ACADEMY</button></div>&nbsp;
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <div className='event5'><img src={yoga5} alt="me"></img><p className='p4'>DHWANI ACADEMY</p><p className='p3'>Place: Chennai</p><button className='button-33'>VIEW ACADEMY</button>
//       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <div className='event6'><img src={yoga6} alt="me"></img><p className='p4'>ASNA ACADEMY</p><p className='p3'>Place: Coimbatore</p><button className='button-33'>VIEW ACADEMY</button></div>
//     </div>
//   </main>
  
  
//   </div>

//   )
// }

// export default Homepage


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './Academics.css';
// import homeicon from '../assets/home.png';

// // Define constant image URL
// const DEFAULT_IMAGE_URL = 'https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2015/08/iStock-944619732.jpg?fit=2121,1414&ssl=1';

// function Homepage() {
//   const [academies, setAcademies] = useState([]);

//   useEffect(() => {
//     // Fetch data from the database
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:8080/academy', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         // Set the fetched data to the state
//         setAcademies(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once after the initial render

//   return (
//     <div className='academy'>
//       <Link to="/dashboard">
//         <img className="homeicon" src={homeicon} alt="Home Icon" />
//       </Link>
//       <main>
//         <div className="about-me-text">
//           <p>FEATURED ACADEMY</p>
//           <div className='eventside'>Balance is the key to a peaceful mind; yoga is the journey to find it.</div>
//         </div>

//         <div className="about-me">
//           {academies.map(academy => (
//             <div key={academy.id} className='event'>
//               <img src={DEFAULT_IMAGE_URL} alt={academy.name} />
//               <p className='p1'>{academy.name}</p>
//               <p className='p2'>Place: {academy.location}</p>
//               <Link to={`/academies/${academy.id}`}>
//                 <button className='button-33'>VIEW ACADEMY</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Homepage;


// import { useState, useEffect } from 'react';
// // import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../../assets/css/Academics.css';
// import homeicon from '../../assets/home.png';
// // import instance from '../../services/axios';
// import { getAcademies } from '../../services/auth';
// // Define constant image URL
// const DEFAULT_IMAGE_URL = 'https://www.relax.fr/wp-content/uploads/2019/08/AdobeStock_141860204-1160x774.jpg';

// function Homepage() {
//   const [academies, setAcademies] = useState([]);

//   useEffect(() => {
//     // Fetch data from the database
//     const fetchData = async () => {
//       try {
//         // const token = localStorage.getItem('token');
//         const response = await getAcademies();
//         // {
//         //   headers: {
//         //     Authorization: `Bearer ${token}`
//         //   }
//         // }
        
//         // Set the fetched data to the state
//         setAcademies(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once after the initial render

//   return (
//     <div className='academy'>
//       <Link to="/dashboard">
//         <img className="homeicon" src={homeicon} alt="Home Icon" />
//       </Link>
//       <main>
//         <div className="about-me-text">
//           <p>FEATURED ACADEMY</p>
//           <div className='eventside'>Balance is the key to a peaceful mind; yoga is the journey to find it.</div>
//         </div>

//         <div className="about-me">
//           {academies.map(academy => (
//             <div key={academy.id} className='event'>
//               <img src={DEFAULT_IMAGE_URL} alt={academy.name} />
//               <p className='p1'>{academy.name}</p>
//               <p className='p2'>Place: {academy.place}</p>
//               <Link to='/classes'>
//                 <button className='button-33'>VIEW ACADEMY</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Homepage;


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Academics.css';
import homeicon from '../../assets/aro1.jpeg';
import { getAcademies } from '../../services/auth';

// Define constant image URL
const DEFAULT_IMAGE_URL = 'https://www.relax.fr/wp-content/uploads/2019/08/AdobeStock_141860204-1160x774.jpg';

function Homepage() {
  const [academies, setAcademies] = useState([]);
  const [filteredAcademies, setFilteredAcademies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the database
    const fetchData = async () => {
      try {
        const response = await getAcademies();
        // Set the fetched data to the state
        setAcademies(response.data);
        setFilteredAcademies(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredData = academies.filter((academy) =>
      academy.name.toLowerCase().includes(searchTerm)
    );

    setFilteredAcademies(filteredData);
  };

  return (
    <div className='academy'>
    <main>
    <div className="about-me-text">
    <p>FEATURED ACADEMY</p>
    <Link to="/dashboard">
      <img className="homeicon" src={homeicon} alt="Home Icon" />
    </Link>
          <div className='eventside'>Balance is the key to a peaceful mind; yoga is the journey to find it.</div>
        </div>
<br></br>
<br></br>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by academy name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="about-me">
          {filteredAcademies.map(academy => (
            <div key={academy.id} className='event'>
              <img src={academy.imageUrl || DEFAULT_IMAGE_URL} alt={academy.name} />
              <p className='p1'>{academy.name}</p>
              <p className='p2'>Place : {academy.place}</p>
              <Link to={`/classes/${academy.id}`}>
                <button className='buttonview'>Explore Courses</button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Homepage;

