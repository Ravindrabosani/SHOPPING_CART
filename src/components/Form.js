import React, { useState} from "react";
 //import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
//import {useNavigate} from "react-router-dom"
 import "../styles/flipkart.css"

function Form(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[cpass,setCpass]=useState("")
   const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePass=(e)=>{
        setPass(e.target.value)
    }
    const changeCpass=(e)=>{
        setCpass(e.target.value)
    }

 const handleChange=(event)=>{
    event.preventDefault()
    if(name.length<=5){
        alert("must be enter more than 5 charcters")
    }
    else if(pass.length<=8){
        alert("password must be more than 8 characters")
    }
    else if(pass!==cpass){
        alert("password does not match")
    }
    else{
        alert("sucuessfully submited")
        localStorage.setItem("Name",name)
        localStorage.setItem("Email",email)
        localStorage.setItem("Password",pass)
   
    }

  } 
 
    return(
       <div>
        <form>
        <h1>SIGHUP</h1>
        <label>UserName:</label><br/>
        <input type="text" placeholder="enter your name" value={name} onChange={changeName}/>
        <br/><br/>
        <label>Email:</label><br/>
        <input type="email"  placeholder="**" value={email} onChange={changeEmail}/>
        <br/><br/>
        <label>Password:</label><br/>
        <input type="password" placeholder="**" value={pass} onChange={changePass}/>
        <br/><br/>
        <label>confirm password:</label><br/>
        <input type="password" placeholder="**" value={cpass} onChange={changeCpass}/>
        <br/><br/>
        <button type="submit" onClick={handleChange}>SignUp</button>




        </form>
       </div>
       
    )
}
      

export default Form;