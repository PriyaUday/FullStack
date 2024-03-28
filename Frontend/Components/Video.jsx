import { useEffect, useRef } from 'react';
import "../Pages/UserAdminPanel"
import video from '../assets/video.mp4';
import '../assets/css/Video.css';
import { Link } from 'react-router-dom';
const Video = () => {
  const videoRef = useRef(null);
  

  useEffect(() => {
    // Auto-play the video when the component mounts
    videoRef.current.play().catch(error => {
      // Autoplay may be blocked by browsers, handle the error here
      console.error('Autoplay failed:', error);
    });
  }, []);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

 

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        width="100%"
        autoPlay
        onClick={handlePlayPause}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="arrow-overlay" >
      <Link to="/useradminpanel"> <img
          className="srcimg"
          src="https://th.bing.com/th/id/R.70d93b8eb85cc786a8c29c69366470d5?rik=f6JJpY9%2bz8SPug&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2farrow-icon-transparent%2farrow-icon-transparent-3.jpg&ehk=iWR%2f5nM6CdWkeADPLlKYvK7DF1zm77IWnllQn06VFRA%3d&risl=&pid=ImgRaw&r=0"
          alt="Arrow"
        /></Link>
      </div>
    </div>
  );
};

export default Video;
