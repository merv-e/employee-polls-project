import { connect } from "react-redux";
import Polls from "./Polls";
import Poll from "./Poll";

const Home = (props) => {
  // console.log(props.answeredQuestionIds);
  // console.log(props.questionIds);

  const hasUserVoted = props.questionIds.filter(q => props.answeredQuestionIds.includes(q));
  const hasUserNotVoted = props.questionIds.filter(q => !props.answeredQuestionIds.includes(q));
    
  // console.log(props.hasuserVoted);
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
            <Poll 
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
             
            <Poll 
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



    