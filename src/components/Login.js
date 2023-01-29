import { connect } from "react-redux";
import {setAuthedUser} from "../actions/authedUser";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";


const Login = ({dispatch}) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogginIn = (ev) => {
    ev.preventDefault();
    dispatch(handleLogin(userName, password));
    setPassword("");
    setUserName("");
  };

  return (
    <div className="login-page">
      <img 
       src="../public/images/employee-poll.png" alt="Apicture showing employees"/>
      <form 
       className="login" 
       onSubmit={handleLogginIn} >
        <input 
         placeholder="username" type="text"
         onChange={(event) => setUserName(event.target.value)}/>
       <input 
        placeholder="password" 
        type="text"
        onChange={(event) => setPassword(event.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
};

  // const mapStateToProps = ({authedUser}) => ({
  //   succesfullyLoggedIn : !authedUser,
  // });

export default connect()(Login)
