import React, { useState } from "react";
import "./test.css";
import searchIcon from "../../Assets/search-b.png";
import locationIcon from "../../Assets/search-w.png";
import notificationIcon from "../../Assets/search-w.png";
import globeIcon from "../../Assets/search-w.png";
import userIcon from "../../Assets/search-w.png";
import Support from "./Navtopage/support";
import Notification from "./Navtopage/Notification";
import Language from "./Navtopage/Language";

const NavbarWithPopup = () => {
  const [activeSegment, setActiveSegment] = useState(null);

  const handleSegmentChange = (segment) => {
    if (activeSegment === segment) {
      setActiveSegment(null); // Close the popup if the same segment is clicked
    } else {
      setActiveSegment(segment); // Open the popup for the clicked segment
    }
  };

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
        <div
          className={`nav-item ${activeSegment === "support" ? "active" : ""}`}
        >
          <a onClick={() => handleSegmentChange("support")} href="#support">Support</a>
          {activeSegment === "support" && (
            <div className="popup-box">
              <Support />
            </div>
          )}
        </div>

        <div
          className={`nav-item ${
            activeSegment === "notifications" ? "active" : ""
          }`}
        >
          <a onClick={() => handleSegmentChange("notifications")} href="#notifications">
            <img src={notificationIcon} alt="Notifications" />
            Notification
          </a>
          {activeSegment === "notifications" && (
            <div className="popup-box">
              <Notification />
            </div>
          )}
        </div>

        <div
          className={`nav-item ${activeSegment === "language" ? "active" : ""}`}
        >
          <a onClick={() => handleSegmentChange("language")} href="#language">
            <img src={globeIcon} alt="Language" />
            English
          </a> {activeSegment === "language" && (
          <div className="popup-box">
            <Language />
          </div>
        )}
        </div>
       

        <div
          className={`nav-item ${activeSegment === "signin" ? "active" : ""}`}
        >
          <a onClick={() => handleSegmentChange("signin")} href="#signin">
            <img src={userIcon} alt="Sign in" />
            Sign in
          </a>
          {activeSegment === "signin" && (
            <div className="popup-box">Sign in Info Here</div>
          )}
        </div>

        <button className="sign-up">Sign up</button>
      </div>
    </div>
  );
};

export default NavbarWithPopup;
