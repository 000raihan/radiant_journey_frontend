import React from "react";
import Layout from "../components/Layout/Layout";
import "./styles/EventPage.css";

const EventPage = () => {
  return (
    <Layout>
    <div className="event_page">
      <h1 className="page_title">Event</h1>
      <div className="tab_bar">
        <div className="tab_item">Day1</div>
        <div className="tab_item">Day2</div>
        <div className="tab_item">Day3</div>
        <div className="tab_item">Day4</div>
      </div>

      <div className="event_section">
        <div className="event">
          <img className="event_img" src="/assets/images/event1.png" />
          <div className="body">
            <div className="title">
              <h4>La Vieja Scuola - Elda...</h4>
              <img src="/assets/icons/like1.svg" />
            </div>
            <p className="long">878 kilometers away</p>
            <div className="details">
              <p>1k going</p>
              <div className="date">
                <img className="dot" src="/assets/icons/dot.svg" />
                <img className="calendar" src="/assets/icons/calendar.svg" />
                <p>Jan7-12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <img className="event_img" src="/assets/images/event2.png" />
          <div className="body">
            <div className="title">
              <h4>La Vieja Scuola - Elda...</h4>
              <img src="/assets/icons/like1.svg" />
            </div>
            <p className="long">878 kilometers away</p>
            <div className="details">
              <p>1k going</p>
              <div className="date">
                <img className="dot" src="/assets/icons/dot.svg" />
                <img className="calendar" src="/assets/icons/calendar.svg" />
                <p>Jan7-12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <img className="event_img" src="/assets/images/event3.png" />
          <div className="body">
            <div className="title">
              <h4>La Vieja Scuola - Elda...</h4>
              <img src="/assets/icons/like1.svg" />
            </div>
            <p className="long">878 kilometers away</p>
            <div className="details">
              <p>1k going</p>
              <div className="date">
                <img className="dot" src="/assets/icons/dot.svg" />
                <img className="calendar" src="/assets/icons/calendar.svg" />
                <p>Jan7-12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default EventPage;
