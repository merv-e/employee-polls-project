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
    <Fragment>
      <LoadingBar/>
      <div className="home-page">
        <Nav/> 
        {
          props.load === true 
            ? null         
            : (
              <Routes> 
                <Route path="/" exact element={<Home />} />
                <Route path="/new" element={<NewPoll />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/question/:id" element={<Poll />} />
              </Routes>
            )
        }
      </div>
     </Fragment> 
  )
};

const mapStateToProps = ({authedUser} ) => ({ 
  load : authedUser === null      
})

export default connect(mapStateToProps)(App)



      // {/* {props.load === true 
      //   ?  <Login/> 
      //   : <Home />  
      // } */}
      
      //       {/* <Route path="/login" exact 
      //        element=
      //        {
      //         !loggedIn 
      //         ? <Login/> 
      //         : <Navigate replace to={<Home/>} /> 
      //       } 
      //       /> */}