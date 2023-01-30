import { connect } from "react-redux";
import { useEffect, Fragment } from "react";
import {handleData} from '../actions/shared';
import LoadingBar  from "react-redux-loading-bar";
import {Routes, Route} from "react-router-dom";
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

  return (
    <div>
    <Fragment>
    <LoadingBar/>
    <Nav/>
    <Routes>
    {
      props.load === true 
      ? <Route path="/login" element={<Login/>} />       
      : <Route path="/login" exact element={<Home/>} />
    }
      <Route path="/question/:id" element={<Poll />} />
      <Route path="/new" element={<NewPoll />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>

    </Fragment>
    </div>
  )
};

const mapStateToProps = ({authedUser, users, questions} ) => ({ 
  load : authedUser === null      
})

export default connect(mapStateToProps)(App)

