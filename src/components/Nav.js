import { Link } from "react-router-dom";

const Nav = () => { 
    
    const style = {
        textDecoration: 'none',
        color: "black",
        border: "1px solid grey",
    }

  return (
    <div className="navbar">
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
  );
};

export default Nav;