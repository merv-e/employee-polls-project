import {  useNavigate } from "react-router-dom";

const ErrorPage = (props) => {

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/")
  }
  
  return (
    <div className="center">
      <h1 className="center">
        Oooops! This poll doesn't exist. Click the button below to go back to home!
      </h1>
      <button onClick={goToHomePage }>Go to Homepage</button>
    </div>
  )
}

export default (ErrorPage)
