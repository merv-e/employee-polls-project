import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
      </div>

      <div style={{paddingRight: "10px"}}>
        <ul>
          <li>
            <img className="avatar-login" src={avatar} alt={`Avatar of ${authedUser}`}/>
          </li>
          <li>
            <Link 
            to="/login" 
            style={style}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
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