import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";
// import {useNavigate} from "react-router-dom";
import Poll from "./Poll";

const Polls = (props) => {
    // const navigate = useNavigate();

    const showPoll = (ev, id) => {
        //TODO :  when clicked it'll take us to the poll itself. 
            // e.preventDefault();
            // navigate(`/question/${id}`)    
        };
    

  return (
    <div>
        <p>{props.question.author} </p>
        <span>{props.question.name} </span>
        <p>{props.question.timestamp}</p>
        <button 
          className="btn" 
          onClick={(ev) => showPoll(ev)}>
          Show poll
        </button>
        <Poll author={props.author}/>
    </div>
    )
};

const mapStateToProps = ({authedUser, users, questions}, {id, name, avatar, author, optionOne, optionTwo, answeredQuestionIds}) => { //we can use {id} instead of prop.

    const question = questions[id]; 

    return {
        authedUser,
        question: formattedQuestion(question, users[question.author], authedUser),
        avatar : users.avatarURL,
        name : users.name,
        author : question.author,
        optionOne : question.optionOne.text,
        optionTwo : question.optionTwo.text,
    }
};


export default connect(mapStateToProps)(Polls);
