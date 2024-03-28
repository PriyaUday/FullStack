import { useState } from 'react';
import '../assets/css/Adminlogin.css'; // Import your CSS file
import google from '../assets/Google.jpeg';
import facebook from '../assets/facebook.png';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const handleGoogleLogin = () => {
    // Implement your Google login logic here
    console.log('Login with Google clicked');
  };

  const handleFacebookLogin = () => {
    // Implement your Facebook login logic here
    console.log('Login with Facebook clicked');
  };

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/login',{
        email,
        password
      });
      console.log(response.data);
      if(email==='admin@gmail.com' && password==='admin@123' ){
        localStorage.setItem('token',response.data.token)
        navigate('/Admindashboard');
      }
      else{
        window.alert("Invalid credentials");
      }
    }
    catch(error){
      console.error('Login failed',error);
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
        
        
          <div className="social-login">
            <p>Or Login With:</p>
            <br></br>
            <div className="social-icons">
              <button type="button" onClick={handleGoogleLogin}>
                <img src={google} alt="Google" />
              </button>
              <button type="button" onClick={handleFacebookLogin}>
                <img src={facebook} alt="Facebook" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
