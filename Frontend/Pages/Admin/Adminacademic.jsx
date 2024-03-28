

// import { useState } from 'react';
// // import axios from 'axios'; // Import Axios
// import adminaca from '../../assets/olivefloral.png';
// import '../../assets/css/Adminacademic.css';
// import instance from '../../services/axios';
// import {createAcademy,deleteAcademy} from '../../services/auth';

// const Adminacademic = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [academyData, setAcademyData] = useState({
//     id: '',
//     name: '',
//     place: '',
//   });
 
//   const [formType, setFormType] = useState('add');

//   const handleButtonClick = (type) => {
//     setShowForm(true);
//     setFormType(type);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setAcademyData({
//       id: '',
//       name: '',
//       place: '',
//     });
//     setFormType('add');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAcademyData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleAcademyOperation = async (e) => {
//     e.preventDefault();
//     try {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         console.log('Token:', token); 
//         // Handle the absence of token, e.g., redirect to login page
//         return;
//       }

//       if (formType === 'add') {
//         const response = await createAcademy(academyData); 
//         // {
//         //   headers: {
//         //     Authorization: `Bearer ${token}`
//         //   }
//         // }
        
//         console.log('Academy added:', response.data);
//         window.alert('Academy added');
//       } else if (formType === 'update') {
//     //     const response = await updateAcademy(academyData,setNewData);
//     // console.log('Academy updated:', response);
//     // window.alert('Academy updated');
//     //   }
//         const response = await instance.put(`http://localhost:8181/academy/${academyData.name}`, academyData, 
//         // {
//         //   headers: {
//         //     Authorization: `Bearer ${token}`
//         //   }
//         // }
//         );
//         console.log('Academy updated:', response.data);
//         window.alert('Academy updated');
//       } 
//       else if (formType === 'delete') {
//         const response = await deleteAcademy(academyData.name);
//         //   headers: {
//         //     Authorization: `Bearer ${token}`
//         //   }
//         // }
        
//         console.log('Academy deleted:', response.data);
//         window.alert('Academy deleted');
//       }

//       handleFormClose();
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle the error, e.g., show an error message
//     }
//   };

//   return (
//     <div>
//       <div style={{ backgroundImage: `url(${adminaca})` }} className="adminaca">
//         <h1 className="academic-heading">Academic Details</h1>
//         <button className="upad" onClick={() => handleButtonClick('add')}>Add</button>
//         <button className="upup" onClick={() => handleButtonClick('update')}>Update</button>
//         <button className="upde" onClick={() => handleButtonClick('delete')}>Delete</button>
//       </div>

//       {showForm && (
//         <div className="form-modal">
//           <form>
//             <label>
//               Academy ID:
//               <input type="text" name="id" value={academyData.id} onChange={handleInputChange} />
//             </label>
//             <label>
//                   Name:
//                   <input type="text" name="name" value={academyData.name} onChange={handleInputChange} />
//                 </label>
//             <br />
//             {formType !== 'delete' && (
//               <>
              
//                 <br />
//                 <label>
//                   Place:
//                   <input type="text" name="place" value={academyData.place} onChange={handleInputChange} />
//                 </label>
//                 <br />
//               </>
//             )}
//             <button className="formbu" type="button" onClick={handleAcademyOperation}>
//               {formType === 'add' ? 'Add' : formType === 'update' ? 'Update' : 'Delete'}
//             </button>
//             <button className="formbu" type="button" onClick={handleFormClose}>
//               Close
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Adminacademic;


// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import instance from '../../services/axios';
// import adminaca from '../../assets/olivefloral.png';
// import '../../assets/css/Adminacademic.css';
// const dfimg = 'https://img.freepik.com/free-photo/beautiful-woman-meditating-outdoors_72229-1500.jpg';

// const Adminacademic = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [academies, setAcademies] = useState([]);
//   const [academyData, setAcademyData] = useState({
//     id: '',
//     name: '',
//     place: '',
//   });
//   const [formType, setFormType] = useState('add');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = sessionStorage.getItem('token');
//         const response = await axios.get(`http://localhost:8181/academy`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log('API Response:', response);

//         setAcademies(response.data);
//       } catch (error) {
//         console.error('Error fetching academy data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleButtonClick = (type, academy) => {
//     if (type === 'delete') {
//       const confirmDelete = window.confirm('Are you sure you want to delete this academy?');
//       if (confirmDelete) {
//         handleAcademyOperation(type, academy);
//       }
//     } else {
//       setShowForm(true);
//       setFormType(type);
//       if (type === 'update') {
//         setAcademyData({
//           id: academy.id,
//           name: academy.name,
//           place: academy.place,
//         });
//       }
//     }
//   };

//   const handleUpdateButtonClick = (academy) => {
//     handleButtonClick('update', academy);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setAcademyData({
//       id: '',
//       name: '',
//       place: '',
//     });
//     setFormType('add');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAcademyData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleAcademyOperation = async (type, academy) => {
//     try {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }

//       if (type === 'add') {
//         const response = await axios.post(`http://localhost:8181/academy`, academyData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log('Academy added:', response.data);
//         window.alert('Academy added');
//       } else if (type === 'update') {
//         const response = await instance.put(`http://localhost:8181/academy/${academyData.name}`, academyData, 
//                   {
//                    headers: {
//                      Authorization: `Bearer ${token}`
//                     }
//                   }
//                );
//                 console.log('Academy updated:', response.data);
//                 window.alert('Academy updated');
//                } 
//        else if (type === 'delete') {
//         const response = await axios.delete(`http://localhost:8181/academy/${academy.name}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log('Academy deleted:', response.data);
//         window.alert('Academy deleted');
//       }

//       handleFormClose();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={{ backgroundImage: `url(${adminaca})`, backgroundSize: 'cover' }}>
//       <div className="adminaca">
//         <h1 className="academic-heading">Academic Details</h1>
        
//         <button className="upad" onClick={() => handleButtonClick('add')}>
//           Add
//         </button>
//         <div style={{ backgroundImage: `url(${adminaca})`, backgroundSize: 'cover' }} className="about-me">
//           {academies.map((academy) => (
//             <div key={academy.id} className="event">
//               <img src={dfimg} alt={academy.name} />
//               <p className="p1">Academy Id: {academy.id}</p>
//               <p className="p1">{academy.name}</p>
//               <p className="p2">Place: {academy.place}</p>
//               <div className="update-delete-buttons">
//                 <button className="small-button" onClick={() => handleUpdateButtonClick(academy)}>
//                   Update
//                 </button>
//                 <button className="small-button" onClick={() => handleButtonClick('delete', academy)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {showForm && (
//         <div className={`form-modal ${formType}`}>
//           <form>
//             {formType !== 'add' && (
//               <>
//                 <label>
//                   Academy ID:
//                   <input type="text" name="id" value={academyData.id} readOnly />
//                 </label>
//                 <br />
//               </>
//             )}
//             <label>
//               Name:
//               <input type="text" name="name" value={academyData.name} onChange={handleInputChange} />
//             </label>
//             <br />
//             {formType !== 'delete' && (
//               <>
//                 <br />
//                 <label>
//                   Place:
//                   <input type="text" name="place" value={academyData.place} onChange={handleInputChange} />
//                 </label>
//                 <br />
//               </>
//             )}
//             <button className="formbu" type="button" onClick={() => handleAcademyOperation(formType)}>
//               {formType === 'add' ? 'Add' : formType === 'update' ? 'Update' : 'Delete'}
//             </button>
//             <button className="formbu" type="button" onClick={handleFormClose}>
//               Close
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Adminacademic;



import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../assets/css/Adminacademic.css';
import adminaca from '../../assets/olivefloral.png';
import instance from '../../services/axios';
import NavBar from './Navbar';
const dfimg = 'https://img.freepik.com/free-photo/beautiful-woman-meditating-outdoors_72229-1500.jpg';

const Adminacademic = () => {
  const [showForm, setShowForm] = useState(false);
  const [academies, setAcademies] = useState([]);
  const [filteredAcademies, setFilteredAcademies] = useState([]);
  const [academyData, setAcademyData] = useState({
    id: '',
    name: '',
    place: '',
  });
  const [formType, setFormType] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`http://localhost:8181/academy`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        console.log('API Response:', response);

        setAcademies(response.data);
        setFilteredAcademies(response.data);
      } catch (error) {
        console.error('Error fetching academy data:', error);
      }
    };
   

    fetchData();
  }, []);

  const handleButtonClick = (type, academy) => {
    if (type === 'delete') {
      const confirmDelete = window.confirm('Are you sure you want to delete this academy?');
      if (confirmDelete) {
        handleAcademyOperation(type, academy);
      }
    } else {
      setShowForm(true);
      setFormType(type);
      if (type === 'update') {
        setAcademyData({
          id: academy.id,
          name: academy.name,
          place: academy.place,
          imageUrl:academy.imageUrl
        });
      }
    }
  };

  const handleUpdateButtonClick = (academy) => {
    handleButtonClick('update', academy);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setAcademyData({
      id: '',
      name: '',
      place: '',
      imgUrl:''
    });
    setFormType('add');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAcademyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredAcademies = academies.filter((academy) =>
      academy.name.toLowerCase().includes(searchTerm)
    );

    setFilteredAcademies(filteredAcademies);
  };

  const handleAcademyOperation = async (type, academy) => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      if (type === 'add') {
        const response = await axios.post(
          `http://localhost:8181/academy`,
          academyData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('Academy added:', response.data);
        window.alert('Academy added');
        window.location.reload();
      } else if (type === 'update') {
        const response = await instance.put(
          `http://localhost:8181/academy/${academyData.id}`,
          academyData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('Academy updated:', response.data);
        window.alert('Academy updated');
        window.location.reload();
      } else if (type === 'delete') {
        const response = await axios.delete(`http://localhost:8181/academy/${academy.name}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Academy deleted:', response.data);
        window.alert('Academy deleted');
        window.location.reload();
      }

      handleFormClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <div style={{ backgroundImage: `url(${adminaca})`, backgroundSize: 'cover' }}>
    <NavBar/>
    <div className="adminaca">
    <div>
    <h1 className="academic-heading">Academic Details</h1>
    </div>
        <input
        className='search'
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="upad" onClick={() => handleButtonClick('add')}>
          Add
        </button>
        <div className="about-me">
          {filteredAcademies.map((academy) => (
            <div key={academy.id} className="event">
          { /*<img src={dfimg} alt={academy.name} /> */}
          <img src={academy.imageUrl || dfimg} alt={academy.name} />

              <p className="p1">{academy.name}</p>
              <p className="p2">Place  : {academy.place}</p>
            <div className='update-delete-buttons'>
              <button className={`small-button ${formType === 'update' ? 'update' : ''}`} onClick={() => handleUpdateButtonClick(academy)}>
  Update
</button>
<button className={`small-button delete`} onClick={() => handleButtonClick('delete', academy)}>
  Delete
</button>

<button className="small-button add-course" onClick={() => window.location.href = `/course/${academy.id}`}>
Add Course
</button>
             </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className={`form-modal ${formType}`}>
          <form>
            {formType !== 'add' && formType !== 'update' && (
              <>
                <label>
                  Academy ID:
                  <input type="text" name="id" value={academyData.id} readOnly />
                </label>
                <br />
              </>
            )}
            <label>
            Name:
            <input type="text" name="name" value={academyData.name} onChange={handleInputChange} />
            </label>
            <label>
            Image URL:
            <input type="text" name="imageUrl" value={academyData.imageUrl} onChange={handleInputChange} />
          </label>
            
            {formType !== 'delete' && (
              <>
                <br />
                <label>
                  Place:
                  <input type="text" name="place" value={academyData.place} onChange={handleInputChange} />
                </label>
                <br />
              </>
            )}
            <button className="formbu" type="button" onClick={() => handleAcademyOperation(formType)}>
              {formType === 'add' ? 'Add' : formType === 'update' ? 'Update' : 'Delete'}
            </button>
            <button className="formbu" type="button" onClick={handleFormClose}>
              Close
            </button>
          </form>
        </div>
      )}
    </div></div>
  );
};

export default Adminacademic;
