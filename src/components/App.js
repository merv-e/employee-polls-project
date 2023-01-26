import { connect } from "react-redux";
import { useEffect } from "react";
import {handleData} from '../actions/shared';
 
const App = (props) => {

  useEffect(()=> {
      props.dispatch(handleData());
  }, []);

  return (
    <div>
      HELLO!
    </div>
  )
}

export default connect()(App)
