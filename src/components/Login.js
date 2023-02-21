import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useRoutes } from "react-router-dom";
import loginImg from "../images/employee-poll.png";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import {setAuthedUser} from "../actions/authedUser"
import { withRouter } from "../utils/helpers";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";

const Login = (props) => {
  
  const navigate = useNavigate();
  const {dispatch} = props;
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const authentification = props.userInfo.filter(u => u.id === username && u.password === password).map(u => u.id);
  
  const user = authentification.find(user => user);

  //if the pathname is /login redirect to the homepage
  if (props.path === "/login") {
    navigate("/");
  }
  
  const handleSubmit = (e) => { 
    e.preventDefault();
    dispatch(showLoading()); 
    
    if (user) {
      dispatch(setAuthedUser(username));
    }

    else alert("Incorrect password or username");

    setUserName("");
    setPassword("");
  
  dispatch(hideLoading());
  };

  return (
    <div className="login-page">
      <img
       data-testid="login-avatar"
       className="loginImg" 
       src={loginImg} 
       alt="Employee polls"
       />
     <form 
       className="login" 
       onSubmit={handleSubmit} >
        <input 
         value={username}
         data-testid="login-name"
         placeholder="username" type="text"
         onChange={(event) => setUserName(event.target.value)}/>
       <input
        data-testid="login-password"
        value={password} 
        placeholder="password" 
        type="text"
        onChange={(event) => setPassword(event.target.value)}/>
        <button
         data-testid="login-submit"
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

  const mapStateToProps = ({users, questions}, props) => {

    const userInfo = Object.values(users)
    .map(u => ({
      id: u.id,
      password: u.password
    }));

const path = props.router.location.pathname.replace("/question/", "");

    return {
      userInfo,
      questionIds : Object.values(questions).map((q) => q.id),
      path
    };
};

export default withRouter(connect(mapStateToProps)(Login))
