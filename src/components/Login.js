import { useState } from "react";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginImg from "../images/employee-poll.png";
// import { handleLogin } from "../actions/shared";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import {setAuthedUser} from "../actions/authedUser"

const Login = (props) => {
  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authentification = 
    props.userInfo.filter(u => u.id === username && u.password === password)
      .map(u => u.id);
  
  // console.log(props.userInfo.map (user => user.id) );
  // console.log(props.userInfo.map (user => user.password) );
  // console.log(props.successfulUserlogin);
  
  
  const handleSubmit = (e) => { 
    e.preventDefault();
    const {dispatch} = props;
    //  dispatch(showLoading());
    
    // console.log(authentification.length);
    console.log(authentification.find(user => user));
    console.log(username);
    
    if (authentification.find(user => user)) {
     return dispatch(setAuthedUser(username))
    }

    else alert("Incorrect password or username");
    navigate("/") 

  setUserName("");
  setPassword("");
  
  // dispatch(hideLoading());
  };
  
  
  return (
    <div className="login-page">
      <img
       className="loginImg" 
       src={loginImg} 
       alt="Employee polls"
       />
     <form 
       className="login" 
       onSubmit={handleSubmit} >
        <input 
         value={username}
         placeholder="username" type="text"
         onChange={(event) => setUserName(event.target.value)}/>
       <input
        value={password} 
        placeholder="password" 
        type="text"
        onChange={(event) => setPassword(event.target.value)}/>
        <button 
         type="submit" 
         disabled={
          username === "" || password === ""
         }
        >Login
        </button>
      </form>
    </div>
  )
};

  const mapStateToProps = ({users, authedUser}) => {

    const userInfo = Object.values(users)
    .map(u => ({
      id: u.id,
      password: u.password
    }))

    return {
      successfullogin : authedUser !== null,
      userInfo,
    };
};

export default connect(mapStateToProps)(Login)
