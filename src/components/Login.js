import { useState } from "react";
import { handleLogin } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import loginImg from "../images/employee-poll.png"

const Login = ({e, dispatch}) => {
  
  const [selectedAuthedUser, setSelectedAuthedUser] = useState("");
  
  const navigate = useNavigate();

  // handleSubmit
  const handleChange = ({e, dispatch}) => { 
    // ev.preventDefault();
    setSelectedAuthedUser(e.target.value);
    // dispatch(handleLogin(selectedAuthedUser));
    
    console.log(selectedAuthedUser);
  };

  return (
    <div className="login-page">
      <img
       className="loginImg" 
       src={loginImg} 
       alt="Employee polls"
       />
      <select 
       value={selectedAuthedUser}
       name="employeeIds" 
       onChange={handleChange}>
        <option 
          value="default">
          Select to login
        </option>
        <option 
           value="mtsamis">
           mtsamis
        </option>
        <option 
           value="sarahedo">
           sarahedo
        </option>
        <option
          value="tylermcginnis">
          tylermcginnis
        </option>
        <option
          value="zoshikanlu">
          zoshikanlu
        </option>
      </select>

    </div>
  )
};

export default Login
