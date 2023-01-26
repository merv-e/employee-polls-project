import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";

const Poll = (props) => {
    console.log(props);
    return (
        <div >
      
    </div>
  )
};

const mapStateToProps = ({authedUser, users, questions}, {id}) => { //we can use {id} instead of prop.

    const question = questions[id]; 

    return {
        authedUser,
        question : question
        ? formattedQuestion(question, users[question.author], authedUser)
        : null,
    }

};


export default connect(mapStateToProps)(Poll);
