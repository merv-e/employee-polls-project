import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";
import {Link, useNavigate} from "react-router-dom";

const Polls = (props) => {
  
  const navigate = useNavigate();

  const showPoll = (e, id) => {
    e.preventDefault();
    navigate(`/question/${props.id}`); 
  };
    
  const {author, name, timestamp} = props.question;
    
  return (
      <div>
        <p>{author}</p>
        <span>{name} </span>
        <p>{timestamp}</p>
        <div
          className="btn" 
          onClick={(e, id) => showPoll(e, id)}>
          Show poll
        </div>
    </div>
    )
};

const mapStateToProps = ({authedUser, users, questions}, prop) => { //we can use {id} instead of prop.
    const question = questions[prop.id];
    
    return {
        question: formattedQuestion(question, users[question.author], authedUser),
    }
};

export default connect(mapStateToProps)(Polls);
