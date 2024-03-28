import { useState } from 'react';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        'http://localhost:8181/api/v1/auth/forgot_password',
        {
          email,
          currentPassword,
          newPassword,
          confirmPassword,
        }
      );

      if (response.status === 201 && response.data.success) {
        setSuccessMessage(response.data.message);
        setError('');
        window.location.href = '/login';
      } else {
        setSuccessMessage('');
        setError(response.data.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('');
      setError('An error occurred while resetting the password. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ width: '300px', textAlign: 'center' }} onSubmit={handleResetPassword}>
        <h2>Forgot Password</h2>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {/* <button type="submit">Reset Password</button> */}
        <button
  type="submit"
  style={{
    backgroundColor: '#756C05', // Green background color
    color: 'white',             // White text color
    padding: '10px 15px',       // Padding
    border: 'none',             // No border
    borderRadius: '5px',        // Rounded corners
    cursor: 'pointer',          // Cursor on hover
  }}
>
  Reset Password
</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
