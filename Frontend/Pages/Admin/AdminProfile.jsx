// import axios from 'axios';
import { useEffect, useState } from "react";
import userIcon from '../../assets/admin.png';
import scheduleBackground from '../../assets/illu.jpg'; // Import the schedule background image
import instance from '../../services/axios';
import Navbar from './Navbar'; // Import the Navbar component
function AdminProfile() {
  const [personalState, setPersonalState] = useState(true);
  const [contactFormData, setContactFormData] = useState([]);

  useEffect(() => {
    const fetchContactFormData = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          console.error('Token not found. Please log in again.');
          return;
        }
        const response = await instance.get('http://localhost:8181/contact', {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        });
        setContactFormData(response.data);
        console.log(setPersonalState);
      } catch (error) {
        console.error('Error fetching contact form data:', error);
      }
    };

    fetchContactFormData();
  }, []);

  return (
    <div style={{ padding: "20px", backgroundImage: `url(${scheduleBackground})` }}>
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <div style={{ backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "8px", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            {/* User icon */}
            <img
              src={userIcon} // Replace with the path to your user icon image
              alt="User Icon"
              style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "20px" }}
            />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <p style={{ fontWeight: "bold", fontSize: "24px" }}>ADMIN PROFILE</p>
            <br/><br/><br/>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {personalState ? (
              <>
                <div style={{ width: "45%", marginBottom: "20px" }}>
                  <p><strong>Name:</strong> Admin</p><br/>
                  <p><strong>Email:</strong> admin@gmail.com</p><br/>
                  <p><strong>DOB:</strong> 01/01/1990</p><br/>
                </div>
                <div style={{ width: "45%", marginBottom: "20px" }}>
                  <p><strong>Mobile Number:</strong> 1234567890</p><br/>
                  <p><strong>Age:</strong> 30</p><br/>
                  <p><strong>Address:</strong> 456 Street, Admin City, Admin Country</p><br/>
                </div>
              </>
            ) : (
              <>
                <div style={{ width: "45%", marginBottom: "20px" }}>
                  <p><strong>Name:</strong> <input type="text" placeholder="Admin Name" /></p>
                  <p><strong>Email:</strong> <input type="email" placeholder="admin@example.com" /></p>
                  <p><strong>DOB:</strong> <input type="text" placeholder="01/01/1990" /></p>
                </div>
                <div style={{ width: "45%", marginBottom: "20px" }}>
                  <p><strong>Mobile Number:</strong> <input type="tel" placeholder="Enter your mobile number" /></p>
                  <p><strong>Age:</strong> <input type="number" placeholder="Enter your age" /></p>
                  <p><strong>Address:</strong> <input type="text" placeholder="Enter your address" /></p>
                </div>
              </>
            )}
          </div>

          {/* Display Contact Form Data */}
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>CONTACT FORM DATA (REVIEWS)</p><br/>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Message</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Rating</th>
                </tr>
              </thead>
              <tbody>
                {contactFormData.map((review, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "10px" }}>{review.name}</td>
                    <td style={{ padding: "10px" }}>{review.email}</td>
                    <td style={{ padding: "10px" }}>{review.message}</td>
                    <td style={{ padding: "10px" }}>{review.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;