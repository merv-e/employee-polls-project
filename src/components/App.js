import { connect } from "react-redux";
import { useEffect, Fragment, useState } from "react";
import {handleData} from '../actions/shared';
import LoadingBar  from "react-redux-loading-bar";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import Poll from "./Poll";
import Nav from "./Nav"

 
const App = (props) => {

  useEffect(()=> {
      props.dispatch(handleData());
  }, []);

  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
    {/* <Fragment> */}
      {/* <div> */}

      <LoadingBar/>
      {/* <Nav/> */}

      {props.load === true 
        ?  <Login/> 
        : <Home />  
      }
      

    </div>
  )
};

const mapStateToProps = ({authedUser, users, questions} ) => ({ 
  load : authedUser === null      
})

export default connect(mapStateToProps)(App)

