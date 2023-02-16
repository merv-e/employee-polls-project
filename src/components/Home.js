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

  // console.log(toggle); 
  // console.log(poll);  
  
  const hasUserVoted = props.questionIds.filter(q => props.answeredQuestionIds.includes(q));
  const hasUserNotVoted = props.questionIds.filter(q => !props.answeredQuestionIds.includes(q));

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



    