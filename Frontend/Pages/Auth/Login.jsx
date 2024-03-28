// import { useState } from 'react';
// import './Login.css'; // Import your CSS file
// import google from '../assets/Google.jpeg';
// import axios from 'axios'
// import facebook from '../assets/facebook.png';
// import { Link,useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const navigate=useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     validateForm(newEmail, password);
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     validateForm(email, newPassword);
//   };

//   const handleGoogleLogin = () => {
//     // Implement your Google login logic here
//     console.log('Login with Google clicked');
//   };

//   const handleFacebookLogin = () => {
//     // Implement your Facebook login logic here
//     console.log('Login with Facebook clicked');
//   };

//   const validateForm = (newEmail, newPassword) => {
//     // Example validation for email and password
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Basic email and password validation
//     const isEmailValid = emailRegex.test(newEmail);
//     const isPasswordValid = newPassword.length >= 6;

//     // Update the error messages
//     setEmailError(isEmailValid ? '' : 'Invalid email address');
//     setPasswordError(isPasswordValid ? '' : 'Password should be at least 6 characters');

//     // Update the button disabled state
//     setIsButtonDisabled(!(isEmailValid && isPasswordValid));
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
    
//     try{
//       const response=await axios.post('http://localhost:8080/api/v1/auth/login',{
//         "email":email,
//         "password":password
//       });
//       console.log(response.data);
//       localStorage.setItem('token',response.data.token)
      
//       navigate('/Dashboard');
//     }
//     catch(error){
//       console.error('Login failed',error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="side-image"></div>
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             <span className="error-message">{emailError}</span>
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <span className="error-message">{passwordError}</span>
//           </div>
         
//             <button className="sc1" type="submit" disabled={isButtonDisabled}>
//               Login
//             </button>
       
//           <p className="sign-in-message">
//             Dont have an account? <Link to="/signup">Sign in.</Link>
//           </p>
//           <div className="social-login">
//             <p>Or Login With:</p>
//             <br></br>
//             <div className="social-icons">
//               <button type="button" onClick={handleGoogleLogin}>
//                 <img src={google} alt="Google" />
//               </button>
//               <button type="button" onClick={handleFacebookLogin}>
//                 <img src={facebook} alt="Facebook" />
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import  { useState, useEffect } from 'react';
// import './Login.css';
// import google from '../assets/Google.jpeg';
// import facebook from '../assets/facebook.png';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

//   useEffect(() => {
//     validateForm(email, password);
//   }, [email, password]);

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//   };

//   const handleGoogleLogin = () => {
//     // Implement your Google login logic here
//     console.log('Login with Google clicked');
//   };

//   const handleFacebookLogin = () => {
//     // Implement your Facebook login logic here
//     console.log('Login with Facebook clicked');
//   };

//   const validateForm = (newEmail, newPassword) => {
//     // Example validation for email and password
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Basic email and password validation
//     const isEmailValid = emailRegex.test(newEmail);
//     const isPasswordValid = newPassword.length >= 6;

//     // Update the error messages
//     setEmailError(isEmailValid ? '' : 'Invalid email address');
//     setPasswordError(isPasswordValid ? '' : 'Password should be at least 6 characters');

//     // Update the button disabled state
//     setIsButtonDisabled(!(isEmailValid && isPasswordValid));
//   };

//   const parseJwt = (token) => {
//     try {
//       return jwtDecode(token);
//     } catch (e) {
//       return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/login', {
//         email,
//         password,
//       });

//       const token = response.data.token;
//       console.log('Decoded Token:', parseJwt(token)); // Add this line for debugging

//       localStorage.setItem('token', token);

//       // Use the decoded token to determine the user role
//       const decodedToken = parseJwt(token);

//       if (decodedToken.role === 'ADMIN') {
//         navigate('/Admindashboard');
//       } else if (decodedToken.role === 'USER') {
//         navigate('/Dashboard');
//       } else {
//         window.alert('Invalid role in token');
//       }
//     } catch (error) {
//       console.error('Login failed', error);
//       window.alert('Login Failed');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="side-image"></div>
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Email:</label>
//             <input
//               type="email"
//               id="username"
//               placeholder="Enter your email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             <span className="error-message">{emailError}</span>
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <span className="error-message">{passwordError}</span>
//           </div>

//           <button className="sc1" type="submit" disabled={isButtonDisabled}>
//             Login
//           </button>

//           <p className="sign-in-message">
//            Dont have an account? <Link to="/signup">Sign in.</Link>
//           </p>
//           <div className="social-login">
//             <p>Or Login With:</p>
//             <br></br>
//             <div className="social-icons">
//               <button type="button" onClick={handleGoogleLogin}>
//                 <img src={google} alt="Google" />
//               </button>
//               <button type="button" onClick={handleFacebookLogin}>
//                 <img src={facebook} alt="Facebook" />
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import { useState, useEffect } from 'react';
import '../../assets/css/Login.css'
// import google from '../../assets/Google.jpeg';
// import facebook from '../../assets/facebook.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthentication, setToken, setUser } from '../../redux/authSlice';
import { jwtDecode } from 'jwt-decode';
import { signIn } from '../../services/auth';
//  import sessionStorage from 'redux-persist/es/storage/session';

const LoginPage = () => {

  

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };
  useEffect(() => {
    validateForm(email, password);
  }, [email, password]);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  // const handleGoogleLogin = () => {
  //   // Implement your Google login logic here
  //   console.log('Login with Google clicked');
  // };

  // const handleFacebookLogin = () => {
  //   // Implement your Facebook login logic here
  //   console.log('Login with Facebook clicked');
  // };

  const validateForm = (newEmail, newPassword) => {
    // Example validation for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic email and password validation
    const isEmailValid = emailRegex.test(newEmail);
    const isPasswordValid = newPassword.length >= 6;

    // Update the error messages
    setEmailError(isEmailValid ? '' : 'Invalid email address');
    setPasswordError(isPasswordValid ? '' : 'Password should be at least 6 characters');

    // Update the button disabled state
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  const parseJwt = (token) => {
    try {
      return jwtDecode(token);
    } catch (e) {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signIn({
        email,
        password,
      });

      if (response?.data?.token) {
        const token = response.data.token;
        console.log('Decoded Token:', parseJwt(token)); // Add this line for debugging

          // sessionStorage.setItem('token', token);

        // Use the decoded token to determine the user role
        const decodedToken = parseJwt(token);

        if (decodedToken.role === 'ADMIN') {
          dispatch(setAuthentication(true));
          dispatch(setToken(token));
          dispatch(setUser(decodedToken.user));
          navigate('/admin/admindashboard');
        } else if (decodedToken.role === 'USER') {
          dispatch(setAuthentication(true));
          dispatch(setToken(token));
          dispatch(setUser(decodedToken.user));
          navigate('/user/dashboard');
        } else {
          window.alert('Invalid role in token');
        }

        // Clear input fields
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Login failed', error);
      window.alert('Login Failed');
    }
  };
  

  return (
    <div className="login-container">
      <div className="side-image"></div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              id="username"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <span className="error-message">{emailError}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="error-message">{passwordError}</span>
          </div>

          <button className="sc1" type="submit" disabled={isButtonDisabled}>
            Login
          </button>
<br></br>
          <p className="sign-in-message">
            Dont have an account? <Link to="/signup">Sign Up.</Link>
          </p>
          <br></br>
          <p className="forgot-password-link">
        <Link to="/forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </Link>
      </p>
         
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


