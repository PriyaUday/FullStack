// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// const Sidebar = ({ isOpen }) => {
//   const styles = {
//     sidebar: {
//       width: '250px',
//       height: '100%',
//       backgroundColor: 'rgba(75, 54, 33, 0.7)',
//       position: 'fixed',
//       top: 0,
//       left: isOpen ? 0 : '-250px',
//       transition: 'left 0.3s ease',
//       zIndex: 1000
//     },
//     ul: {
//       listStyleType: 'none',
//       padding: 0,
//       margin: 0,
//       textAlign: 'center'
//     },
//     li: {
//       padding: '20px 0',
//       cursor: 'pointer'
//     },
//     link: {
//       textDecoration: 'none',
//       color: '#fff',
//       fontSize: '18px',
//       display: 'block',
//       padding: '10px',
//       transition: 'background-color 0.3s ease'
//     },
//     linkHover: {
//       backgroundColor: '#555'
//     }
//   };

//   return (
//     <div style={styles.sidebar}>
//       <ul style={styles.ul}>
//         <li style={styles.li}><Link to="/adminacademic" style={styles.link}>Academy</Link></li>
//         <li style={styles.li}><Link to="/admintrainer" style={styles.link}>Trainers</Link></li>
//         <li style={styles.li}><Link to="/userview" style={styles.link}>Users</Link></li>
//       </ul>
//     </div>
//   );
// };

// Sidebar.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
// };

// export default Sidebar;
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';


export default function SideBar() {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    sx={{ width: 250, height: '100vh', overflowY: 'auto' }} // Set height to 100vh
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
        {name:'Academy',link:"/adminacademic"}, 
        {name:'Users',link:"/userview"}, 
        {name:'Trainers',link:"/admintrainer"}, 
        {name: 'Enrolled Courses' ,link:"/admincourseenroll"},
        {name:'Profile',link:"/adminprofile"}, 
        {name:'Home',link:"/admindashboard"},
      ].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => {navigate(text.link)}}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "black" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}