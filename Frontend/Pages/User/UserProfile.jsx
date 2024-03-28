// import { jwtDecode } from 'jwt-decode';
// import { useEffect, useState } from "react";
// import scheduleBackground from '../../assets/illu.jpg'; // Import the schedule background image
// import userIcon from '../../assets/user.png';

// function UserProfile() {
//   const [personalState, setPersonalState] = useState(true);
// console.log(setPersonalState);
// const [userEmail, setUserEmail] = useState('');

// useEffect(() => {
//   // Fetch user email from local storage
//   const storedToken = sessionStorage.getItem('token');
//   const decodedToken = parseJwt(storedToken);
// console.log(decodedToken);
//   // if (decodedToken && decodedToken.email) {
//     setUserEmail(decodedToken.sub);
  
// }, []);
// console.log(userEmail);
// const parseJwt = (token) => {
//   try {
//     return jwtDecode(token);
//   } catch (e) {
//     return null;
//   }
// };

//   return (
//     <div style={{ padding: "20px", backgroundImage: `url(${scheduleBackground})` }}>
//       <div>
//         <div style={{ backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "8px", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
//           <div style={{ marginBottom: "20px", textAlign: "center" }}>
//             {/* User icon */}
//             <img
//               src={userIcon} // Replace with the path to your user icon image
//               alt="User Icon"
//               style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "20px" }}
//             />
//           </div>
//           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
//             <p style={{ fontWeight: "bold", fontSize: "24px" }}>USER PROFILE</p>
//             <br/><br/><br/>
//           </div>
//           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
//             {personalState ? (
//               <>
//                 <div style={{ width: "45%", marginBottom: "20px" }}>
//                   <p><strong>Email:</strong> {userEmail}</p><br/>
//                   <p><strong>Mobile Number:</strong> 1234567890</p><br/>
//                 </div>
//                 <div style={{ width: "45%", marginBottom: "20px" }}>
//                   <p><strong>Age:</strong> 20</p><br/>
//                   <p><strong>Address:</strong> 123 Street, City, Country</p><br/>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div style={{ width: "45%", marginBottom: "20px" }}>
//                   <p><strong>Name:</strong> <input type="text" placeholder="Piyanga Packirisamy" /></p>
//                   <p><strong>Email:</strong> <input type="email" placeholder="priya09@gmail.com" /></p>
//                   <p><strong>DOB:</strong> <input type="text" placeholder="12/05/2004" /></p>
//                 </div>
//                 <div style={{ width: "45%", marginBottom: "20px" }}>
//                   <p><strong>Mobile Number:</strong> <input type="tel" placeholder="Enter your mobile number" /></p>
//                   <p><strong>Age:</strong> <input type="number" placeholder="Enter your age" /></p>
//                   <p><strong>Address:</strong> <input type="text" placeholder="Enter your address" /></p>
//                 </div>
//               </>
//             )}
//           </div>
//           {/* Separate table with inline CSS */}
//           <div style={{ marginTop: "20px" }}>
//             <p style={{ fontWeight: "bold", fontSize: "20px" }}>COURSE DETAILS</p><br/>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr style={{ borderBottom: "1px solid #ddd" }}>
//                   <th style={{ padding: "10px", textAlign: "left" }}>Course Name</th>
//                   <th style={{ padding: "10px", textAlign: "left" }}>Duration</th>
//                   <th style={{ padding: "10px", textAlign: "left" }}>Progress</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr style={{ borderBottom: "1px solid #ddd" }}>
//                   <td style={{ padding: "10px" }}>React Development</td>
//                   <td style={{ padding: "10px" }}>6 weeks</td>
//                   <td style={{ padding: "10px" }}>60%</td>
//                 </tr>
//                 {/* Add more rows as needed */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;

import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import homeicon from '../../assets/aro1.jpeg';
import scheduleBackground from '../../assets/illu.jpg';
import userIcon from '../../assets/user.png';
import { enrollStudents } from '../../services/auth';
function UserProfile() {
  const [personalState, setPersonalState] = useState(true);
  const [servicesData, setServicesData] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Fetch user email from local storage
    const storedToken = sessionStorage.getItem('token');
    const decodedToken = parseJwt(storedToken);

    // if (decodedToken && decodedToken.email) {
    setUserEmail(decodedToken.sub);
    fetchData();
    console.log(setPersonalState);
    // }
  }, []); // Fetch data when the component mounts

  const parseJwt = (token) => {
    try {
      return jwtDecode(token);
    } catch (e) {
      return null;
    }
  };

  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      const response = await enrollStudents();
      setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div style={{ padding: "20px", backgroundImage: `url(${scheduleBackground})` }}>
      <div>
      <Link to="/dashboard" >
      <img className="homeicon6" style={{ width: '55px', height: '55px' }} src={homeicon} alt="Home Icon" />
    </Link>
        <div style={{ backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "8px", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <img
              src={userIcon}
              alt="User Icon"
              style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "20px" }}
            />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <p style={{ fontWeight: "bold", fontSize: "24px" }}>USER PROFILE</p>
            <br/><br/><br/>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {/* Personal Details */}
            {personalState ? (
              <>
                <div style={{ width: "45%", marginBottom: "20px" }}>
                  {/* <p><strong>Name:</strong> Priya</p><br/> */}
                  <p><strong>Email:</strong>{userEmail}</p><br/>
                  <p><strong>DOB:</strong> 12/2/2003</p><br/>
                </div>
                <div style={{ width: "45%", marginBottom: "20px" }}>
                  <p><strong>Mobile Number:</strong> 1234567890</p><br/>
                  <p><strong>Age:</strong> 20</p><br/>
                  <p><strong>Address:</strong> 123 Street, City, Country</p><br/>
                </div>
              </>
            ) : (
              
              <>
                <div style={{ width: "45%", marginBottom: "20px" }}>
                  <p><strong>Name:</strong> <input type="text" placeholder="Piyanga Packirisamy" /></p>
                  <p><strong>Email:</strong> <input type="email" placeholder="priya09@gmail.com" /></p>
                  <p><strong>DOB:</strong> <input type="text" placeholder="12/05/2004" /></p>
                </div>
                <div style={{ width: "45%", marginBottom: "20px" }}>
                  <p><strong>Mobile Number:</strong> <input type="tel" placeholder="Enter your mobile number" /></p>
                  <p><strong>Age:</strong> <input type="number" placeholder="Enter your age" /></p>
                  <p><strong>Address:</strong> <input type="text" placeholder="Enter your address" /></p>
                </div>
              </>
            )}
          </div>
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>COURSE DETAILS</p><br/>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <th style={{ padding: "10px", textAlign: "left" }}>Course Name</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index}>
                    <td style={{ padding: "10px" }}>{service.courseName}</td>
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

export default UserProfile;