import { connect } from "react-redux";
import { useEffect } from "react";
import {handleData} from '../actions/shared';
import Home from "./Home";
 
const App = (props) => {

  useEffect(()=> {
      props.dispatch(handleData());
  }, []);

  return (
    <div>
      <Home />
    </div>
  )
}

export default connect()(App)
