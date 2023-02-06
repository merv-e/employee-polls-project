import { connect } from "react-redux";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";


const Login = ({dispatch, authedUser, users}) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = ({ev, dispatch}) => {
    // ev.preventDefault();
    // dispatch(handleLogin(userName, password));

    /*  The part above is from authedUser/actions.js in order to try it out. Delete it afterwards!! */

    // const successfulUserLogin = Object.values(users).includes(u => u.id === userName && u.password === password);
        
    //     if (successfulUserLogin) alert("Login successful. Redirecting to .... ")

    //     else alert("Incorrect password or username"); 

    /* End of the aforementioned part. */
    
    setUserName("");
    setPassword("");
  };

  // console.log(userName);
  // console.log(password);

  return (
    <div className="login-page">
      <img 
       src="../public/images/employee-poll.png" alt="Apicture showing employees"/>
      <form 
       className="login" 
       onSubmit={handleSubmit} >
        <input 
         value={userName}
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
          userName === "" || password === ""
         }
        >Login
        </button>
      </form>
    </div>
  )
};

  const mapStateToProps = ({authedUser}) => ({
    loggedIn : authedUser,
  });

export default connect()(Login)
