import React from 'react';
import img1 from './images/homeimg.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate("/login");
    };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
         <div className="logo-container">
           <div className="logo">ECE</div>
           <div className="logo-abbr">EVENT COORDINATION ENGINE</div>
         </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li onClick={handleButton}>Login|Signup</li>
          </ul>
        </nav>
        <div className="hero-content">
          <h2>INTRODUCING</h2>
          <h1>YOUR DESTINATION FOR ONLINE EVENTS</h1>
          <h3>Discover events and activities handpicked to keep you entertained and educated.</h3>
          <p>Welcome to ECE, your ultimate hub for discovering, registering, and hosting events. Browse a diverse range of events tailored to your interests, or create your own and connect with a vibrant community. Simplify your event coordination with our user-friendly platform. Join us today and make your next event unforgettable!</p>
          <div className="images">
            <img src={img1} alt="Event" className="event-image" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;