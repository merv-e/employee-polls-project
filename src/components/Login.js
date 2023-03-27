import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useRoutes } from "react-router-dom";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import {setAuthedUser} from "../actions/authedUser"
import { withRouter } from "../utils/helpers";
import { Button } from "react-bootstrap";

const Login = (props) => {
  
  const navigate = useNavigate();
  const {dispatch} = props;
  const [username, setUserName] = useState("");
  
  const options = [
    {value: "", text: "Please choose a user"},
    {value: "zoshikanlu", text: "zoshikanlu"},
    {value: "tylermcginnis", text: "tylermcginnis"},
    {value: "mtsamis", text: "mtsamis"},
    {value: "sarahedo", text: "sarahedo"},
  ];

  //if the pathname is /login redirect to the homepage
  if (props.path === "/login") {
    navigate("/");
  }
  
  const handleSubmit = event => { 
    event.preventDefault();
    dispatch(showLoading()); 
    
    const user = username;  

    if (user !== "") {
      dispatch(setAuthedUser(username));
    }

    setUserName("");
  
  dispatch(hideLoading());
  };

  return (
    <div 
    className="login-page"
    >
    <div 
     className="block-container">
      <form 
       onSubmit={handleSubmit}
      >
      <h5 className="center">Select user</h5>
          <select 
           value={username}
           className="login" 
          //  className="d-grid gap-4"
           onChange={
            (event) => setUserName(event.target.value)} 
           >
           {
            options.map(o => 
              <option
                disabled= {o.value === ""} 
                key={o.value} 
                value={o.value}
                >{o.text}
              </option>
             )}
          </select>

        <div className="d-grid gap-2">
          <Button 
          //  className="btn btn-secondary center "
           variant="secondary"
           size="block"
           type="submit"
           >Submit
          </Button>
        </div>
      </form> 
    </div>
    </div>
  )
};

  const mapStateToProps = ({users, questions}, props) => {

    const userInfo = Object.values(users)
    .map(u => ({
      id: u.id,
    }));

    const path = props.router.location.pathname.replace("/question/", "");

    return {
      userInfo,
      questionIds : Object.values(questions).map((q) => q.id),
      path,
    };
};

export default withRouter(connect(mapStateToProps)(Login))
