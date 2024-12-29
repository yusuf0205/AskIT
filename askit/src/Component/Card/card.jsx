import React from "react";
import "./card.css";
import { MdVerified } from "react-icons/md";

const Card = ({ data }) => {
  const carddaysoftheWeek = [
    { full: "Sun", short: "S" },
    { full: "Mon", short: "M" },
    { full: "Tue", short: "T" },
    { full: "Wed", short: "W" },
    { full: "Thu", short: "T" },
    { full: "Fri", short: "F" },
    { full: "Sat", short: "S" },
  ];

  return (
    <div className="card-card">
      <div className="card-card-header">
        <div className="card-icons">
          <i className="fas fa-home"></i>
          <i className="fas fa-bookmark"></i>
          <i className="fas fa-info-circle"></i>
        </div>
        <i className="fas fa-ellipsis-h options"></i>
      </div>

      <div className="card-card-profile">
        <img
          src={data.profilePicture}
          alt={data.name}
          className="card-profile-image"
        />
        <h2 className="card-name">
          {data.name} <MdVerified />
        </h2>
        <p className="card-profession">{data.profession}</p>
      </div>

      <div className="card-card-details">
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
        <div className="card-availability">
          {carddaysoftheWeek.map((day, index) => (
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

      <div className="card-card-footer">
        <div className="card-price">
          <span className="card-price-amount">{data.price}</span>
        </div>
        <button className="card-call-button">
          <i className="fas fa-phone-alt"></i> Call
        </button>
      </div>

      <div className="card-card-rating">
        <strong>{data.rating}</strong> ⭐<span>({data.reviews} Reviews)</span>
      </div>
      <hr />
      <p className="card-posted-date">Posted on: {data.postedDate}</p>
    </div>
  );
};

export default Card;
