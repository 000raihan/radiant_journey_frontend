import React,{useEffect, useState} from "react";
import BottomBar from "../BottomBar";
import "./Layout.css";
import { useNavigate } from 'react-router-dom';

const Layout = (props) => {
  let navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  
  const getLocalUserId = async ()=>{
    const user_id = await JSON.parse(localStorage.getItem('user_id'));
    if(user_id){

    }else{
      navigate("/login");
    }
  }

  useEffect(()=>{
    getLocalUserId();
  },[])

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
