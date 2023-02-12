import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginImg from "../images/employee-poll.png";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import {setAuthedUser} from "../actions/authedUser"
import { withRouter } from "../utils/helpers";

const Login = (props) => {
  
  const navigate = useNavigate();
  const {dispatch} = props;
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const authentification = props.userInfo.filter(u => u.id === username && u.password === password).map(u => u.id);
  
  const user = authentification.find(user => user);

  const handleSubmit = (e) => { 
    e.preventDefault();
    dispatch(showLoading());

    if (user) {
      dispatch(setAuthedUser(username));
      //eger adres cubugunda bi link yazılıysa question-question_id gibi---  bizi error page'e gotursun, yoksa ana sayfaya gitsin
    //   if (props.x) navigate("/");
    }
    
    else alert("Incorrect password or username");

    setUserName("");
    setPassword("");
  
  dispatch(hideLoading());
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

  const mapStateToProps = ({users}, props) => {

  const {x} = props.router.location.pathname 
  //!== id;

    const userInfo = Object.values(users)
    .map(u => ({
      id: u.id,
      password: u.password
    }))

    return {
      userInfo,
      x
    };
};

export default withRouter(connect(mapStateToProps)(Login))
