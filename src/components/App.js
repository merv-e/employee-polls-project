import { connect } from "react-redux";
import { useEffect } from "react";
import {handleData} from '../actions/shared';
import LoadingBar  from "react-redux-loading-bar";
import {Routes, Route, } from "react-router-dom"; //Navigate
import Home from "./Home";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import Poll from "./Poll";
import Nav from "./Nav"
// import { useNavigate } from "react-router-dom";
 
const App = (props) => {

  // const navigate = useNavigate();

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
                <Route path="/" exact element={<Home />} />
                <Route path="/add" element={<NewPoll />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/question/:id" element={<Poll />} />
                {/* <Route path="/login" element={<Login />} />  */}
                {/* errorElement={}  */}
        </Routes> 
      </div>
     </> 
  )
};

const mapStateToProps = ({authedUser} ) => ({ 
  userLoginNecessary : authedUser === null,
})

export default connect(mapStateToProps)(App)
