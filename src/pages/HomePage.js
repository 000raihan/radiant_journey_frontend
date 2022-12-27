import React from "react";
import Layout from "../components/Layout/Layout";
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <Layout>
    <div className="home" id="home">
      <div className="header">
        <h1>Hello</h1>
        <h2>Sadbin Walid Antu!</h2>
      </div>
      <div className="journey">
        <h1 className="info-title">Journey Info</h1>

        <img className="bus-image" src="/assets/images/bus1.png"/>

        <div className="journey-info">
          <h4>Dhaka to Cox’s Bazar</h4>
          <div className="location">
            <img src="/assets/icons/location1.svg" />
            <p>Gabtoli bus terminal, Jhenaidah</p>
          </div>
          <div className="bus-details">
            <div className="bus-name">
              <h5>Bus name</h5>
              <h4>Sohag bus name</h4>
            </div>
            <div className="seat">
              <h5>Seat</h5>
              <h4>L- A1</h4>
            </div>
            <div className="time">
              <h5>Time</h5>
              <h4>6:30am</h4>
            </div>
            <div className="date">
            <h5>Date</h5>
              <h4>23 Dec</h4>
            </div>
          </div>
        </div>
        <div className="journey-info">
          <h4>Dhaka to Cox’s Bazar</h4>
          <div className="location">
            <img src="/assets/icons/location1.svg" />
            <p>Gabtoli bus terminal, Jhenaidah</p>
          </div>
          <div className="bus-details">
            <div className="bus-name">
              <h5>Bus name</h5>
              <h4>Sohag bus name</h4>
            </div>
            <div className="seat">
              <h5>Seat</h5>
              <h4>L- A1</h4>
            </div>
            <div className="time">
              <h5>Time</h5>
              <h4>6:30am</h4>
            </div>
            <div className="date">
            <h5>Date</h5>
              <h4>23 Dec</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="hotel">
        <h1 className="info-title">Journey Info</h1>

        <div className="journey-info">
          <h4>Dhaka to Cox’s Bazar</h4>
          <div className="location">
            <img src="/assets/icons/location1.svg" />
            <p>Gabtoli bus terminal, Jhenaidah</p>
          </div>
          <div className="bus-details">
            <div className="bus-name">
              <h5>Bus name</h5>
              <h4>Sohag bus name</h4>
            </div>
            <div className="seat">
              <h5>Seat</h5>
              <h4>L- A1</h4>
            </div>
            <div className="time">
              <h5>Time</h5>
              <h4>6:30am</h4>
            </div>
          </div>
        </div>
        <img className="hotel-image" src="/assets/images/hotel1.png"/>
      </div>
    </div>
    </Layout>
  );
};

export default HomePage;
