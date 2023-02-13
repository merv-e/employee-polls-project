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
import { useRouteError } from "react-router-dom";


const App = (props) => {
    
  //   if(props.authedUser === null) {
  //     // alert("You need to login first!");
  //     // props.dispatch(logOut);
  //     Navigate("/login");
  // }
  
  useEffect(()=> {
      props.dispatch(handleData());
  }, []);

  // if ( props.isUserLoginNecessary === true) {
  //   Navigate("/login");
  // }
  // else Navigate("/")


  const path = props.router.location.pathname.replace("/question/", "");
  // console.log(path);

//  const doesQuestionExist = props.questions.filter(q => q.id === path
//   ).map(z => z)
//  includes(path); 

  // console.log(doesQuestionExist);
  // console.log(props.questions);
  // console.log(props.questionIds);
 
  const ErrorBoundary = () => {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div>Dang!</div>;
  };
  

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
            props.isUserLoginNecessary === true 
            ?  <Login/> 
            :  <Home /> 
            // ? props.questionIds.includes(path)
            // : <ErrorPage/>

            // ONEErrorPage NOT : Giris yapinca home adresine gitmesi gerekiyor, gidiyor da ancak adres ismi degismiyor ve login olarak kaliyor.
            } />

        <Route 
          path="/" exact 
          element={props.isUserLoginNecessary === false 
            ? <Home/> 
            : <Login/> } 
          />
        <Route 
          path="/add" 
          element={props.isUserLoginNecessary === false 
            ?  <NewPoll />
            :  <Login/> } 
        /> 
        <Route 
          path="/leaderboard" 
          element={ props.isUserLoginNecessary === false 
            ? <Leaderboard />
            : <Login/> } 
           />
        
        <Route 
          path="/question/:id" 
          element={ 
            props.questionIds.includes(path)
            ? <Poll/>
            : <ErrorPage/>
            } 
          errorElement={
            <ErrorBoundary />
           } 
         />
        
        <Route 
          path="/error" 
          element={
            // props.isUserLoginNecessary === false 
            // ?
             <ErrorPage />
            // : <Login/>
           } 
        />
        </Routes> 
      </div>
     </> 
  )
};

const mapStateToProps = ({authedUser, questions}, prop ) => ({ 
  
    isUserLoginNecessary : authedUser === null,
    questions,
    questionIds : Object.values(questions).map((q) => q.id),
})

export default withRouter(connect(mapStateToProps)(App))
// export default connect(mapStateToProps)(App)
