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

  // const routes = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/leaderboard",
  //     element: <Leaderboard />,
  //   },
  //   { path: "/new", element: <NewPoll /> }
  // ]);

  // const routes = ["/", "/login", "/leaderboard", "new"];

  // const doesTheRouteMatch = routes.filter(route => route === props.path) !== []; 
  // console.log(Object.keys(routes).map(x=>x)); 
  // console.log("routes are:", routes);
  // console.log(routes.filter(route => route !== props.path));
  // console.log(doesTheRouteMatch);
  // console.log(props.path);

  //if the pathname is /login redirect to the homepage
  if (props.path === "/login") {
    navigate("/");
  }
  
  // && !props.questionIds.includes(props.path)
  
  const handleSubmit = (e) => { 
    e.preventDefault();
    dispatch(showLoading()); 
    
    if (user) {
      dispatch(setAuthedUser(username));
      
      
      //if the user tries to access a question it's going to be checked whether that id is in our fake database.
      // if(doesTheRouteMatch === false){
      //   navigate("/error");
      // }
      
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
