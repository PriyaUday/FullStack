import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import buddha from "../../assets/buddha.jpg";
import schbg from "../../assets/schbg1.png";
import { Link } from 'react-router-dom';
import homeicon from '../../assets/aro1.jpeg';
import '../../assets/css/Schedule.css'; // Import custom CSS file
// import ss from '../assets/ss.jpg'
const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    if (note.trim() !== '') {
      const formattedDate = date.toDateString();
      const formattedTime = date.toLocaleTimeString();
      const fullNote = `${formattedDate} ${formattedTime}: ${note}`;

      setNotes([...notes, fullNote]);
      setNote('');
    }
  };

  const tileContent = ({ date, view }) => {
    const formattedDate = date.toDateString();
    const isMarked = notes.some((note) => note.includes(formattedDate));

    if (view === 'month' && isMarked) {
      return <span className="note-marker"></span>;
    }

    return null;
  };

  return (
    <div className="calendar-container">
      <div style={{ backgroundImage:`url(${schbg})` }} className="background-gradient"></div>
      <Link to="/dashboard">
        <img className="homeicon1234" src={homeicon} alt="Home Icon" />
      </Link>
      <div className="calendar-content">
        <h1 className="calendar-heading">Schedule Your Goals Here!!</h1>
        <div className="calendar-wrapper">
          <div className="calendar">
            <img className='imgban' src={buddha}></img>
            <Calendar
              value={date}
              onChange={handleDateChange}
              className="custom-calendar"
              tileClassName="custom-tile"
              tileContent={tileContent}
            />
          </div>
          <div className="notes-container">
            <input
              type="text"
              placeholder=" Mark your dates.."
              value={note}
              onChange={handleNoteChange}
              className="note-input"
            />
            <button className="add-note-button" onClick={handleAddNote}>
              Add
            </button>
            <ul className="note-list">
              {notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
