import { connect } from "react-redux";
import Polls from "./Polls";

const Home = (props) => {
  // console.log(props.authedUser);  undefined.

    // h2 will be either new or completed. 

    // {/* {
    //   props.hasUserVoted && ( */}
    // )}
    
  return (
    <div>
      <h2 className="center">New Polls</h2>  
      <ul className="container">
      {
        props.questionIds.map(qIdUnanswered => 
        (
          <li className="poll-list" key={qIdUnanswered}>
            <Polls id={qIdUnanswered} /> 
          </li>
        ))
      }
      </ul>
    {/* <h2 className="center">Completed Polls</h2> */}
    </div>
  )
};

const mapStateToProps = ({questions, authedUser}) => ({
    questionIds : Object.keys(questions)
     .sort((x, y) => 
        questions[y].timestamp - questions[x].timestamp
     ),
    // hasUserVoted: !questions.id.optionOne.votes.includes(authedUser) || !questions.id.optionTwo.votes.includes(authedUser) //meaning the user hasn't voted.
     
});

export default connect(mapStateToProps)(Home)



    