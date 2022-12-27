import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "./styles/HomePage.css";
import allUser from "../data/employee.json";
import { useNavigate } from "react-router-dom";

// console.log("users : ", allUser);

const HomePage = () => {
  const [userDetails, setUserDetails] = useState(null);

  const getLocalUserId = async () => {
    const user_id = await JSON.parse(localStorage.getItem("user_id"));
    if (user_id) {
      const user = await allUser.find((user) => {
        return user.user_id == `${user_id}`;
      });
      setUserDetails(user);
    }
  };

  useEffect(() => {
    getLocalUserId();
  }, []);

  return (
    <Layout>
      {userDetails && (
        <div className="home" id="home">
          <div className="header">
            <h1>Hello</h1>
            <h2>{userDetails.name}!</h2>
          </div>
          <div className="journey">
            <h1 className="info-title">Journey Info</h1>

            <img className="bus-image" src="/assets/images/bus1.png" />

            <div className="journey-info">
              <h4>{userDetails?.journey_1}</h4>
              <div className="location">
                <img src="/assets/icons/location1.svg" />
                <p>
                  {userDetails.journey_1_location &&
                    userDetails.journey_1_location}
                </p>
              </div>
              <div className="bus-details">
                <div className="bus-name">
                  <h5>Bus name</h5>
                  <h4>
                    {userDetails.journey_1_bus_name &&
                      userDetails.journey_1_bus_name}
                  </h4>
                </div>
                <div className="seat">
                  <h5>Seat</h5>
                  <h4>
                    {userDetails.journey_1_seat && userDetails.journey_1_seat}
                  </h4>
                </div>
                <div className="time">
                  <h5>Time</h5>
                  <h4>
                    {userDetails.journey_1_time && userDetails.journey_1_time}
                  </h4>
                </div>
                <div className="date">
                  <h5>Date</h5>
                  <h4>
                    {userDetails.journey_1_date && userDetails.journey_1_date}
                  </h4>
                </div>
              </div>
            </div>
            <div className="journey-info">
              <h4>{userDetails.journey_2 && userDetails.journey_2}</h4>
              <div className="location">
                <img src="/assets/icons/location1.svg" />
                <p>
                  {userDetails.journey_2_location &&
                    userDetails.journey_2_location}
                </p>
              </div>
              <div className="bus-details">
                <div className="bus-name">
                  <h5>Bus name</h5>
                  <h4>
                    {userDetails.journey_2_bus_name &&
                      userDetails.journey_2_bus_name}
                  </h4>
                </div>
                <div className="seat">
                  <h5>Seat</h5>
                  <h4>
                    {userDetails.journey_2_seat && userDetails.journey_2_seat}
                  </h4>
                </div>
                <div className="time">
                  <h5>Time</h5>
                  <h4>
                    {userDetails.journey_2_time && userDetails.journey_2_time}
                  </h4>
                </div>
                <div className="date">
                  <h5>Date</h5>
                  <h4>
                    {userDetails.journey_2_date && userDetails.journey_2_date}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="hotel">
            <h1 className="info-title">Hotel Info</h1>

            <div className="journey-info">
              <h4>{userDetails.hotel_name && userDetails.hotel_name}</h4>
              <div className="location">
                <img src="/assets/icons/location1.svg" />
                <p>
                  {userDetails.hotel_location && userDetails.hotel_location}
                </p>
              </div>
              <div className="bus-details">
                <div className="bus-name">
                  <h5>Room Number</h5>
                  <h4>{userDetails.room_number && userDetails.room_number}</h4>
                </div>
                <div className="seat">
                  <h5>Check In</h5>
                  <h4>{userDetails.check_in && userDetails.check_in}</h4>
                </div>
                <div className="time">
                  <h5>Check Out</h5>
                  <h4>{userDetails.check_out && userDetails.check_out}</h4>
                </div>
              </div>
            </div>
            <img className="hotel-image" src="/assets/images/hotel1.png" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
