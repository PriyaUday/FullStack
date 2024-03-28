// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Toolbar from '@mui/material/Toolbar';
// import { useState } from 'react';
// import Sidebar from './Sidebar'; // Import the Sidebar component

// export default function Navbar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <Box sx={{ flexGrow: 1  }}>
//       <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}> {/* Set background to transparent */}
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2, color: '#6f4e37' }} // Set color to coffee brown
//             onClick={toggleSidebar} // Toggle sidebar when the menu icon is clicked
//           >
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Sidebar isOpen={isSidebarOpen} /> {/* Pass the state of Sidebar visibility */}
//     </Box>
//   );
// }

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, Menu, MenuItem } from '@mui/material'; // Import Menu and MenuItem from Material-UI
import '../../assets/css/Nav.css';
import SideBar from './Sidebar';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const navigate=useNavigate();
    const [anchorEl, setAnchorEl] = useState(null); // State to manage anchor element for Menu

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handleClickAvatar = (event) => {
        setAnchorEl(event.currentTarget); // Set anchor element for Menu
    };

    const handleCloseMenu = () => {
        setAnchorEl(null); // Close the Menu
    };

    return (
        <div>
            <nav className={`navbar ${showNavbar && 'active'}`}>
                <div className="container">
                    {/* Sidebar component */}
                    <div className='sidenav'>
                    <SideBar />
                    </div>
                   </div>
            </nav>
        </div>
    );
};

export default Navbar;