import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ErrorPage = (props) => {

  // useEffect(()=> {
  //   setTimeout(() => {
  //     if(props.authedUser) {
  //       Navigate("/login")
  //     }
  //   }, 1000);
  // }, []);

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/")
  }
  
  return (
    <div>
      <h1 className="center">
        Oooops! Wrong page. You will be redirected to Login Page.
      </h1>
      <button onClick={goToHomePage }>Go to Homepage</button>
    </div>
  )
}

const mapStateToProps = ({authedUser}) => ({
  authedUser,
});


export default connect()(ErrorPage)
