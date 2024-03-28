
// import './TrainerForm.css'
// import homeicon from '../assets/home.png'
// import { Link } from 'react-router-dom'
// import formbg from '../assets/bluefloral.jpg'
// const ApplyTrain = () => {
//   const handleenrolltran=()=>{
//       alert("You have booked your trainer!!!");
//   };
//   const goals = ["Flexibility", "Strength", "Mindfulness", "Balance", "Stress Relief"];
//   return (
//     <div  style={{backgroundImage:`url(${formbg})`}} className='apply2617'>
//           <Link to="/dashboard"><img className="homeiconfor" src={homeicon}></img></Link>
//          <section className="container2617">
//       <header className='hede7'>Book Your Personal Trainer</header>
//       <form action="#" className="form2617">
//         <div className="input-box2617">
//           <label>Name</label>
//           <input type="text" placeholder="Enter full name" required />
//         </div>

//         <div className="input-box2617">
//           <label>Email</label>
//           <input type="text" placeholder="Enter email address" required />
//         </div>

       
//           <div className="input-box2617">
//             <label>Mobile Number</label>
//             <input type="number" placeholder="Enter phone number" required />
//           </div>    
        
//         <div className="input-box2617">
//           <label>Trainer Name</label>
//           <input type="text" placeholder="Enter Trainer Name" required />
//         </div>
//         <div className="input-box2617">
//           <label>Your goal</label>
//           <select className='select-box7'required>
//             <option value="" disabled selected>Select your goal</option>
//             {goals.map((goal, index) => (
//               <option key={index} value={goal}>{goal}</option>
//             ))}
//           </select>
//         </div>
   
//         <br></br>
//         <button onClick={handleenrolltran}className='buttonenroll7'>Enroll</button>
//       </form>
//     </section>
//     </div>
//   )
// }

// export default ApplyTrain





import { useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import formbg from '../../assets/bluefloral.jpg';
import '../../assets/css/TrainerForm.css';
import homeicon from '../../assets/aro1.jpeg';
import { postTrainer } from '../../services/auth';

const ApplyTrain = () => {
  const trainerNameFromURL = window.location.search.split('=')[1] || '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    trainer: trainerNameFromURL, // Pre-fill the trainer name
    goal: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEnrollTran = async () => {
    try {
      const token = sessionStorage.getItem('token');
      console.log('Token:', token); // Log the token to verify its value

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await postTrainer(formData);
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // });
      console.log('Enrolled trainer:', response.data);
      window.alert('Trainer enrolled');
      // Handle the response data as needed, e.g., show a success message

      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        mobile: '',
        trainer: trainerNameFromURL, // Preserve the trainer name from URL
        goal: '',
      });

      // Set submission status to true
      setIsSubmitted(true);
    } catch (error) {
      console.error('Enrolling trainer failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  const goals = ["Flexibility", "Strength", "Mindfulness", "Balance", "Stress Relief"];

  return (
    <div style={{ backgroundImage:`url(${formbg})` }} className='apply2617'>
    <Link to="/dashboard">
      <img className="homeiconfor" src={homeicon} alt="Home Icon" />
    </Link>
    <section className="container2617">
        <header className='hede7'>Book Your Personal Trainer</header>
        <form onSubmit={handleEnrollTran}className="form2617">
          <div className="input-box2617">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter full name" required onChange={handleChange} />
          </div>
          <div className="input-box2617">
            <label>Email</label>
            <input type="text" name="email" placeholder="Enter email address" required onChange={handleChange} />
          </div>
          <div className="input-box2617">
            <label>Mobile Number</label>
            <input type="number" name="mobile" placeholder="Enter phone number" required onChange={handleChange} />
          </div>
          <div className="input-box2617">
            <label>Trainer Name</label>
            <input type="text" name="trainer" placeholder="Enter Trainer Name" required onChange={handleChange}  value={formData.trainer}
            readOnly/>
          </div>
          <div className="input-box2617">
            <label>Your goal</label>
            <select className='select-box7' name="goal" required onChange={handleChange}>
              <option value="" disabled selected>Select your goal</option>
              {goals.map((goal, index) => (
                <option key={index} value={goal}>{goal}</option>
              ))}
            </select>
          </div>
          <br />
          {/* Conditional rendering of the button based on submission status */}
          {isSubmitted ? (
            <button type="button" disabled>Enrolled</button>
          ) : (
            <button  type="submit" className='buttonenroll7'>Enroll</button>
          )}
        </form>
      </section>
    </div>
  );
}

export default ApplyTrain;
