import { Link } from "react-router-dom";

const Nav = (props) => { 
    
    const style = {
        textDecoration: 'none',
        color: "black",
    }

  return (
    <div className="navbar">
      <div>
        <ul>
          <li>
            <Link to="/" style={style} >Home</Link>
          </li>
          <li>
            <Link 
            to="/new" 
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
            <img src={props.avatar} alt={`Avatar of ${props.author}`}/>
          </li>
          <li>
          {/* TODO : img style  */}
          {/* <img src={} alt/> */}
            <Link 
            to="/login" 
            style={style}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;