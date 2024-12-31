import React from "react";
import "./profile.css";
// import profile from "../../Assets/profile.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Profile = () => {
  const data = {
    name: "Kathir",
    profession: "Carpenter",
    experience: "5",
    skills: "5",
    location: "Gandhipuram, R.S. Puram, Saibaba Colony",
    availableDays: ["Sunday", "Wednesday", "Friday", "Saturday"],
    rating: "4.8",
    reviews: "10000",
    price: "₹1500/Hour",
    postedDate: "12-12-2023",
    profilePicture:
      "2wCEAAkGBxITEhMTExMVFhUXGRUYGRYYFxUVFxgZFxUXFhUXFRgYHSggGBolGxUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS8tLi0uLS0zLS0tKy4tLS8tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLf",
  };

  return (
    <div className="flex-box">
      <div className="container">
        <div className="header">
          <div className="icons">
            <IoMdArrowRoundBack className="icon" />
            <IoMdArrowRoundBack className="icon" />
            <IoMdArrowRoundBack className="icon" />
            <BsThreeDots className="iconspe" />
          </div>
        </div>
        <div className="content">
          <div className="overview">
            <div className="circle">
              <img src={data.profilePicture} alt="" />
            </div>
            <div className="user">
              <h2 className="card-name">
                {data.name} <MdVerified />
              </h2>
              <p className="card-profession">{data.profession}</p>
            </div>
            <div className="review">
              <div className="rating">{data.rating}</div>
              <div className="line"></div>
              <div className="based">
                <div className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <CiStar />
                </div>
                <div className="review-number">Based on {data.reviews} Reviews</div>
              </div>
            </div>
            <div className="posted"></div>
          </div>
          <div className="experience"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
