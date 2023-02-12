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
import { withRouter } from "../utils/helpers";


const App = (props) => {
    
  //   if(props.authedUser === null) {
  //     // alert("You need to login first!");
  //     // props.dispatch(logOut);
  //     Navigate("/login");
  // }
  
  useEffect(()=> {
      props.dispatch(handleData());
  }, []);

  // if ( props.userLoginNecessary === true) {
  //   Navigate("/login");
  // }
  // else Navigate("/")

  return (
    <>
      <LoadingBar/>
      <div className="home-page">
      <Nav/>        
      <Routes> 
      {/* TODO : Learn more about error element */}
        <Route 
          path="/login" 
          element={
            props.userLoginNecessary === true 
            ?  <Login/> 
            :  <Home /> 
            // Sorun cozuldu! 
            // ONEMLI NOT : Giris yapinca home adresine gitmesi gerekiyor, gidiyor da ancak adres ismi degismiyor ve login olarak kaliyor.
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
            : <Login/> 
            } 
          errorElement={
            <ErrorPage />
           } 
         />
        
        <Route 
          path="/404" 
          element={
            <ErrorPage />
           } 
        />
        </Routes> 
      </div>
     </> 
  )
};

const mapStateToProps = ({authedUser, questions}, props ) => { 
  
  // const { id } = props.router.params;
  // const question = questions[id];
  // const {abc} = props.router.location.pathname;

  return {
    userLoginNecessary : authedUser === null,
    // id,
    questions,
    // question,
    // doesQuestionExist : props.questions.includes(id)
  }
}

// export default withRouter(connect(mapStateToProps)(App))
export default connect(mapStateToProps)(App)
