import { useSpring, animated } from 'react-spring';
import '../assets/css/UserAdminPanel.css';
import lotus from "../assets/logo.png";
import yogamain from "../assets/yogamain.jpg";
import { Link } from 'react-router-dom';

function UserAdminPanel() {
  // Opacity animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // Position and scale animation
  const moveIn = useSpring({
    from: { transform: 'translateY(100px) scale(0.8)' },
    to: { transform: 'translateY(0) scale(1)' },
    config: { duration: 800 },
  });

  return (
    <div>
      {/* Background image with opacity animation */}
      <animated.div style={{ ...fadeIn, backgroundImage: `url(${yogamain})` }} className="useradmin"></animated.div>
      
      {/* Center box with position and scale animation */}
      <animated.div style={{ ...fadeIn, ...moveIn }} className="center-box">
        <center><img className="imgenter" src={lotus} alt="Lotus Logo"></img></center>
        <h1 className='main1'>ZEN YOGA</h1><br></br>
        <h2 className='main2'>Yoga is the dance of every cell with the music of every breath that creates inner serenity and harmony</h2><br></br><br></br>
        <Link to="/login"><button className="button13 user-btn">Login</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Link to="/adminlogin"><button className="button13 admin-btn">Admin</button></Link> */}
      </animated.div>
    </div>
  );
}

export default UserAdminPanel;
