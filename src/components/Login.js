import { connect } from "react-redux";
import { useState } from "react";
// import { handleLogin } from "../actions/authedUser";


const Login = ({dispatch, authedUser}) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // handleLogin(userName, password);
    setPassword("");
    setUserName("");
  };

  return (
    <div className="login-page">
      <img 
       src="../public/images/employee-poll.png" alt="Apicture showing employees"/>
      <form 
       className="login" 
       onSubmit={handleSubmit} >
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

  const mapStateToProps = ({authedUser}) => ({
    loggedIn : authedUser,
  });

export default connect()(Login)
