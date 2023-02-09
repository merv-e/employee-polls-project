import { connect } from "react-redux";
import { useEffect, Fragment, useState } from "react";
import {handleData} from '../actions/shared';
import LoadingBar  from "react-redux-loading-bar";
import {Routes, Route, } from "react-router-dom"; //Navigate
import Home from "./Home";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import Poll from "./Poll";
import Nav from "./Nav"
import { useNavigate } from "react-router-dom";
 
const App = (props) => {

  const navigate = useNavigate();

  useEffect(()=> {
    // props.notLoggedIn === true 
    //   ? navigate("/login") 
      // : 
      props.dispatch(handleData());
  }, []);


  // if (props.notLoggedIn) {
  //   navigate("/login") 
  // }

  return (
    <>
      <LoadingBar/>
      <Nav/>        
      <div className="home-page">
      <Routes> 
        <Route 
          path="/" exact 
          element={
            props.load === true 
            ?  <Login/> 
            :  <Home /> 
            } />

            {/* <Fragment> */}
                <Route path="/" exact element={<Home />} />
                <Route path="/add" element={<NewPoll />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/question/:id" element={<Poll />} />
                <Route path="/login" element={<Login />} /> 
            {/* </Fragment> */}
        </Routes> 
      </div>
     </> 
  )
};

const mapStateToProps = ({authedUser} ) => ({ 
  load : authedUser === null,
  // loggedIn : authedUser !== null,
})

export default connect(mapStateToProps)(App)

    
//  {/* <Route path="/login" element={<Login />} />  */}
//             {/* (
//               )                */}