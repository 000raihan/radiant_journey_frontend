import React from 'react';
import './styles/LoginPage.css'

const LoginPage = () => {
  return (
    <div style={{width:'100vw', height:"100vh"}}>
        <img style={{width:'100%', height:"70%", objectFit:'cover'}} src='/assets/images/beach1.png'/>
       <div style={{width:'100%', display:'flex', justifyContent:'center'}}><img style={{width:"30%", height:"auto"}} src='/assets/images/rpl_logo.png'/></div> 
        <div style={{padding:" 0rem 1rem", marginTop:"1rem"}}><input style={{width:"100%",padding:"1rem 0rem", border:"1px solid #D1D5DB", borderRadius:"3px"}} placeholder='     Employee id'/></div>
        <div style={{padding:"0rem 1rem", marginTop:"1rem"}}><button style={{width:'100%',padding:'1rem', border:"none", color:"white", backgroundColor:"#EF1C20", borderRadius:'5px'}}>Login</button></div>
    </div>
  )
}

export default LoginPage