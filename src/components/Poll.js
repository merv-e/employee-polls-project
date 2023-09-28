import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import handleSaveAnswer from "../actions/users";
import { withRouter } from "../utils/helpers";
import { calculatePercentage } from "../utils/helpers";

const Poll = (props) => { 

  const {dispatch, authedUser, question, qid } = props; 

   if ( props.qid === undefined || question === undefined )  {
      return (
      <Navigate to="/error" replace={true}/>
      )
  }   
  const votesForOptionOne = question.optionOne.votes;
  const votesForOptionTwo = question.optionTwo.votes;
  const total  = votesForOptionOne.length + votesForOptionTwo.length;
  
  const text1 = question.optionOne.text
  const text2 = question.optionTwo.text;

  const {name, avatarURL } = props.users[question.author]; 
 
  const percentageOptionOne= calculatePercentage(votesForOptionOne.length, total);
  const percentageOptionTwo= calculatePercentage(votesForOptionTwo.length, total);
  
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

/* NOTE: className avatar does not exist, check CSS!! */

  return (
    <div className="poll">
        <h1>Would you rather</h1>
        <img src={avatarURL} alt={`Avatar of ${question.author}`} className="avatar"/> 
        <h3>A Poll by {question.author}</h3>
        <span className="options-text-username"><i>{name}</i></span>
        {
          votesForOptionOne.includes(authedUser) || votesForOptionTwo.includes(authedUser)
          ? (
            <div className="options">
              <div className="option">
                <p>{text1}</p>
                <button 
                 className={ votesForOptionOne.includes(authedUser) ? "btn btn-danger" : "btn"}
                 disabled>
                 Choose
                 </button>
                <p className="center">Number of votes: {votesForOptionOne.length}</p>
                <p className="center">{percentageOptionOne}</p>
              </div>

              <div className="option">
                <p>{text2}</p>
                <button 
                 className={ votesForOptionTwo.includes(authedUser) ? "btn btn-danger"  : "btn" }
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
};

const mapStateToProps = ({authedUser, questions, users }, props) => {

  const {id} = props.router.params;
  const question = questions[id];

  return {
    qid : id,
    authedUser,
    question,
    users,
    // questionAndUserInfo: formattedQuestion(question, users[question.author], authedUser),
  }
};

export default withRouter(connect(mapStateToProps)(Poll))
