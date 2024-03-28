// import { useState, useEffect } from 'react';
// // import axios from 'axios';
// import instance from '../../services/axios';

// const Course = () => {
//   const [courses, setCourses] = useState([]);
//   const [newCourse, setNewCourse] = useState({ name: '', duration: '', timings: '' });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await instance.get('http://localhost:8181/course', {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });

//       // Assuming response.data is an array of courses
//       setCourses(response.data);
//     } catch (error) {
//       console.error('Fetching courses failed:', error);
//     }
//   };

//   const addCourse = async () => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await instance.post('http://localhost:8181/course', newCourse, {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });

//       console.log('Course added:', response.data);
//       setNewCourse({ name: '', duration: '', timings: '' });

//       // After adding a course, refresh the list
//       fetchData();
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   const updateCourse = async (name, updatedCourse) => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await instance.put(`http://localhost:8181/course/${name}`, updatedCourse, {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });

//       console.log('Course updated:', response.data);

//       // After updating a course, refresh the list
//       fetchData();
//     } catch (error) {
//       console.error('Error updating course:', error);
//     }
//   };

//   const deleteCourse = async (name) => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await instance.delete(`http://localhost:8181/course/${name}`, {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });

//       console.log('Course deleted:', response.data);

//       // After deleting a course, refresh the list
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   return (
//     <div className="course-container">
//       <h2 className="courses-heading">Courses</h2>

//       <ul className="courses-list">
//         {courses.map((course, index) => (
//           <li key={index}>
//             <p>
//               Course Name: {course.name} <br />
//               Duration: {course.duration} <br />
//               Timings: {course.timings}
//             </p>
//             <button onClick={() => updateCourse(course.name, { name: 'Updated Course', duration: 'Updated Duration', timings: 'Updated Timings' })}>
//               Update
//             </button>
//             <button onClick={() => deleteCourse(course.name)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <div>
//         <h2>Add New Course</h2>
//         <label>
//           Name:
//           <input type="text" value={newCourse.name} onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} />
//         </label>
//         <label>
//           Duration:
//           <input type="text" value={newCourse.duration} onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })} />
//         </label>
//         <label>
//           Timings:
//           <input type="text" value={newCourse.timings} onChange={(e) => setNewCourse({ ...newCourse, timings: e.target.value })} />
//         </label>
//         <button onClick={addCourse}>Add Course</button>
//       </div>
//     </div>
//   );
// };

// export default Course;



// import  { useState, useEffect } from 'react';
// import instance from '../../services/axios';
// import { useParams } from 'react-router-dom';

// const Course = () => {
//   const { academyId } = useParams();
//   const [courses, setCourses] = useState([]);
//   const [newCourse, setNewCourse] = useState({ name: '', duration: '', timings: '' });
//   const [updatedCourse, setUpdatedCourse] = useState({ name: '', duration: '', timings: '' });

//   useEffect(() => {
//     fetchData();
//   }, [academyId]);

//   const fetchData = async () => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }

//       const response = await instance.get(`http://localhost:8181/course/academy/${academyId}`, {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });

//       setCourses(response.data);
//     } catch (error) {
//       console.error('Fetching courses failed:', error);
//     }
//   };

//   const addCourse = async () => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }

//       const response = await instance.post(`http://localhost:8181/course/${academyId}`, newCourse,
//        {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });

//       console.log('Course added:', response.data);
//       setNewCourse({ name: '', duration: '', timings: '' });
//       fetchData();
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   const updateCourse = async (name, updatedCourse) => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }

//       const response = await instance.put(`http://localhost:8181/course/${name}`, updatedCourse, {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });

//       console.log('Course updated:', response.data);
//       fetchData();
//     } catch (error) {
//       console.error('Error updating course:', error);
//     }
//   };

//   const deleteCourse = async (name) => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }

//       const response = await instance.delete(`http://localhost:8181/course/${name}`, {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });

//       console.log('Course deleted:', response.data);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   return (
//     <div className="course-container">
//       <h2 className="courses-heading">Courses for Academy ID: {academyId}</h2>

//       <ul className="courses-list">
//         {courses.map((course, index) => (
//           <li key={index}>
//             <p>
//               Course Name: {course.name} <br />
//               Duration: {course.duration} <br />
//               Timings: {course.timings}
//             </p>
//             <label>
//               Update Name:
//               <input type="text" value={updatedCourse.name} onChange={(e) => setUpdatedCourse({ ...updatedCourse, name: e.target.value })} />
//             </label>
//             <label>
//               Update Duration:
//               <input type="text" value={updatedCourse.duration} onChange={(e) => setUpdatedCourse({ ...updatedCourse, duration: e.target.value })} />
//             </label>
//             <label>
//               Update Timings:
//               <input type="text" value={updatedCourse.timings} onChange={(e) => setUpdatedCourse({ ...updatedCourse, timings: e.target.value })} />
//             </label>
//             <button onClick={() => updateCourse(course.name)}>Update</button>
//             <button onClick={() => deleteCourse(course.name)}>Delete</button>
//           </li>
//         ))}
//       </ul>  
//       <div>
//         <h2>Add New Course</h2>
//         <label>
//           Name:
//           <input type="text" value={newCourse.name} onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} />
//         </label>
//         <label>
//           Duration:
//           <input type="text" value={newCourse.duration} onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })} />
//         </label>
//         <label>
//           Timings:
//           <input type="text" value={newCourse.timings} onChange={(e) => setNewCourse({ ...newCourse, timings: e.target.value })} />
//         </label>
//         <button onClick={addCourse}>Add Course</button>
//       </div>
//     </div>
//   );
//   }

// export default Course;

// import axios from 'axios';
//naveen original
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import '../../assets/css/AdminCourse.css';
// import adminaca from '../../assets/olivefloral.png';
// import instance from '../../services/axios';
// const dfimg = 'https://img.freepik.com/free-photo/beautiful-woman-meditating-outdoors_72229-1500.jpg';

// const AdminCourse = () => {
//   const { academyId } = useParams();
//   const [courses, setCourses] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [updateFormVisible, setUpdateFormVisible] = useState(false);
//   const [newCourse, setNewCourse] = useState({
//     name: '',
//     duration: '',
//     timings: '',
//     academyId: academyId
//   });

//   // State to hold the current course being updated
//   const [currentCourse, setCurrentCourse] = useState(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
        
//                 const token = sessionStorage.getItem('token');
            
//              if (!token) {
//                    console.error('Token not found. Please log in again.');
//                    return;
//                   }
//         const response = await instance.get(`http://localhost:8181/course/academy/${academyId}`, {
//         //   headers: {
//         //     Authorization: `Bearer ${token}`
//         //   }
//         });
//         setCourses(response.data);
//       } catch (error) {
//         console.error('Error fetching course data:', error);
//       }
//     };

//     fetchCourses();
//   }, [academyId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCourse(prevCourse => ({
//       ...prevCourse,
//       [name]: value
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const token = sessionStorage.getItem('token');
            
//         if (!token) {
//               console.error('Token not found. Please log in again.');
//               return;
//              }
//       const response = await await instance.post(`http://localhost:8181/course/${academyId}`, newCourse,{
//         // headers: {
//         //   Authorization: `Bearer ${token}`
//         // }
//       });
//       console.log('New course added:', response.data);
//       setNewCourse({
//         name: '',
//         duration: '',
//         timings: '',
//         academyId: academyId
//       });
//       setShowForm(false);
//       const updatedResponse = await instance.get(`http://localhost:8181/course/academy/${academyId}`, {
//         // headers: {
//         //   Authorization: `Bearer ${token}`
//         // }
//       });
//       setCourses(updatedResponse.data);
//     } catch (error) {
//       console.error('Error adding new course:', error);
//     }
//   };

//   const handleDeleteCourse = async (name) => {
//     try {
//         const token = sessionStorage.getItem('token');
            
//         if (!token) {
//               console.error('Token not found. Please log in again.');
//               return;
//              }
//       await instance.delete(`http://localhost:8181/course/${name}`, {
//         // headers: {
//         //   Authorization:   `Bearer ${token}`
//         // }
//       });
//       console.log('Course deleted successfully!');
//       window.alert('Course deleted successfully!');
//       const updatedCourses = courses.filter(course => course.name !== name);
//       setCourses(updatedCourses);
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   const handleUpdateFormOpen = (course) => {
//     setCurrentCourse(course);
//     setNewCourse({
//       name: course.name,
//       duration: course.duration,
//       timings: course.timings,
//       academyId: academyId
//     });
//     setUpdateFormVisible(true);
//   };

//   const handleUpdateCourse = async () => {
//     try {
//         const token = sessionStorage.getItem('token');
            
//         if (!token) {
//               console.error('Token not found. Please log in again.');
//               return;
//              }
//       const response = await instance.put(`http://localhost:8181/course/${currentCourse.name}`, newCourse, {
//         // headers: {
//         //   Authorization: `Bearer ${token}`
//         // }
//       });
//       console.log('Course updated:', response.data);
//       window.alert('Course updated successfully!');
//       setUpdateFormVisible(false);
//       const updatedResponse = await instance.get(`http://localhost:8181/course/academy/${academyId}`, {
//         // headers: {
//         //     Authorization: `Bearer ${token}`
//         //   }
//       });
//       setCourses(updatedResponse.data);
//     } catch (error) {
//       console.error('Error updating course:', error);
//     }
//   };

//   return (
//     <div style={{ backgroundImage: `url(${adminaca})`, backgroundSize: 'cover' }} className="course-details-container">
//       <h1 className="course-heading">Course Details</h1>
//       <button className="add-button" onClick={() => setShowForm(true)}>Add Course</button>
//       {showForm && (
//         <form className="course-form" onSubmit={handleFormSubmit}>
//           <label>
//             Name:
//             <input type="text" name="name" value={newCourse.name} onChange={handleInputChange} required />
//           </label>
//           <label>
//             Duration:
//             <input type="text" name="duration" value={newCourse.duration} onChange={handleInputChange} required />
//           </label>
//           <label>
//             Timings:
//             <input type="text" name="timings" value={newCourse.timings} onChange={handleInputChange} required />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//       {updateFormVisible && (
//         <div className="update-form">
//           <h2>Update Course</h2>
//           <form onSubmit={handleUpdateCourse}>
//             <label>
//               Name:
//               <input type="text" name="name" value={newCourse.name} onChange={handleInputChange} required />
//             </label>
//             <label>
//               Duration:
//               <input type="text" name="duration" value={newCourse.duration} onChange={handleInputChange} required />
//             </label>
//             <label>
//               Timings:
//               <input type="text" name="timings" value={newCourse.timings} onChange={handleInputChange} required />
//             </label>
//             <button type="submit">Update</button>
//           </form>
//         </div>
//       )}
//       <div className="course-list">
//         {courses.map(course => (
//           <div key={course.id} className="course-card">
//           <img src={dfimg} alt="Course Image" />

//             <h2>{course.name}</h2>
//             <p>Duration: {course.duration}</p>
//             <p>Timings: {course.timings}</p>
//             <button onClick={() => handleDeleteCourse(course.name)}>Delete</button>
//             <button onClick={() => handleUpdateFormOpen(course)}>Update</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminCourse;
/* AdminCourse.js */
//madhu
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import '../../assets/css/AdminCourse.css';
// import adminaca from '../../assets/olivefloral.png';
// import instance from '../../services/axios';
// import NavBar from './Navbar'; // Add NavBar import

// const dfimg = 'https://img.freepik.com/free-photo/beautiful-woman-meditating-outdoors_72229-1500.jpg';

// const AdminCourse = () => {
//   const { academyId } = useParams();
//   const [courses, setCourses] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [updateFormVisible, setUpdateFormVisible] = useState(false);
//   const [newCourse, setNewCourse] = useState({
//     name: '',
//     duration: '',
//     timings: '',
//     academyId: academyId
//   });

//   // State to hold the current course being updated
//   const [currentCourse, setCurrentCourse] = useState(null);

//   // State for the search term
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const token = sessionStorage.getItem('token');
//         if (!token) {
//           console.error('Token not found. Please log in again.');
//           return;
//         }
//         const response = await instance.get(`http://localhost:8181/course/academy/${academyId}`);
//         setCourses(response.data);
//       } catch (error) {
//         console.error('Error fetching course data:', error);
//       }
//     };

//     fetchCourses();
//   }, [academyId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCourse(prevCourse => ({
//       ...prevCourse,
//       [name]: value
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }
//       const response = await instance.post(`http://localhost:8181/course/${academyId}`, newCourse);
//       console.log('New course added:', response.data);
//       setNewCourse({
//         name: '',
//         duration: '',
//         timings: '',
//         academyId: academyId
//       });
//       setShowForm(false);
//       const updatedResponse = await instance.get(`http://localhost:8181/course/academy/${academyId}`);
//       setCourses(updatedResponse.data);
//     } catch (error) {
//       console.error('Error adding new course:', error);
//     }
//   };

//   const handleDeleteCourse = async (name) => {
//     try {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }
//       await instance.delete(`http://localhost:8181/course/${name}`);
//       console.log('Course deleted successfully!');
//       window.alert('Course deleted successfully!');
//       const updatedCourses = courses.filter(course => course.name !== name);
//       setCourses(updatedCourses);
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   const handleUpdateFormOpen = (course) => {
//     setCurrentCourse(course);
//     setNewCourse({
//       name: course.name,
//       duration: course.duration,
//       timings: course.timings,
//       academyId: academyId
//     });
//     setUpdateFormVisible(true);
//   };

//   const handleUpdateCourse = async () => {
//     try {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }
//       const response = await instance.put(`http://localhost:8181/course/${currentCourse.name}`, newCourse);
//       console.log('Course updated:', response.data);
//       window.alert('Course updated successfully!');
//       setUpdateFormVisible(false);
//       const updatedResponse = await instance.get(`http://localhost:8181/course/academy/${academyId}`);
//       setCourses(updatedResponse.data);
//     } catch (error) {
//       console.error('Error updating course:', error);
//     }
//   };

//   return (
//     <div style={{ backgroundImage: `url(${adminaca})`, backgroundSize: 'cover' }} className="course-details-container">
//     <div className="adminaca">
//     <NavBar />
//         <h1 className="course-heading">Course Details</h1>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search for a course"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <button className="upad" onClick={() => setShowForm(true)}>
//           Add Course
//         </button>
//         {showForm && (
//           <div className="form-modal">
//             <form className="course-form" onSubmit={handleFormSubmit}>
//               <label>
//                 Name:
//                 <input type="text" name="name" value={newCourse.name} onChange={handleInputChange} required />
//               </label>
//               <label>
//                 Duration:
//                 <input type="text" name="duration" value={newCourse.duration} onChange={handleInputChange} required />
//               </label>
//               <label>
//                 Timings:
//                 <input type="text" name="timings" value={newCourse.timings} onChange={handleInputChange} required />
//               </label>
//               <button className="formbu" type="submit">Submit</button>
//               <button className="formbu" type="button" onClick={() => setShowForm(false)}>
//                 Close
//               </button>
//             </form>
//           </div>
//         )}
//         {updateFormVisible && (
//           <div className="update-form">
//             <h2>Update Course</h2>
//             <form onSubmit={handleUpdateCourse}>
//               <label>
//                 Name:
//                 <input type="text" name="name" value={newCourse.name} onChange={handleInputChange} required />
//               </label>
//               <label>
//                 Duration:
//                 <input type="text" name="duration" value={newCourse.duration} onChange={handleInputChange} required />
//               </label>
//               <label>
//                 Timings:
//                 <input type="text" name="timings" value={newCourse.timings} onChange={handleInputChange} required />
//               </label>
//               <button className="formbu" type="submit">Update</button>
//               <button className="formbu" type="button" onClick={() => setUpdateFormVisible(false)}>
//                 Close
//               </button>
//             </form>
//           </div>
//         )}
        
//         <div className="course-list">
//           {courses.map(course => (
//             <div key={course.id} className="course-card">
//               <img src={dfimg} alt="Course Image" />
//               <h2>{course.name}</h2>
//               <p>Duration: {course.duration}</p>
//               <p>Timings: {course.timings}</p>
//               <button className="small-button delete" onClick={() => handleDeleteCourse(course.name)}>
//                 Delete
//               </button>
//               <button className="small-button update" onClick={() => handleUpdateFormOpen(course)}>
//                 Update
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminCourse;


// AdminCourse.js

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/css/AdminCourse.css';
import adminaca from '../../assets/olivefloral.png';
import instance from '../../services/axios';
import NavBar from './Navbar'; // Add NavBar import

const dfimg = 'https://img.freepik.com/free-photo/beautiful-woman-meditating-outdoors_72229-1500.jpg';

const AdminCourse = () => {
  const { academyId } = useParams();
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateFormVisible, setUpdateFormVisible] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: '',
    duration: '',
    timings: '',
    academyId: academyId
  });

  // State to hold the current course being updated
  const [currentCourse, setCurrentCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          console.error('Token not found. Please log in again.');
          return;
        }
        const response = await instance.get(`http://localhost:8181/course/academy/${academyId}`);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourses();
  }, [academyId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prevCourse => ({
      ...prevCourse,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }
      const response = await instance.post(`http://localhost:8181/course/${academyId}`, newCourse);
      console.log('New course added:', response.data);
      setNewCourse({
        name: '',
        duration: '',
        timings: '',
        academyId: academyId
      });
      setShowForm(false);
      const updatedResponse = await instance.get(`http://localhost:8181/course/academy/${academyId}`);
      setCourses(updatedResponse.data);
    } catch (error) {
      console.error('Error adding new course:', error);
    }
  };

  const handleDeleteCourse = async (name) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }
      await instance.delete(`http://localhost:8181/course/${name}`);
      console.log('Course deleted successfully!');
      window.alert('Course deleted successfully!');
      const updatedCourses = courses.filter(course => course.name !== name);
      setCourses(updatedCourses);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleUpdateFormOpen = (course) => {
    setCurrentCourse(course);
    setNewCourse({
      name: course.name,
      duration: course.duration,
      timings: course.timings,
      academyId: academyId
    });
    setUpdateFormVisible(true);
  };

  const handleUpdateCourse = async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }
      const response = await instance.put(`http://localhost:8181/course/${currentCourse.name}`, newCourse);
      console.log('Course updated:', response.data);
      window.alert('Course updated successfully!');
      setUpdateFormVisible(false);
      const updatedResponse = await instance.get(`http://localhost:8181/course/academy/${academyId}`);
      setCourses(updatedResponse.data);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${adminaca})`, backgroundSize: 'cover' }} className="course-details-container">
      <div className="adminaca">
        <NavBar />
        <h1 className="course-heading">Course Details</h1>
        
        <button className="upad" onClick={() => setShowForm(true)}>
          Add Course
        </button>
        {showForm && (
          <div className="form-modal">
            <form className="course-form" onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={newCourse.name} onChange={handleInputChange} required />
              </label>
              <label>
                Duration:
                <input type="text" name="duration" value={newCourse.duration} onChange={handleInputChange} required />
              </label>
              <label>
                Timings:
                <input type="text" name="timings" value={newCourse.timings} onChange={handleInputChange} required />
              </label>
             
              <button className="formbu" type="submit">Submit</button>
              <button className="formbu" type="button" onClick={() => setShowForm(false)}>
                Close
              </button>
            </form>
          </div>
        )}
        {updateFormVisible && (
          <div className="form-modal">
            <h2>Update Course</h2>
            <form onSubmit={handleUpdateCourse}>
              <label>
                Name:
                <input type="text" name="name" value={newCourse.name} onChange={handleInputChange} required />
              </label>
              <label>
                Duration:
                <input type="text" name="duration" value={newCourse.duration} onChange={handleInputChange} required />
              </label>
              <label>
                Timings:
                <input type="text" name="timings" value={newCourse.timings} onChange={handleInputChange} required />
              </label>
             
              <button className="formbu" type="submit">Update</button>
              <button className="formbu" type="button" onClick={() => setUpdateFormVisible(false)}>
                Close
              </button>
            </form>
          </div>
        )}
        <div className="course-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <img src={dfimg} alt="Course Image" />
              <h2>{course.name}</h2>
              <p>Duration: {course.duration}</p>
              <p>Timings: {course.timings}</p>
              <div className='del-up'>
              <button className="small-button delete" onClick={() => handleDeleteCourse(course.name)}>
                Delete
              </button>
              <button className="small-button update" onClick={() => handleUpdateFormOpen(course)}>
                Update
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCourse;
