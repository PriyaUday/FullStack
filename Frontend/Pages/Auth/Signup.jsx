// import { useState } from 'react';
// import aa from "../assets/aa.jpg"
// import './Signup.css'; // Import your CSS file
// import { Link } from 'react-router-dom';
// import './Login'
// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   // const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   // const [phoneNumberError, setPhoneNumberError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const handleSignup = () => {
//     // Implement your signup logic here
//     if (validateForm()) {
//       console.log('Signup clicked');
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;

//     // Validate email
//     if (!email) {
//       setEmailError('Email is required');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Invalid email address');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     // Validate username
//     if (!username) {
//       setUsernameError('Username is required');
//       isValid = false;
//     } else {
//       setUsernameError('');
//     }

//     // Validate phone number
//     // if (!phoneNumber) {
//     //     setPhoneNumberError('Phone number is required');
//     //     isValid = false;
//     //   } else if (!/^\d{10}$/.test(phoneNumber)) {
//     //     setPhoneNumberError('Invalid phone number. It should be 10 digits');
//     //     isValid = false;
//     //   } else {
//     //     setPhoneNumberError('');
//     //   }

//     // Validate password
//     if (!password) {
//       setPasswordError('Password is required');
//       isValid = false;
//     } else if (password.length < 6) {
//       setPasswordError('Password should be at least 6 characters');
//       isValid = false;
//     } 
//     else {
//       setPasswordError('');
//     }

//     if (!confirmPassword) {
//       setConfirmPasswordError('Confirm Password is required');
//       isValid = false;
//     } else if (confirmPassword !== password) {
//       setConfirmPasswordError('Passwords do not match');
//       isValid = false;
//     } else {
//       setConfirmPasswordError('');
//     }
    
//     return isValid;
// };

//   return (
//     <div className="signup-container12">
//       <div style={{ backgroundImage:`url(${aa})` }} className="side-image12"></div>
//       <div className="signup-form12">
//         <h2>Signup</h2>
//         <p className="sign-in-message12">Already a member?<Link to="/login">Log in.</Link></p>
//         <form>
//           <div className="form-group12">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <span className="error-message12">{emailError}</span>
//           </div>
//           <div className="form-group12">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <span className="error-message12">{usernameError}</span>
//           </div>
          
//           <div className="form-group12">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <span className="error-message12">{passwordError}</span>
//           </div>
//           <div className="form-group12">
//             <label htmlFor="confirmPassword">Confirm Password:</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <span className="error-message12">{confirmPasswordError}</span>
//           </div>
          
//           <button className="sc1"type="button" onClick={handleSignup}>
//             Signup
//           </button>
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;






// import { useState } from 'react';
// import aa from "../assets/aa.jpg"
// import './Signup.css'; // Import your CSS file
// import { Link } from 'react-router-dom';
// import './Login'
// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   // const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   // const [phoneNumberError, setPhoneNumberError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const handleSignup = () => {
//     // Implement your signup logic here
//     if (validateForm()) {
//       console.log('Signup clicked');
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;

//     // Validate email
//     if (!email) {
//       setEmailError('Email is required');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Invalid email address');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     // Validate username
//     if (!username) {
//       setUsernameError('Username is required');
//       isValid = false;
//     } else {
//       setUsernameError('');
//     }

//     // Validate phone number
//     // if (!phoneNumber) {
//     //     setPhoneNumberError('Phone number is required');
//     //     isValid = false;
//     //   } else if (!/^\d{10}$/.test(phoneNumber)) {
//     //     setPhoneNumberError('Invalid phone number. It should be 10 digits');
//     //     isValid = false;
//     //   } else {
//     //     setPhoneNumberError('');
//     //   }

//     // Validate password
//     if (!password) {
//       setPasswordError('Password is required');
//       isValid = false;
//     } else if (password.length < 6) {
//       setPasswordError('Password should be at least 6 characters');
//       isValid = false;
//     } 
//     else {
//       setPasswordError('');
//     }

//     if (!confirmPassword) {
//       setConfirmPasswordError('Confirm Password is required');
//       isValid = false;
//     } else if (confirmPassword !== password) {
//       setConfirmPasswordError('Passwords do not match');
//       isValid = false;
//     } else {
//       setConfirmPasswordError('');
//     }
    
//     return isValid;
// };

//   return (
//     <div className="signup-container12">
//       <div style={{ backgroundImage:`url(${aa})` }} className="side-image12"></div>
//       <div className="signup-form12">
//         <h2>Signup</h2>
//         <p className="sign-in-message12">Already a member?<Link to="/login">Log in.</Link></p>
//         <form>
//           <div className="form-group12">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <span className="error-message12">{emailError}</span>
//           </div>
//           <div className="form-group12">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <span className="error-message12">{usernameError}</span>
//           </div>
          
//           <div className="form-group12">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <span className="error-message12">{passwordError}</span>
//           </div>
//           <div className="form-group12">
//             <label htmlFor="confirmPassword">Confirm Password:</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <span className="error-message12">{confirmPasswordError}</span>
//           </div>
          
//           <button className="sc1"type="button" onClick={handleSignup}>
//             Signup
//           </button>
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;



























import { useState } from 'react';
import aa from "../../assets/aa.jpg"
import emailjs from 'emailjs-com';

// import axios from 'axios'
import '../../assets/css/Signup.css'; // Import your CSS file
import {useNavigate, Link } from 'react-router-dom';
import './Login'
import { signUp } from '../../services/auth';
const Signup = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  // const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSignup = async(e) => {
    e.preventDefault();
    // Implement your signup logic here
    const form = {
      name:name,
      email:email,
      password:password,
      confirmPassword:confirmPassword
    }
    if (validateForm()) {
      try{
        const response = await signUp(form);
       
        console.log(response.data);
        sendEmail();
        navigate('/Login');
      }
      catch (error) {
             // Handle other errors here
          console.error('Registration failed:', error);       
      }
    }
  };
  const sendEmail = async () => {
    try {
      await emailjs.send(
        'service_8yg5mos',
        'template_55ui98g',
        {
          name: name,
          email: email
        },
        '6Y92BhX30UZeL0sgl'
      );
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Email sending failed:', error);
    }
  };
  
  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate username
    if (!name) {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    // Validate phone number
    // if (!phoneNumber) {
    //     setPhoneNumberError('Phone number is required');
    //     isValid = false;
    //   } else if (!/^\d{10}$/.test(phoneNumber)) {
    //     setPhoneNumberError('Invalid phone number. It should be 10 digits');
    //     isValid = false;
    //   } else {
    //     setPhoneNumberError('');
    //   }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
      isValid = false;
    } 
    else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }
    
    return isValid;
};

  return (
    <div className="signup-container12">
      <div style={{ backgroundImage:`url(${aa})` }} className="side-image12"></div>
      <div className="signup-form12">
        <h2>Signup</h2>
        <p className="sign-in-message12">Already a member?<Link to="/login">Log in.</Link></p>
        <form onSubmit={handleSignup}>
          
          <div className="form-group12">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
       
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setname(e.target.value)}
              autoComplete='on'
              required
            />
            <span className="error-message12">{usernameError}</span>
          </div>
          <div className="form-group12">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='on'
              required
            />
            <span className="error-message12">{emailError}</span>
          </div>
          <div className="form-group12">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='on'
              required
            />
            <span className="error-message12">{passwordError}</span>
          </div>
          <div className="form-group12">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete='on'
              required
            />
            <span className="error-message12">{confirmPasswordError}</span>
          </div>
          
          <button className="sc1"type="submit" >
            Signup
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
