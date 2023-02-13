import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";
import { useNavigate} from "react-router-dom";
import PollPage from "./PollPage";

const Polls = (props) => {
  
  const navigate = useNavigate();
  
  const {author, name, timestamp} = props.question;
  
  return (
      <div>
        <p>{author}</p>
        {/* <span>{name} </span> */}
        <p>{timestamp}</p>
        <button
          className="btn btn-secondary" 
          onClick={(e, id) => props.id &&navigate(`/question/${props.id}`)}>
          Show poll
        </button>
    </div>
    )
};

const mapStateToProps = ({authedUser, users, questions}, prop) => { //we can use {id} instead of prop.
    const question = questions[prop.id];
    
    return {
        question: formattedQuestion(question, users[question.author], authedUser),
        prop
    }
};

export default connect(mapStateToProps)(Polls);
