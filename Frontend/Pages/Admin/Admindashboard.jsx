import { useEffect} from 'react';
import ScrollReveal from 'scrollreveal';
import logo from '../../assets/ZenYoga.png';
import why from '../../assets/why.jpg';
import icon1 from '../../assets/icon-1.png';
import icon2 from '../../assets/icon-2.png';
import icon3 from '../../assets/icon-3.png';
import icon4 from '../../assets/icon-4.png';
import logss from '../../assets/logo.png';


import { Link } from 'react-router-dom';

import { RiTwitterFill, RiFacebookFill, RiInstagramLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setAuthentication, setToken, setUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';





import header from '../../assets/header.jpg';

import '../../assets/css/Admindashboard.css'
// Make sure to adjust the path based on your project structure
const YogalaxComponent = () => {
  // const [openLogoutPopup, setOpenLogoutPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogoutConfirmation = () => {
    // Clear token from sessionStorage
    sessionStorage.removeItem('token');

    // Clear state in Redux
    dispatch(setAuthentication(false));
    dispatch(setToken(''));
    dispatch(setUser({}));

    // Close any popups or modals related to logout
    // setOpenLogoutPopup(false);

    // Navigate to login page
    navigate('/login');
  };

  const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
  };
    
      useEffect(() => {
        // header container
        ScrollReveal().reveal(".header__container h1", {
          ...scrollRevealOption,
          delay: 500,
        });
    
        ScrollReveal().reveal(".header__container h2", {
          ...scrollRevealOption,
          delay: 1000,
        });
    
        ScrollReveal().reveal(".header__container .btn", {
          ...scrollRevealOption,
          delay: 1500,
        });
    
        ScrollReveal().reveal(".header__container img", {
          ...scrollRevealOption,
          origin: "right",
        });
    
        // why container
        ScrollReveal().reveal(".why__container .section__header", {
          ...scrollRevealOption,
          delay: 500,
        });
    
        ScrollReveal().reveal(".why__container p", {
          ...scrollRevealOption,
          delay: 1000,
        });
    
        ScrollReveal().reveal(".why__container li", {
          ...scrollRevealOption,
          delay: 1500,
          interval: 500,
        });
    
        ScrollReveal().reveal(".why__container img", {
          ...scrollRevealOption,
          origin: "left",
        });
    
        // hero container
        ScrollReveal().reveal(".hero__card", {
          ...scrollRevealOption,
          interval: 500,
        });
    
        // classes container
        ScrollReveal().reveal(".classes__image", {
          duration: 1000,
          interval: 500,
        });
    
        // membership container
        ScrollReveal().reveal(".membership__card", {
          ...scrollRevealOption,
          interval: 500,
        });
    
        // stories container
        ScrollReveal().reveal(".stories__card", {
          ...scrollRevealOption,
          interval: 500,
        });
    
        // posts container
        ScrollReveal().reveal(".posts__card", {
          ...scrollRevealOption,
          interval: 500,
        });
    
        // photos container
        ScrollReveal().reveal(".photos__card", {
          duration: 1000,
          interval: 500,
        });
      }, []);
      
      return (
        <div className='das'>
      <nav>
        <div className="nav__logo">
          <img className="logs"src={logo} alt="logo" />
          <span>ZenYoga</span>
        </div>
        <ul className="nav__links">
      <Link to="/userview">  <li className="link"><a href="#stories">Users</a></li></Link>
          <li className='link'><div className="dropdown">
    <button className="dropbtn">Services
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
  <Link to="/adminacademic">  <a href="#">Academics</a></Link>
   <Link to="/admintrainer"><a href="#">Trainer</a></Link>
   <Link to="/admincourseenroll"><a href="#">Course Enrollments</a></Link>
      
    </div>
  </div> </li>

  {/* <Link to="/useradminpanel"> */}
  <Link to="/adminprofile">  <li className="link"><a href="#contact">Profile</a></li></Link>
  <li className="link2">
    <a href="#contact" onClick={handleLogoutConfirmation}>
      LogOut
    </a>
  </li>
{/* </Link> */}

  
 {/* <Link to="/scheduleget"> <li className="link"><a href="#">Schedule</a></li></Link>
  <Link to="/contactget">       <li className="link"><a href="#stories">Review</a></li></Link> */}
         
          <br></br>
     
        </ul>
      </nav>
      <header id="home">
        <div className="section__container header__container">
          <div className="header__content">
            <h1>Hello , Admin!!
            <br></br>Discover Yoga</h1>
            <h2>We share the transformative power of yoga <br></br>with every mind,every body,everywhere</h2>
           
          </div>
          <div className="header__image">
            <img src={header} alt="header" />
          </div>
        </div>
      </header>
      <section className="section__container why__container">
      <div className="why__image">
        <img src={why} alt="why yoga" />
      </div>
      <div className="why__content">
        <h2 className="section__header">Why You Should Go To Yoga</h2>
        <p>
          Engaging in yoga offers a holistic approach to wellness, encompassing
          both physical and mental benefits. Through a series of poses,
          stretches, and muscle strength. Its meditative aspects encourage
          mindfulness, reducing stress and anxiety while promoting a sense of
          inner peace.
        </p>
        <ul>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga boosts brain power
          </li>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga helps you to breathe better
          </li>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga improves your strength
          </li>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga helps you to focus
          </li>
          <li>
            <span><i className="ri-checkbox-circle-fill"></i></span>
            Yoga helps give meaning to your day
          </li>
        </ul>
      </div>
    </section>

    <section className="hero" id="hero">
      <div className="section__container hero__container">
        <div className="hero__card">
          <span><img src={icon1} alt="hero" /></span>
          <h4>Healthy Lifestyle</h4>
          <p>
            Embrace a healthy lifestyle through the transformative power of yoga
            and cultivate physical vitality and inner peace.
          </p>
        </div>
        <div className="hero__card">
          <span><img src={icon2} alt="hero" /></span>
          <h4>Body & Mind Balance</h4>
          <p>
            Through purposeful poses and mindful breathing, yoga cultivates a
            strong, flexible body while nurturing inner calm.
          </p>
        </div>
        <div className="hero__card">
          <span><img src={icon3} alt="hero" /></span>
          <h4>Meditation Practice</h4>
          <p>
            Discover inner serenity and mindfulness as you cultivate a profound
            connection with the present amoment.
          </p>
        </div>
        <div className="hero__card">
          <span><img src={icon4} alt="hero" /></span>
          <h4>Self-Care</h4>
          <p>
            Discover the transformative power of self-care through yoga and
            embrace moments of tranquility and mindfulness.
          </p>
        </div>
      </div>
    </section>

   
   

      <footer className="footer" id="contact">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="footer__logo"><a href="#">SATTVA CONNECT</a></div>
          <img className="logss"src={logo} alt="logo" />
          </div>
          <div className="footer__col">
          <p>Located @Coimbatore , TamilNadu ,India-641008</p>
          </div>
          <div className="footer__col">
            <div className="footer__socials">
            <a href="#"><RiTwitterFill /></a>
         <a href="#"><RiFacebookFill /></a>
         <a href="#"><RiInstagramLine /></a>
            </div>
          </div>
                                                  
        </div>
        
      </footer>
    </div>
  );
};

export default YogalaxComponent;