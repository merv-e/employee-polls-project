import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../actions/authedUser";

const NavLogout = ({style, authedUser}) => {

  const handleLogout = ({dispatch}) => {
    dispatch(logOut(authedUser));
  };

  return (
    <div style={{paddingRight: "10px"}}>
    <ol>
      <li>
        <p>{authedUser}</p>
      </li>
      <li>
        <Link 
        to="/login" 
        style={style}
        onClick={handleLogout}>Logout</Link>
      </li>
    </ol>
  </div>  
  )
}

const mapStateToProps = ({authedUser}, style) => ({
    authedUser,
    style,
});

export default connect(mapStateToProps)(NavLogout)
