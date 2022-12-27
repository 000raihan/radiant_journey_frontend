import React from 'react';
import './BottomBar.css';
import { Link, useLocation} from 'react-router-dom';


const BottomBar = () => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path)
  return (
    <div className='bottom_bar'>
        <div className='bottom_items'>
            <Link to="/">
            <div className={`item ${path == '/' && "item_active"}`}>
                <img src='/assets/icons/home1.svg'/>
            </div>
            </Link>
            <Link to="/event">
            <div className={`item ${path == '/event' && "item_active"}`}>
                <img src='/assets/icons/calendar.svg'/>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default BottomBar