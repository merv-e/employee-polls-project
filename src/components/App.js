import { connect } from "react-redux";
import { useEffect } from "react";
import {handleData} from '../actions/shared';
import LoadingBar  from "react-redux-loading-bar";
import {Routes, Route, Navigate, } from "react-router-dom"; //Navigate
import Home from "./Home";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import Poll from "./Poll";
import Nav from "./Nav"
import ErrorPage from "./ErrorPage";
import { logOut } from "../actions/authedUser";


const App = (props) => {

  // if(props.authedUser === null) {
    //   Navigate("/login");
    // }
    
    if(props.authedUser === null) {
      // alert("You need to login first!");
      // props.dispatch(logOut);
      Navigate("/login");
  }

  useEffect(()=> {
      props.dispatch(handleData());
  }, []);

  return (
    <>
      <LoadingBar/>
      <div className="home-page">
      <Nav/>        
      <Routes> 
      {/* Note : add errorElement to routes! */}
      {/* It works this way howeever, the navbar shouldn't be seen here not like the way it is now */}
        <Route 
          path="/login" 
          element={
            props.userLoginNecessary === true 
            ?  <Login/> 
            :  <Home /> 
            } />

        <Route 
          path="/" exact 
          element={props.userLoginNecessary === false 
            ? <Home/> 
            : <Login/> } 
            errorElement={<ErrorPage/>}/>
        <Route 
          path="/add" 
          element={props.userLoginNecessary === false 
            ?  <NewPoll />
            : <Login/> } 
            errorElement={<ErrorPage/>} />
        <Route 
          path="/leaderboard" 
          element={ props.userLoginNecessary === false 
            ? <Leaderboard />
            : <Login/> } 
          errorElement={<ErrorPage/>} />
        <Route 
          path="/question/:id" 
          element={ props.userLoginNecessary === false 
            ? <Poll/>
            : <Login/> } 
          errorElement={<ErrorPage/>} />
        
        <Route 
          path="/404" 
          element={<ErrorPage />} />
        {/* <Route path="/login" element={<Login />} errorElement={<ErrorPage/>} />  */}
        </Routes> 
      </div>
     </> 
  )
};

const mapStateToProps = ({authedUser} ) => ({ 
  userLoginNecessary : authedUser === null,
})

export default connect(mapStateToProps)(App)
