import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";


const Polls = (props) => {
    console.log(props);

    const showPoll = () => {
        //TODO :  when clicked it'll take us to the poll itself. 
    };

    return (
      <>
        <tbody>
          <tr>
            <td>{props.question.author} </td>
            <td>{props.question.timestamp}</td>
            <td onClick={showPoll}>Show poll</td>
          </tr>
        </tbody>
        </>
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
