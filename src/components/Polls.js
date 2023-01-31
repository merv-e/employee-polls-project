import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";
import {useNavigate} from "react-router-dom";

const Polls = (props) => {
  
  const navigate = useNavigate();

    // when clicked it'll take us to the poll itself. 
    const showPoll = ({ id }) => {
        navigate(`/question/${props.id}`);    
    };
    
    const {author, name, timestamp } = props.question;
    
  return (
    <div>
        <p>{author} </p>
        <span>{name} </span>
        <p>{timestamp}</p>
        <button 
          className="btn" 
          onClick={showPoll}
        >
          Show poll
        </button>
    </div>
    )
};

const mapStateToProps = ({authedUser, users, questions}, {id}) => { //we can use {id} instead of prop.

    const question = questions[id];
    
    // const {username} = users[question.author];  
    //o kisinin username degerlerine karsilik geliyor bu' : o da id : username seklinde verilmis. 

    //Dahası users[id].name etc ile id,name, password ce avatarUrL'lerine ulasabiliyorsun

    return {
        id,
        question: formattedQuestion(question, users[question.author], authedUser),
        author : users[question.author],
        optionOne : question.optionOne.text,
        optionTwo : question.optionTwo.text,
    }
};


export default connect(mapStateToProps)(Polls);
