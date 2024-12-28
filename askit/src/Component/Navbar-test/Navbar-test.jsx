import React from 'react';
import './Navbar-test.css';
import searchIcon from '../../Assets/search-b.png';
import locationIcon from '../../Assets/search-w.png';
import notificationIcon from '../../Assets/search-w.png';
import globeIcon from '../../Assets/search-w.png';
import userIcon from '../../Assets/search-w.png';

const Navbar1 = () => {
  return (
    <div className="navbar">
  <div className="navbar-left">
    <h1 className="logo">Ask IT</h1>
  </div>
  <div className="navbar-center">
    <div className="search-wrapper">
      <div className="locat">
        <div className="location">
          <img src={locationIcon} alt="Location" />
          <span>Puducherry</span>
        </div>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <div className="search-but">
        <button className="search-button">
          <img src={searchIcon} alt="Search" />
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar-right">
    <a href="#support">Support</a>
    <a href="#notifications">
      <img src={notificationIcon} alt="Notifications" />
      Notification
    </a>
    <a href="#language">
      <img src={globeIcon} alt="Language" />
      English
    </a>
    <a href="#signin">
      <img src={userIcon} alt="Sign in" />
      Sign in
    </a>
    <button className="sign-up">Sign up</button>
  </div>
</div>
  );
};

export default Navbar1;
