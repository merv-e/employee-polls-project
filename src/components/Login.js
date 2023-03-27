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
import { Button } from "react-bootstrap";

const Login = (props) => {
  
  const navigate = useNavigate();
  const {dispatch} = props;
  const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const authentification = props.userInfo.filter(u => u.id === username && u.password === password).map(u => u.id);
  
  // const user = authentification.find(user => user);

  // const user = username;  

  //if the pathname is /login redirect to the homepage
  if (props.path === "/login") {
    navigate("/");
  }
  
  const handleSubmit = event => { 
    // e.preventDefault();
    dispatch(showLoading()); 

    // const user = setUserName(ev.target.value)

    // setUserName(event.target.value)

    console.log(username);
    
    const user = username;  

    console.log(user);

    if (user) {
      dispatch(setAuthedUser(username));
    }

    else alert("Incorrect password or username"); 

    setUserName("");
    // setPassword("");
  
  dispatch(hideLoading());
  };

  return (
    <>
      <img
       data-testid="login-avatar"
       className="loginImg" 
       src={loginImg} 
       alt="Employee polls"
      />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
           <label htmlFor="default-option">Select User</label>
          <select 
           value={username}
           className="form-control"
           id="users"
           onChange={
            (event) => setUserName(event.target.value)} 
           >
            <option defaultValue disabled id="default-option"></option>
            <option value="zoshikanlu">zoshikanlu</option>
            <option value="tylermcginnis">tylermcginnis</option>
            <option value="sarahedo">sarahedo</option>
            <option value="mtsamis">mtsamis</option>
          </select>
        </div>
        
        <Button 
         type="submit"
         >Submit
         </Button>
      </form> 
    </>
  )
};

  const mapStateToProps = ({users, questions}, props) => {

    const userInfo = Object.values(users)
    .map(u => ({
      id: u.id,
      // password: u.password
    }));

    const path = props.router.location.pathname.replace("/question/", "");

    return {
      userInfo,
      questionIds : Object.values(questions).map((q) => q.id),
      path,
    };
};

export default withRouter(connect(mapStateToProps)(Login))
