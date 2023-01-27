import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";


const Polls = (props) => {
    console.log(props);

    const showPoll = () => {
        //TODO :  when clicked it'll take us to the poll itself. 
    };


  return (
    <div>
      <div>
        <p>{props.question.author} </p>
        <span>{props.question.name} </span>
        <p>{props.question.timestamp}</p>
      <button className="btn" onClick={showPoll}>Show poll</button>
      </div> 
    </div>
    )
};

const mapStateToProps = ({authedUser, users, questions}, {id}) => { //we can use {id} instead of prop.

    const question = questions[id]; 

    return {
        authedUser,
        question: formattedQuestion(question, users[question.author], authedUser),
    }

};


export default connect(mapStateToProps)(Polls);
