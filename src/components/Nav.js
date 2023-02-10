import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavLogout from "./NavLogout"

const Nav = (props) => { 
  
  const {userObject, authedUser} = props;

  const avatar= userObject.filter(user => user.id === authedUser)
    .map(user => user.avatarURL);
  // .join("").toString()
  // console.log(avatar);

    const style = {
        textDecoration: 'none',
        color: "black",
    };

  return (
    <div className="navbar">
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
      <NavLogout style= {style}/>      {/* Normalde bu element div'in altinda ve baska bir div'in icinde idi. */}
    </div>
        )
      }
    </div>
  );
};

// {/* <div>
// </div> */}
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