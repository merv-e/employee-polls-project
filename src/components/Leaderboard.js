import { connect } from "react-redux";
import { Table } from "react-bootstrap";
// import { Navigate } from "react-router-dom";

const Leaderboard = (props) => {

  const style = {
      textAlign: "center",
      position: "absolute", 
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
  };

  return (
      <Table 
      style={style}
      responsive
      striped
      variant="dark" 
      size="sm"
      // className="leaderboard-table"
      > 
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Answered Polls</th>
            <th>Created Polls</th>
          </tr>
        </thead>
         <tbody>
        {
        props.userInfo.map(user =>
         <tr key={user.id}>
            <td> 
              <img className="avatar-leaderboard" src={user.avatar} alt={`Avatar of ${user.id}`} /> 
            </td>
            <td className="align-left">{user.id}</td>
            <td>{user.numOfAnswers} </td>
            <td>{user.numOfQuestions} </td>
         </tr>
          )
        }
         </tbody>
      </Table>
  )
};

const mapStateToProps = ({users, authedUser}) => {
  
  const userInfo = Object.values(users)
    .map(u => ({
      id: u.id,
      numOfAnswers: Object.values(u.answers).length,
      numOfQuestions: Object.values(u.questions).length,
      sum: Object.values(u.answers).length + Object.values(u.questions).length,
      avatar : Object.values(u.avatarURL).join("").toString()
    }))
    .sort((a, b) => b.sum - a.sum);
  
  return {
    userInfo,
    authedUser
  };
};

export default connect(mapStateToProps)(Leaderboard);
