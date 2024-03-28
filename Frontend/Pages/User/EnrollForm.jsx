
// import './EnrollForm.css'
// import { Link } from 'react-router-dom';
// import homeicon from '../assets/home.png'
// const Apply = () => {
//   const handleenroll=()=>{
//       alert("Sucessfully enrolled");
//   };
//   return (
//     <div className='apply261'>
//         <Link to="/dashboard"><img className="homeiconen" src={homeicon}></img></Link>
//          <section className="container261">
//       <header className='hede'>Enrollment Form</header>
//       <form action="#" className="form261">
//         <div className="input-box261">
//           <label>Full Name</label>
//           <input type="text" placeholder="Enter full name" required />
//         </div>

//         <div className="input-box261">
//           <label>Email Address</label>
//           <input type="text" placeholder="Enter email address" required />
//         </div>

//         <div className="column261">
//           <div className="input-box261">
//             <label>Phone Number</label>
//             <input type="number" placeholder="Enter phone number" required />
//           </div>
//           <div className="input-box261">
//             <label>Birth Date</label>
//             <input type="date" placeholder="Enter birth date" required />
//           </div>
//         </div>
//         <div className="gender-box261">
//           <h3>Gender</h3>
//           <div className="gender-option261">
//   <div className="gender261">
//     <label htmlFor="check-male">
//       <input type="radio" id="check-male" name="gender" defaultChecked />
//       Male
//     </label>
//     <label htmlFor="check-female">
//       <input type="radio" id="check-female" name="gender" />
//       Female
//     </label>
//   </div>
// </div>

//         </div>
//         <div className="input-box261 address261">
//           <label>Address</label>
//           <input type="text" placeholder="Enter street address" required />
       
//           <div className="column261">
//             <input type="text" placeholder="Enter your city" required />
//           </div>
//           <div className="column261">
//             <input type="text" placeholder="Enter your region" required />
//             <input type="number" placeholder="Enter postal code" required />
//           </div>
//         </div>
//         <br></br>
//         <button onClick={handleenroll}className='buttonenroll'>Enroll</button>
//       </form>
//     </section>
//     </div>
//   )
// }

// export default Apply





import { useState } from 'react';
// import axios from 'axios';
import {enrollStudent} from '../../services/auth'
import '../../assets/css/EnrollForm.css';
import { Link } from 'react-router-dom';
import homeicon from '../../assets/aro1.jpeg';
import { useParams } from 'react-router-dom';

const Apply = () => {
  const { courseId } = useParams();
   const { courseName } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    date: '',
    gender: 'Male', // Default value
    address: '',
    city: '',
    region: '',
    postal: '',
    courseName: courseName,

  });

  const handleEnroll = async () => {
    try {
      const token = sessionStorage.getItem('token');
      console.log('Token:', token); // Log the token to verify its value

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await enrollStudent(formData,courseId);
      //  {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // });
      console.log('Enrolled successfully:', response.data);
      // Handle the response data as needed, e.g., show a success message

      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        mobile: '',
        date: '',
        gender: 'Male', // Reset to default value
        address: '',
        city: '',
        region: '',
        postal: '',
        courseName: courseName,

      });
    } catch (error) {
      console.error('Enrollment failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className='apply261'>
    <Link to="/dashboard">
      <img className="homeiconen" src={homeicon} alt="Home Icon" />
    </Link>
    <section className="container261">
        <header className='hede'>Enrollment Form</header>
        <form onSubmit={handleEnroll} className="form261">
          <div className="input-box261">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="input-box261">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="column261">
            <div className="input-box261">
              <label>Phone Number</label>
              <input type="number" placeholder="Enter phone number" required value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
            </div>
            <div className="input-box261">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            </div>
          </div>
          <div className="gender-box261">
            <h3>Gender</h3>
            <div className="gender-option261">
              <div className="gender261">
                <label htmlFor="check-male">
                  <input type="radio" id="check-male" name="gender" defaultChecked={formData.gender === 'Male'} onChange={() => setFormData({ ...formData, gender: 'Male' })} />
                  Male
                </label>
                <label htmlFor="check-female">
                  <input type="radio" id="check-female" name="gender" defaultChecked={formData.gender === 'Female'} onChange={() => setFormData({ ...formData, gender: 'Female' })} />
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="input-box261 address261">
            <label>Address</label>
            <input type="text" placeholder="Enter street address" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            <div className="column261">
              <input type="text" placeholder="Enter your city" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
            </div>
            <div className="column261">
              <input type="text" placeholder="Enter your region" required value={formData.region} onChange={(e) => setFormData({ ...formData, region: e.target.value })} />
              <input type="text" placeholder="Enter postal code" required value={formData.postal} onChange={(e) => setFormData({ ...formData, postal: e.target.value })} />
            </div>
          </div>
          <br />
          <div className="input-box261">
          <label>Course Name</label>
          <input
            type="text"
            placeholder="Enter course name"
            required
            value={formData.courseName}
            readOnly
          />
        </div>
        <br />
          <button type="submit" className='buttonenroll'>Enroll</button>
        </form>
      </section>
    </div>
  );
};

export default Apply;
