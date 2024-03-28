
// import  { useState } from 'react';
// import './Classes.css';
// import { Link } from 'react-router-dom';
// import homeicon from '../assets/home.png';
// // import classbg from "../assets/class.jpg"
// const Academy = () => {
//   const [searchId, setSearchId] = useState('');

//   const courses = [
//     {
//       name: 'Bikram Yoga',
//       duration: '3 months',
//       timings: '6am to 6pm',
//       description: 'Embark on a Transformative Journey of Self-Discovery through Our Yoga Classes',
//     },
//     {
//       name: 'Hatha Yoga',
//       duration: '5 months',
//       timings: '6am to 6pm',
//       description: 'Dive into the fundamentals of yoga with our Hatha Harmony class',
//     },
//     {
//       name: 'Vinyasa Yoga',
//       duration: '4 months',
//       timings: '9am to 11am',
//       description: 'Join us for Vinyasa Vitality, a dynamic and flowing class ',
//     },
//     {
//       name: 'Ashtanga Yoga',
//       duration: '6 months',
//       timings: '7am to 8am',
//       description: 'Dive into a 6-month journey of dynamic poses and focused breath in our Ashtanga Yoga class',
//     },
//     {
//       name: 'Yin Yoga',
//       duration: '2 months',
//       timings: '5pm to 6pm',
//       description: ' Experience deep relaxation and increased flexibility with Yin Yoga',
//     },
//     {
//       name: 'Power Yoga',
//       duration: '4 months',
//       timings: '10am to 12pm',
//       description: 'Elevate your energy and strength with Power Yoga',
//     },
//     {
//       name: 'Restorative Yoga',
//       duration: '3 months',
//       timings: '4pm to 5pm',
//       description: 'Ideal for those seeking a gentle yet rejuvenating experience ',
//     },
//     {
//       name: 'Prenatal Yoga',
//       duration: '6 weeks',
//       timings: '6pm to 7pm',
//       description: 'Nurture yourself and your baby in our 6-week Prenatal Yoga class',
//     },
//   ];
//   const [filteredCourses, setFilteredCourses] = useState(courses);

//   const handleSearch = (e) => {
//     e.preventDefault();

//     const filteredCourses = courses.filter(course =>
//       course.name.toLowerCase().includes(searchId.toLowerCase()) ||
//       course.duration.toLowerCase().includes(searchId.toLowerCase()) ||
//       course.timings.toLowerCase().includes(searchId.toLowerCase())
//     );

//     setFilteredCourses(filteredCourses);
//   };

 
//   return (
    
//     <div className="academy-container">
//             <br></br>  <br></br>  <Link to="/dashboard"><img className="homeiconcl" src={homeicon}></img></Link>
//       <h2 className="courses-heading">Courses</h2><br></br><br></br>
     
//           <form onSubmit={handleSearch} className="search-form">
//           <input
//             type="text"
//             placeholder="Search course"
//             value={searchId}
//             onChange={(e) => setSearchId(e.target.value)}
//           />
//           <button className="search"type="submitse">Search</button>
       
//         </form>
      
//         <ul id="userCourseGrid2" className="courses-list">
//           {filteredCourses.map((course, i) => (
//             <li key={i}>
//               <p>
//                 Course Name: {course.name} <br />
//                 Duration: {course.duration} <br />
//                 Timings: {course.timings}
//               </p>
//               <p>{course.description}</p>
//             <Link to="/enroll"><button  className="enroll-button">
//                 Enroll 
//               </button></Link>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//     );
// };
// export default Academy;




// import  { useState, useEffect } from 'react';
// // import axios from 'axios';
// import {getCourses} from '../../services/auth'
// import { Link } from 'react-router-dom';
// import homeicon from '../../assets/home.png';
// import '../../assets/css/Classes.css';

// const Academy = () => {
//   const [courses, setCourses] = useState([]);

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
  
//       const response = await getCourses();
      
//       // {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       // });
//       setCourses(response.data);
//     } catch (error) {
//       console.error('Fetching courses failed:', error);
//     }
//   };

//   return (
//     <div className="academy-container">
//       <br />
//       <br />
//       <Link to="/dashboard">
//         <img className="homeiconcl" src={homeicon} alt="Home" />
//       </Link>
//       <h2 className="courses-heading">About Courses</h2>
//       <br />
//       <br />

//       <ul className="courses-list">
//         {courses.map((course, index) => (
//           <li key={index}>
//             <p>
//               Course Name: {course.name} <br />
//               Duration: {course.duration} <br />
//               Timings: {course.timings}
//             </p>
//             <Link to="/enroll">
//               <button className="enroll-button">Enroll</button>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Academy;




// import  { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import homeicon from '../../assets/home.png';
// import '../../assets/css/Classes.css';
// import { getCourses } from '../../services/auth';  // Assuming getCourses is implemented in 'auth' service

// const Academy = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await getCourses();

//       // Assuming response.data is an array of courses
//       setCourses(response.data);
//     } catch (error) {
//       console.error('Fetching courses failed:', error);
//     }
//   };

//   return (
//     <div className="academy-container">
//       <br />
//       <br />
//       <Link to="/dashboard">
//         <img className="homeiconcl" src={homeicon} alt="Home" />
//       </Link>
//       <h2 className="courses-heading">About Courses</h2>
//       <br />
//       <br />

//       <ul className="courses-list">
//         {courses.map((course,index) => (
//            <li key={index}>
//           <li>
//             <p>
//               Course Name: {course.name} <br />
//               Duration: {course.duration} <br />
//               Timings: {course.timings}
//             </p>
//             <Link to={`/enroll`}> {/* Assuming you want to include course name in the URL */}
//               <button className="enroll-button">Enroll</button>
//             </Link>
//             </li>
//            </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Academy;



import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../assets/css/Classes.css';
import homeicon from '../../assets/aro1.jpeg';
import instance from '../../services/axios';
// import { getCourses } from '../../services/auth'; // Assuming getCourses is implemented in 'auth' service
const dfimg = 'https://img.freepik.com/free-photo/beautiful-woman-meditating-outdoors_72229-1500.jpg';

const Academy = () => {
  const { academyId } = useParams();
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const response = await getCourses();
      const response = await instance.get(`http://localhost:8181/course/academy/${academyId}`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      // Assuming response.data is an array of courses
      setCourses(response.data);
      setFilteredCourses(response.data);
    } catch (error) {
      console.error('Fetching courses failed:', error);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredData = courses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm)
    );

    setFilteredCourses(filteredData);
  };

  return (
    <div className="academy-container" >
      <br />
      <br />
      <Link to="/dashboard">
        <img className="homeiconcl" src={homeicon} alt="Home" />
      </Link>
      <h2 className="courses-heading">About Courses</h2>
      <br />
      <br />

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by course name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ul className="about-me">
        {filteredCourses.map((course, index) => (
          <li key={index}>
          <div className='course-card'>
          <img src={dfimg} alt="Course Image" />
            <p>
              Course Name: {course.name} <br />
              Duration: {course.duration} <br />
              Timings: {course.timings}
            </p>
            <Link to={`/enroll/${course.id}/${course.name}`}> {/* Assuming you want to include course name in the URL */}
              <button className="enroll-button">Enroll</button>
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Academy;

