import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import NavLogout from "./NavLogout"
import {logOut} from "../actions/authedUser"

const Nav = (props) => { 
  
  const {userObject, authedUser} = props;

  const avatar= userObject.filter(user => user.id === authedUser)
    .map(user => user.avatarURL);

  const style = {
      textDecoration: 'none',
      color: "black",
  };

  const handleLogout = ({dispatch}) => {
    dispatch(logOut(authedUser));
  };

  return (
    <nav  className="navbar">
    {
      authedUser === null 
      ? null
      : (
    <div>
      <ul>
        <li>
          <Link to="/" style={style}>Home</Link>
        </li>
        <li>
          <Link 
          to="/add" 
          style={style}>
          Create New Poll
        </Link>
        </li>
        <li>
          <Link 
          to="/leaderboard" 
          style={style}>Leaderboard</Link>
        </li>
      </ul>

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
    </div>
        )
      }
    </nav>
  );
};

const mapStateToProps = ({authedUser, users}) => {

  const userObject = Object.values(users)
   .map(user => user);

  return {
    authedUser,
    userObject,
  }

};

export default connect(mapStateToProps)(Nav);


// {/* <img className="avatar-login" src={avatar} alt={`Avatar of ${authedUser}`}/> */}