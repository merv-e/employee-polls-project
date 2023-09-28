import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import NavLogout from "./NavLogout"
import {logOut} from "../actions/authedUser"

const Nav = (props) => { 
  
  /* TODO : make it responsive for different web apps....  */
  
  const {userObject, authedUser} = props;

  const avatar= userObject.filter(user => user.id === authedUser)
    .map(user => user.avatarURL);

  const style = {
      textDecoration: 'none',
      color: "white",
  };

  const handleLogout = ({dispatch}) => {
    dispatch(logOut(authedUser));
  };

  return (
    <nav>
    {
      authedUser === null 
      ? null
      : (
    <div className="navbar">
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
        <ul>
          <li className="avatar-text-align">
          <img className="avatar-loggedIn" src={avatar} alt={`Avatar of ${authedUser}`}/>
            <p>{authedUser}</p>
          </li>
          <li>
            <Link 
            to="/login" 
            style={style}
            onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
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

