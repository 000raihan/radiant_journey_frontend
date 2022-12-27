import React,{useState,useEffect} from 'react';
import './styles/LoginPage.css';
import allUsers from '../data/employee.json';
import { useNavigate } from 'react-router-dom';



const LoginPage = (props) => {
  let navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState(null);


  const login =async ()=>{
    const userDetails = allUsers.find(user=>{
      return user.user_id == `${employeeId}`
     });

    if(userDetails){
      const user_id = JSON.stringify(localStorage.setItem('user_id', userDetails.user_id));
      navigate("/");
    }else{
      alert("User not found");
    }
  }
  return (
    <div style={{width:'100vw', height:"100vh"}}>
        <img style={{width:'100%', height:"70%", objectFit:'cover'}} src='/assets/images/beach1.png'/>
       <div style={{width:'100%', display:'flex', justifyContent:'center'}}><img style={{width:"30%", height:"auto"}} src='/assets/images/rpl_logo.png'/></div> 
        <div style={{padding:" 0rem 1rem", marginTop:"1rem", display:'flex', justifyContent:'center'}}><input value={employeeId} onChange={(e=>setEmployeeId(e.target.value))} style={{maxWidth:"100%",width:"100%", padding:"1rem", border:"1px solid #D1D5DB", borderRadius:"3px", }} placeholder='Employee id'/></div>
        <div style={{padding:"0rem 1rem", marginTop:"1rem"}}><button onClick={()=>login()} style={{width:'100%',padding:'1rem', border:"none", color:"white", backgroundColor:"#EF1C20", borderRadius:'5px'}}>Login</button></div>
    </div>
  )
}

export default LoginPage