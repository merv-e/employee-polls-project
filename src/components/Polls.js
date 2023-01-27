import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";

const Polls = (props) => {
    console.log(props);
    return (
        <div className="center">
             {/* <h2>Polls</h2>
             <ul>
             {
                props.questionsIds.map(() => (
                <li key={id}>

                </li>
                ))
             }
             </ul> */}
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
