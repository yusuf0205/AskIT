import React from "react";
import "./card.css";
import { MdVerified } from "react-icons/md";

const Card = ({ data }) => {
  const daysoftheWeek = [
    { full: "Sun", short: "S" },
    { full: "Mon", short: "M" },
    { full: "Tue", short: "T" },
    { full: "Wed", short: "W" },
    { full: "Thu", short: "T" },
    { full: "Fri", short: "F" },
    { full: "Sat", short: "S" },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <div className="icons">
          <i className="fas fa-home"></i>
          <i className="fas fa-bookmark"></i>
          <i className="fas fa-info-circle"></i>
        </div>
        <i className="fas fa-ellipsis-h options"></i>
      </div>

      <div className="card-profile">
        <img
          src={data.profilePicture}
          alt={data.name}
          className="profile-image"
        />
        <h2 className="name">
          {data.name} <MdVerified />
        </h2>
        <p className="profession">{data.profession}</p>
      </div>

      <div className="card-details">
        <p>
          <strong>Experience:</strong> {data.experience} Years
        </p>
        <p>
          <strong>Skills:</strong> {data.skills} Years
        </p>
        <p>
          <strong>Location Covered:</strong> {data.location}
        </p>
        <p>
          <strong>Available on:</strong>
        </p>
        <div className="availability">
          {daysoftheWeek.map((day, index) => (
            <span
              key={index}
              className={
                data.availableDays.includes(day.full)
                  ? "available-day"
                  : "unavailable-day"
              }
            >
              {day.short}
            </span>
          ))}
        </div>
      </div>

      <div className="card-footer">
        <div className="price">
          <span className="price-amount">{data.price}</span>
        </div>
        <button className="call-button">
          <i className="fas fa-phone-alt"></i> Call
        </button>
      </div>

      <div className="card-rating">
        <strong>{data.rating}</strong> ⭐<span>({data.reviews} Reviews)</span>
      </div>
      <p className="posted-date">Posted on: {data.postedDate}</p>
    </div>
  );
};

export default Card;
