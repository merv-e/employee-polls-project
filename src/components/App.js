import { connect } from "react-redux";
import { useEffect } from "react";
import {handleData} from '../actions/shared';
import LoadingBar  from "react-redux-loading-bar";
import {Routes, Route } from "react-router-dom"; //Navigate
import Home from "./Home";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import Poll from "./Poll";
import Nav from "./Nav"
import ErrorPage from "./ErrorPage";
// import { withRouter } from "../utils/helpers";


const App = (props) => {
  
  useEffect(()=> {
      props.dispatch(handleData());
  }, []);

  return (
    <>
      <LoadingBar/>
      <div className="home-page">
      <Nav/>        
      <Routes> 
      {/* TODO : Learn more about error element */}
        <Route 
          path="/login/*" 
          element={
            props.isUserLoginNecessary === true 
            ? <Login/>
            : <Home/>
            } />

        <Route 
          path="/" exact 
          element={props.isUserLoginNecessary === false 
            ? <Home/> 
            : <Login/> } 
          />
        <Route 
          path="/add/*" 
          element={props.isUserLoginNecessary === false 
            ?  <NewPoll />
            :  <Login/> } 
        /> 
        <Route 
          path="/leaderboard/*" 
          element={ props.isUserLoginNecessary === false 
            ? <Leaderboard />
            : <Login/> } 
           />
        
        <Route 
          path="/questions/:id/*" 
          element={ 
            props.isUserLoginNecessary === false 
            ? <Poll/>
            : <Login/>
            } 
         />
        
        <Route 
          path="/error/*" 
          element={ 
           <ErrorPage />
            } 
        />
        </Routes> 
      </div>
     </> 
  )
};

const mapStateToProps = ({authedUser}, prop ) => ({ 
  
    isUserLoginNecessary : authedUser === null,
})

//TODO : check if it's still necessary to connect the router.
export default connect(mapStateToProps)(App)
