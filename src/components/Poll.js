import { connect } from "react-redux";
import { Navigate, useRouteError, Redirect, useRoutes } from "react-router-dom";
import handleSaveAnswer from "../actions/users";
import { formattedQuestion, withRouter } from "../utils/helpers";
import ErrorPage from "./ErrorPage";
import { calculatePercentage } from "../utils/helpers";


const Poll = (props) => { 

  // if(props.authedUser === null ){
  //   <alert>You need to login first!</alert>;
  //     Navigate("/")
  // };

  // const ErrorBoundary = () => {
  //   let error = useRouteError();
  //   console.error(error);
  //   // Uncaught ReferenceError: path is not defined
  //   return <div>Dang!</div>;
  // };

  const errorRoute = useRoutes([
    { path: '/error', element: <ErrorPage /> },
  ]);
  
  // const doesQuestionExist = props.questionIds.includes(props.qid);
  const path = props.router.location.pathname.replace("/question/", "");

  const {dispatch, authedUser, question, qid } = props; 

   if ( props.qid === undefined || question === undefined )  {
      return (
      <Navigate to="/error" replace={true}/>
      )
  }   

  // const {author, name, avatar, text1, text2, qid, votesForOptionTwo, votesForOptionOne, percentageOptionOne, percentageOptionTwo} = props.questionAndUserInfo;

  // if ( props.qid === undefined && question === undefined && question.author === undefined && props.optionOne === undefined && props.optionTwo === undefined) {
  //   // (<ErrorPage/>))
  //    ErrorBoundary();
  // };

  // console.log(doesQuestionExist);
  // console.log(props.qid);
  // console.log(question);

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

  return (
    <div className="poll">
        <h1>Would you rather</h1>
        <img src={avatarURL} alt={`Avatar of ${question.author}`} className="avatar"/>
        <h3>A Poll by {question.author}</h3>
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
                 className={ props.question.optionTwo.votes.includes(authedUser) ? "btn btn-danger"  : "btn" }
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
    // questionAndUserInfo: formattedQuestion(question, users[question.author], authedUser),
    // questions,
    users,
    // questionIds: Object.values(questions).map((q) => q.id),
  }
  
};

export default withRouter(connect(mapStateToProps)(Poll))
