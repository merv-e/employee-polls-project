import { connect } from "react-redux";
import { useEffect } from "react";
import {handleData} from '../actions/shared';
import Home from "./Home";
import LoadingBar  from "react-redux-loading-bar";
import Login from "./Login";
 
const App = (props) => {

  useEffect(()=> {
      props.dispatch(handleData());
  }, []);

  return (
    <div>
    <LoadingBar/>
    {
      props.load === true 
      ? <Login/>       
      : <Home/>   
    }
    </div>
  )
};

const mapStateToProps = ({authedUser, users, questions} ) => ({ 
  load : authedUser === null      
})

export default connect(mapStateToProps)(App)

