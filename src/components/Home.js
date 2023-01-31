import { connect } from "react-redux";
import Polls from "./Polls";

const Home = (props) => {
  const hasUserVoted = props.questionIds.filter(q => props.answeredQuestionIds.includes(q));
  const hasUserNotVoted = props.questionIds.filter(q => !props.answeredQuestionIds.includes(q));
  
  return (
    <div>
    <h2 className="center">New Polls</h2>
      <ul className="container">
      {
       hasUserVoted.map(qId => 
          <li className="poll-list" key={qId}>
           <Polls 
             id={qId} 
            />
          </li>
      )}
      </ul>  

    <h2 className="center">Completed Polls</h2>
      <ul className="container">
      {
        hasUserNotVoted.map(qId => 
          <li className="poll-list" key={qId}>
            <Polls 
             id={qId} 
              />
          </li>
      )}
      </ul>  
    </div>
  )
};

const mapStateToProps = ({questions, authedUser, users}) => ({
    questionIds : Object.keys(questions)
      .sort((x, y) => 
        questions[y].timestamp - questions[x].timestamp
     ),
     answeredQuestionIds: Object.keys(users[authedUser].answers),
});

export default connect(mapStateToProps)(Home)



    