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
  //the user has voted, so the poll will be under in the completed polls.
  const hasUserVoted = props.questionIds.filter(q => !props.answeredQuestionIds.includes(q));

  //the user hasn't been voted yet, therefore the poll will be in the new polls.
  const hasUserNotVoted = props.questionIds.filter(q => props.answeredQuestionIds.includes(q));

  /* TODO : make it responsive!!! */
  return (
    <div className="center poll-page">
     <div className="poll-container"> 
      <h1 className="center">{poll}</h1> 
    {
       toggle
      ? ( 
        <ul className="container">
        {
          hasUserVoted.length === 0 
            ? (<p className="p-polls-text">You answered all the questions.</p>)
            : hasUserVoted.map(qId => 
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
          hasUserNotVoted.length === 0 
          ? <p className="p-polls-text">You haven't voted for any of the polls yet. Would you like to consider checking the polls?</p>
          : hasUserNotVoted.map(qId => 
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



    