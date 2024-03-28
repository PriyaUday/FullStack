// // import { useState } from 'react';
// // import adminaca from '../assets/schbg1.png';
// // import './Admintrainer.css';
// // import { Link } from 'react-router-dom';
// // const AdminTrainer = () => {
// //   const [showForm, setShowForm] = useState(false);
// //   const [trainerData, setTrainerData] = useState({
// //     id: '',
// //     name: '',
// //     phoneNumber: '',
// //     age: '',
// //     specialist: '', // Changed from input to select dropdown
// //   });
// //   const [formType, setFormType] = useState('add');

// //   const handleButtonClick = (type) => {
// //     setShowForm(true);
// //     setFormType(type);
// //   };

// //   const handleFormClose = () => {
// //     setShowForm(false);
// //     setTrainerData({
// //       id: '',
// //       name: '',
// //       phoneNumber: '',
// //       age: '',
// //       specialist: '',
// //     });
// //     setFormType('add');
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setTrainerData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleTrainerOperation = () => {
// //     // Perform operations based on formType
// //     if (formType === 'add') {
// //       console.log('Adding Trainer:', trainerData);
// //     } 
// //     handleFormClose();
// //   };

// //   return (
// //       <div>
// //       <div style={{ backgroundImage: `url(${adminaca})` }} className="adminaca">
       
// //         <h1 className="academic-heading">Trainer Details</h1>
// //         <button className="upad12" onClick={() => handleButtonClick('add')}>Add</button>
// //         <Link to="/viewenroll"> <button className="upview" >View Bookings</button></Link>
// //       </div>

// //       {showForm && (
// //         <div className="form-modal">
// //           <form>
// //             <label>
// //               Trainer ID:
// //               <input className="trainerdata"type="text" name="id" value={trainerData.id} onChange={handleInputChange} />
// //             </label>
            
// //             <label>
// //               Name:
// //               <input className="trainerdata"type="text" name="name" value={trainerData.name} onChange={handleInputChange} />
// //             </label>
         
// //             <label>
// //               Phone Number:
// //               <input className="trainerdata"type="text" name="phoneNumber" value={trainerData.phoneNumber} onChange={handleInputChange} />
// //             </label>
       
// //             <label>
// //               Age:
// //               <input className="trainerdata"type="text" name="age" value={trainerData.age} onChange={handleInputChange} />
// //             </label>
          
// //             <label>
// //               Specialist:
// //               <select className="trainerselect"name="specialist" value={trainerData.specialist} onChange={handleInputChange}>
// //                 <option value="">Select Specialist</option>
// //                 <option value="Flexibility">Flexibility</option>
// //                 <option value="Stress and Releif">Stress and Relief</option>
// //                 <option value="Strength">Strength</option>
// //                 <option value="Balance">Balance</option>
               
// //                 <option value="Minfulness">Mindfulness</option>
// //               </select>
// //             </label>
         
// //             <button className="formbu174" type="button" onClick={handleTrainerOperation}>
// //               {formType === 'add' ? 'Add' : formType === 'update' ? 'Update' : 'Delete'}
// //             </button>
// //             <button className="formbu174" type="button" onClick={handleFormClose}>
// //               Close
// //             </button>
// //           </form>
// //         </div>
// //       )}
      
// //     </div>
// //   );
// // };

// // export default AdminTrainer;


// import { useState } from 'react';
// // import axios from 'axios';
// import adminaca from '../../assets/schbg1.png';
// import '../../assets/css/Admintrainer.css';
// import { Link } from 'react-router-dom';
// import {addTrainer} from '../../services/auth'
// const AdminTrainer = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [trainerData, setTrainerData] = useState({
//     name: '',
//     mobile: '',
//     age: '',
//     specialist: '',
//   });
//   const [formType, setFormType] = useState('add');

//   const handleButtonClick = (type) => {
//     setShowForm(true);
//     setFormType(type);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setTrainerData({
//       name: '',
//       mobile: '',
//       age: '',
//       specialist: '',
//     });
//     setFormType('add');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTrainerData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleTrainerOperation = async (e) => {
//     e.preventDefault();
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await addTrainer(trainerData);
//       //  {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       // });

//       console.log('Trainer added:', response.data);
//       window.alert('Trainer added');
//       console.log(formType);
//     } catch (error) {
//       console.error('Error adding trainer:', error);
//       // Handle the error, e.g., show an error message
//     }

//     handleFormClose();
//   };

//   return (
//     <div>
//       <div style={{ backgroundImage: `url(${adminaca})` }} className="adminaca">
//         <h1 className="academic-heading">Trainer Details</h1>
//         <button className="upad12" onClick={() => handleButtonClick('add')}>Add</button>
//         <Link to="/viewenroll"><button className="upview">View Bookings</button></Link>
//       </div>

//       {showForm && (
//         <div className="form-modal">
//           <form onSubmit={handleTrainerOperation}>
//             <label>
//               Name:
//               <input className="trainerdata" type="text" name="name" value={trainerData.name} onChange={handleInputChange} />
//             </label>

//             <label>
//               Mobile:
//               <input className="trainerdata" type="text" name="mobile" value={trainerData.mobile} onChange={handleInputChange} />
//             </label>

//             <label>
//               Age:
//               <input className="trainerdata" type="text" name="age" value={trainerData.age} onChange={handleInputChange} />
//             </label>

//             <label>
//               Specialist:
//               <input className="trainerdata" type="text" name="specialist" value={trainerData.specialist} onChange={handleInputChange} />
//             </label>

//             <button className="formbu174" type="Submit" >
//              Add
//             </button>
//             <button className="formbu174" type="button" onClick={handleFormClose}>
//               Close
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminTrainer;

// AdminTrainer.jsx





// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import adminaca from '../../assets/schbg1.png';
// import '../../assets/css/Admintrainer.css';
// import instance from '../../services/axios';

// const AdminTrainer = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [trainerData, setTrainerData] = useState({
//     name: '',
//     mobile: '',
//     age: '',
//     specialist: '',
//   });
//   const [formType, setFormType] = useState('add');
//   const [trainers, setTrainers] = useState([]);

//   useEffect(() => {
//     fetchTrainers();
//   }, []); // Fetch trainers when the component mounts

//   const fetchTrainers = async () => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await instance.get(`http://localhost:8181/traineradd`,
//       //  {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       // }
//       );
//       console.log(formType);
//       console.log('Fetched trainers:', response.data);
//       setTrainers(response.data);
//     } catch (error) {
//       console.error('Fetching trainers failed:', error);
//       // Handle the error, e.g., show an error message
//     }
//   };

//   const handleButtonClick = (type) => {
//     setShowForm(true);
//     setFormType(type);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setTrainerData({
//       name: '',
//       mobile: '',
//       age: '',
//       specialist: '',
//     });
//     setFormType('add');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTrainerData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleTrainerOperation = async (e) => {
//     e.preventDefault();
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await instance.post(`http://localhost:8181/traineradd`, trainerData, {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });

//       console.log('Trainer added:', response.data);
//       window.alert('Trainer added');

//       // After adding a trainer, refresh the list
//       fetchTrainers();
//     } catch (error) {
//       console.error('Error adding trainer:', error);
//       // Handle the error, e.g., show an error message
//     }

//     handleFormClose();
//   };

//   return (
//     <div>
//       <div style={{ backgroundImage: `url(${adminaca})` }} className="adminaca">
//         <h1 className="academic-heading">Trainer Details</h1>
//         <button className="upad12" onClick={() => handleButtonClick('add')}>Add</button>
//         <Link to="/viewenroll"><button className="upview">View Bookings</button></Link>
//         <div className="trainers-list">
//           <h2>Trainers List</h2>
//           <table className='admintable'>
//             <thead>
//               <tr>
//                 <th style={{  backgroundColor: "#c3991c"
//                 }}>Name</th>
//                 <th style={{  backgroundColor: "#c3991c"
//               }}>Age</th>
//                 <th style={{  backgroundColor: "#c3991c"
//               }}>Mobile</th>
//                 <th style={{  backgroundColor: "#c3991c"
//               }}>Specialist</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trainers.map((trainer, index) => (
//                 <tr key={index}>
//                   <td>{trainer.name}</td>
//                   <td>{trainer.age}</td>
//                   <td>{trainer.mobile}</td>
//                   <td>{trainer.specialist}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {showForm && (
//         <div className="form-modal">
//           <form onSubmit={handleTrainerOperation}>
//             <label>
//               Name:
//               <input className="trainerdata" type="text" name="name" value={trainerData.name} onChange={handleInputChange} />
//             </label>

//             <label>
//               Mobile:
//               <input className="trainerdata" type="text" name="mobile" value={trainerData.mobile} onChange={handleInputChange} />
//             </label>

//             <label>
//               Age:
//               <input className="trainerdata" type="text" name="age" value={trainerData.age} onChange={handleInputChange} />
//             </label>

//             <label>
//               Specialist:
//               <input className="trainerdata" type="text" name="specialist" value={trainerData.specialist} onChange={handleInputChange} />
//             </label>

//             <button className="formbu174" type="Submit">
//               Add
//             </button>
//             <button className="formbu174" type="button" onClick={handleFormClose}>
//               Close
//             </button>
//           </form>
//         </div>
//       )}

      
//     </div>
//   );
// };

// export default AdminTrainer;


//nvn original

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import adminaca from '../../assets/schbg1.png';
// import '../../assets/css/Admintrainer.css';
// import instance from '../../services/axios';
// // import '../../assets/css/Admintrainer.css'
// const AdminTrainer = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [trainerData, setTrainerData] = useState({
//     name: '',
//     mobile: '',
//     age: '',
//     specialist: '',
//   });
//   const [formType, setFormType] = useState('add');
//   const [trainers, setTrainers] = useState([]);
//   const [filteredTrainers, setFilteredTrainers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchTrainers();
//   }, []); // Fetch trainers when the component mounts

//   const fetchTrainers = async () => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await instance.get(`http://localhost:8181/traineradd`);
//       console.log(formType);
//       console.log('Fetched trainers:', response.data);
//       setTrainers(response.data);
//       setFilteredTrainers(response.data);
//     } catch (error) {
//       console.error('Fetching trainers failed:', error);
//       // Handle the error, e.g., show an error message
//     }
//   };

//   const handleButtonClick = (type) => {
//     setShowForm(true);
//     setFormType(type);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setTrainerData({
//       name: '',
//       mobile: '',
//       age: '',
//       specialist: '',
//     });
//     setFormType('add');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTrainerData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setSearchTerm(searchTerm);

//     const filteredTrainers = trainers.filter((trainer) =>
//       trainer.name.toLowerCase().includes(searchTerm)
//     );

//     setFilteredTrainers(filteredTrainers);
//   };

//   const handleTrainerOperation = async (e) => {
//     e.preventDefault();
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }

//       const response = await instance.post(`http://localhost:8181/traineradd`, trainerData);

//       console.log('Trainer added:', response.data);
//       window.alert('Trainer added');

//       // After adding a trainer, refresh the list
//       fetchTrainers();
//     } catch (error) {
//       console.error('Error adding trainer:', error);
//       // Handle the error, e.g., show an error message
//     }

//     handleFormClose();
//   };

//   return (
//     <div>
//       <div style={{ backgroundImage: `url(${adminaca})` }} className="adminaca">
//         <h1 className="academic-heading">Trainer Details</h1>
       
//         <button className="upad12" onClick={() => handleButtonClick('add')}>Add</button>
       
//         <Link to="/viewenroll"><button className="upview">View Bookings</button></Link>
//         <br></br>
//         <br></br>
//         <div className='trbox'>
//         <div className="trainers-list">
//           <h2>Trainers List</h2>
//           <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//           <table className='admintable'>
//             <thead>
//               <tr>
//                 <th style={{ backgroundColor: "#c3991c" }}>Name</th>
//                 <th style={{ backgroundColor: "#c3991c" }}>Age</th>
//                 <th style={{ backgroundColor: "#c3991c" }}>Mobile</th>
//                 <th style={{ backgroundColor: "#c3991c" }}>Specialist</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTrainers.map((trainer, index) => (
//                 <tr key={index}>
//                   <td>{trainer.name}</td>
//                   <td>{trainer.age}</td>
//                   <td>{trainer.mobile}</td>
//                   <td>{trainer.specialist}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table></div>
//         </div>
//       </div>

//       {showForm && (
//         <div className="form-modal">
//           <form onSubmit={handleTrainerOperation}>
//             <label>
//               Name:
//               <input className="trainerdata" type="text" name="name" value={trainerData.name} onChange={handleInputChange} />
//             </label>

//             <label>
//               Mobile:
//               <input className="trainerdata" type="text" name="mobile" value={trainerData.mobile} onChange={handleInputChange} />
//             </label>

//             <label>
//               Age:
//               <input className="trainerdata" type="text" name="age" value={trainerData.age} onChange={handleInputChange} />
//             </label>

//             <label>
//               Specialist:
//               <input className="trainerdata" type="text" name="specialist" value={trainerData.specialist} onChange={handleInputChange} />
//             </label>

//             <button className="formbu174" type="Submit">
//               Add
//             </button>
//             <button className="formbu174" type="button" onClick={handleFormClose}>
//               Close
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminTrainer;


//afeter update delete

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Admintrainer.css';
import adminaca from '../../assets/schbg1.png';
import NavBar from './Navbar'
import instance from '../../services/axios';
// import '../../assets/css/Admintrainer.css'
const AdminTrainer = () => {
  const [showForm, setShowForm] = useState(false);
  const [trainerData, setTrainerData] = useState({
    name: '',
    mobile: '',
    age: '',
    specialist: '',
  });
  const [formType, setFormType] = useState('add');
  const [trainers, setTrainers] = useState([]);
  const [filteredTrainers, setFilteredTrainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTrainers();
  }, []); // Fetch trainers when the component mounts

  const fetchTrainers = async () => {
    try {
      const token = sessionStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      const response = await instance.get(`http://localhost:8181/traineradd`);
      console.log(formType);
      console.log('Fetched trainers:', response.data);
      setTrainers(response.data);
      setFilteredTrainers(response.data);
    } catch (error) {
      console.error('Fetching trainers failed:', error);
      // Handle the error, e.g., show an error message
    }
  };
  
  const handleButtonClick = (type, trainer = null) => {
    setShowForm(true);
    setFormType(type);

    if (type === 'update' && trainer) {
      setTrainerData({
        name: trainer.name,
        mobile: trainer.mobile,
        age: trainer.age,
        specialist: trainer.specialist,
      });
    }
  };

  const handleDeleteTrainer = async (trainerName) => {
    try {
      const token = sessionStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      await instance.delete(`http://localhost:8181/traineradd/${trainerName}`);
      window.alert('Trainer deleted');

      // After deleting a trainer, refresh the list
      fetchTrainers();
    } catch (error) {
      console.error('Error deleting trainer:', error);
      // Handle the error, e.g., show an error message
    }
  };

  const handleTrainerOperation = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      if (formType === 'add') {
        const response = await instance.post(`http://localhost:8181/traineradd`, trainerData);
        console.log('Trainer added:', response.data);
        window.alert('Trainer added');
      } else if (formType === 'update') {
        const response = await instance.put(`http://localhost:8181/traineradd/${trainerData.name}`, trainerData);
        console.log('Trainer updated:', response.data);
        window.alert('Trainer updated');
      }

      // After adding or updating a trainer, refresh the list
      fetchTrainers();
    } catch (error) {
      console.error('Error handling trainer operation:', error);
      // Handle the error, e.g., show an error message
    }

    handleFormClose();
  };
 

  const handleFormClose = () => {
    setShowForm(false);
    setTrainerData({
      name: '',
      mobile: '',
      age: '',
      specialist: '',
    });
    setFormType('add');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrainerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredTrainers = trainers.filter((trainer) =>
      trainer.name.toLowerCase().includes(searchTerm)
    );

    setFilteredTrainers(filteredTrainers);
  };

  

  return (
    <div>
    <div style={{ backgroundImage: `url(${adminaca})` }} className="adminaca">
    <NavBar/>

        <h1 className="academic-heading">Trainer Details</h1>
       
        <button className="upad12" onClick={() => handleButtonClick('add')}>Add</button>
       
        <Link to="/viewenroll"><button className="upview">View Bookings</button></Link>
        <br></br>
        <br></br>
        <div className='trbox'>
        <div className="trainers-list">
          <h2>Trainers List</h2>
          <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
          <table className='admintable'>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#c3991c" }}>Name</th>
                <th style={{ backgroundColor: "#c3991c" }}>Age</th>
                <th style={{ backgroundColor: "#c3991c" }}>Mobile</th>
                <th style={{ backgroundColor: "#c3991c" }}>Specialist</th>
                <th style={{ backgroundColor: "#c3991c" }}>Actions</th>

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
                      <button className="formbu174" onClick={() => handleButtonClick('update', trainer)}>
                        Update
                      </button>
                      <button className="formbu174" onClick={() => handleDeleteTrainer(trainer.name)}>
                        Delete
                      </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
      </div>

      {showForm && (
        <div className="form-modal">
          <form onSubmit={handleTrainerOperation}>
            <label>
              Name:
              <input className="trainerdata" type="text" name="name" value={trainerData.name} onChange={handleInputChange} />
            </label>

            <label>
              Mobile:
              <input className="trainerdata" type="text" name="mobile" value={trainerData.mobile} onChange={handleInputChange} />
            </label>

            <label>
              Age:
              <input className="trainerdata" type="text" name="age" value={trainerData.age} onChange={handleInputChange} />
            </label>

            <label>
              Specialist:
              <input className="trainerdata" type="text" name="specialist" value={trainerData.specialist} onChange={handleInputChange} />
            </label>

            <button className="formbu174" type="Submit">
              Add
            </button>
            <button className="formbu174" type="button" onClick={handleFormClose}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminTrainer;
