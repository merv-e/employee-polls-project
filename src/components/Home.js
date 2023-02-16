import { useState } from "react";
import { connect } from "react-redux";
import Polls from "./Polls";

const Home = (props) => {

  const [poll, setPoll] = useState("New Polls");  
  const [toggle, setToggle] = useState(true); 
  
  const handleClick = () => {
    setToggle(toggle => !toggle);

    if (!toggle){ 
      return setPoll("New Polls");
    }
    else if (toggle) {
      return setPoll("Completed Polls")
    };
  }; 
  //the user hasn't been voted yet, therefore the poll will be in the new polls.
  const hasUserVoted = props.questionIds.filter(q => props.answeredQuestionIds.includes(q));

  //the user has voted, so the poll will be under in the completed polls.
  const hasUserNotVoted = props.questionIds.filter(q => !props.answeredQuestionIds.includes(q));

  // TODO: ?  These lines and conditionally rendering options can be added.

  // if (hasUserNotVoted.length === 0) {
  //   return <p>You haven't voted for any of the polls yet. Would you like to consider checking the polls?</p>
  // }
  // if (hasUserVoted.length === 0 ) {
  //   return <p>There are no new questions.</p>
  // }

  return (
    <div className="center" > 
      <h2 className="center">{poll}</h2> 
    {
       toggle
      ? ( 
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

      )
      : (
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
    )
  }
      <button 
        className="btn btn-dark" 
        onClick={handleClick}
        >
        Switch to
        {
          poll === "New Polls" 
          ? " Completed Polls"
          : poll === "Completed Polls"
          ? " New Polls"
          : null
          } 
        </button> 
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



    