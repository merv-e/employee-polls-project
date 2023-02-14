import { connect } from "react-redux";
import {  useNavigate } from "react-router-dom";

const ErrorPage = (props) => {

  const navigate = useNavigate();

  // if(props.authedUser === null) {
  //   navigate("/login")
  // };

  const goToHomePage = () => {
    navigate("/")
  };
  
  return (
    <div className="center error-page">
      <h1 className="center">
        Oooops! This poll doesn't exist. Click the button below to go back to home!
      </h1>
      <button className="" onClick={goToHomePage }>Go to Homepage</button>
    </div>
  )
}

const mapStateToProps = ({authedUser}) => ({
    authedUser,
});
export default connect()(ErrorPage)
