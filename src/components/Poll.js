import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import handleSaveAnswer from "../actions/users";
import { formattedQuestion, withRouter } from "../utils/helpers";
import ErrorPage from "./ErrorPage";

const Poll = (props) => { 


  // NOTE! questionAndUserInfo yerine author etc. burada tanımla bakalım o zaman olacak mı

  const doesQuestionExist = props.questionIds.includes(props.id); 
  // const auth =  props.question.author;
  // const que = props.question;
  
  console.log(doesQuestionExist);
  // console.log(props.question.author);
  console.log(props.authedUser);

  const {dispatch, authedUser, question} = props; 
  const {author, name, avatar, text1, text2, qid, votesForOptionTwo, votesForOptionOne, percentageOptionOne, percentageOptionTwo} = props.questionAndUserInfo;
  
  const chooseOptionOne = (e) => { 
     dispatch(handleSaveAnswer({
      authedUser, 
      qid,
      answer: "optionOne" 
    }))
  };
  
  const chooseOptionTwo = (e) => {
    dispatch(handleSaveAnswer({
      authedUser, 
      qid,  
      answer: "optionTwo" 
    }))
  };

  return (
    <>
    {
      (!doesQuestionExist && !props.question.author && !props.authedUser) 

      ? (<ErrorPage/>)
      : (
    <div className="poll">
        <h1>Would you rather</h1>
        <img src={avatar} alt={`Avatar of ${author}`} className="avatar"/>
        <h3>A Poll by {author}</h3>
        <span><i>{name}</i></span>
        {
          question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
          ? (
            <div className="options">
              <div className="option">
                <p>{text1}</p>
                <button 
                 className={ question.optionOne.votes.includes(authedUser) ? "btn btn-danger" : "btn"}
                 disabled>
                 Choose
                 </button>
                <p className="center">Number of votes: {votesForOptionOne.length}</p>
                <p className="center">{percentageOptionOne}</p>
              </div>

              <div className="option">
                <p>{text2}</p>
                <button 
                 className={ question.optionTwo.votes.includes(authedUser) ? "btn btn-danger"  : "btn" }
                 disabled>
                 Choose
                 </button>
                <p className="center">Number of votes : {votesForOptionTwo.length}</p>
                <p className="center">{percentageOptionTwo}</p>
              </div>
            </div>
          ) 
          :  (
            <div className="options">
              <div className="option">
                <p>{text1}</p>
                <button className="btn btn-secondary" onClick={chooseOptionOne}>Choose</button>
              </div>
              <div className="option">
                <p>{text2}</p>
                <button className="btn btn-secondary" onClick={chooseOptionTwo}>Choose</button>
              </div>
            </div>
            )
        }
    </div>
    )
     }
  </>
  )
};

const mapStateToProps = ({authedUser, questions, users }, props) => {

  const { id} = props.router.params;
  const question = questions[id];

  return {
    id,
    questionAndUserInfo: formattedQuestion(question, users[question.author], authedUser),
    authedUser,
    question,
    questions,
    questionIds: Object.values(questions).map((q) => q.id),
  }
  
};

export default withRouter(connect(mapStateToProps)(Poll))
