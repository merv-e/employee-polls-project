import { connect } from "react-redux";
import { Table } from "react-bootstrap";

const Leaderboard = (props) => {

  return (
    <div className="leaderboard-table" >
      <Table responsive> 
        <thead style={{textAlign: "center"}}>
          <tr>
            <th>Username</th>
            <th>Answered Polls</th>
            <th>Created Polls</th>
          </tr>
        </thead>
         <tbody className="center">
        {
        props.userInfo.map( user =>
         <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.numOfAnswers} </td>
            <td>{user.numOfQuestions} </td>
         </tr>
          )
        }
         </tbody>
      </Table>
    </div>
  )
};

const mapStateToProps = ({users}) => {
  
  const userInfo = Object.values(users)
    .map(u => ({
      id: u.id,
      numOfAnswers: Object.values(u.answers).length,
      numOfQuestions: Object.values(u.questions).length,
      sum: Object.values(u.answers).length + Object.values(u.questions).length
    }))
    .sort((a, b) => b.sum - a.sum);
  
    console.log(userInfo)
  return {
    userInfo,
  };
};

export default connect(mapStateToProps)(Leaderboard);
