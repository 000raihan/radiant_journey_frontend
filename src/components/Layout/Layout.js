import React from "react";
import BottomBar from "../BottomBar";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      {props.children}
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
