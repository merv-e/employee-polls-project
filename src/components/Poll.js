import { connect } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import handleSaveAnswer from "../actions/users";
import { formattedQuestion, withRouter } from "../utils/helpers";

const Poll = (props) => { 
  const navigate = useNavigate();

  const {dispatch, authedUser} = props;
  // console.log(props.id);
  // console.log(props.questionAndUserInfo.id);
  
  const chooseOptionOne = () => { 
    //  e.preventDefault();
    // const {dispatch, authedUser, id} = props;
    dispatch(handleSaveAnswer({
        authedUser, 
        id: props.questionAndUserInfo.id, 
        answer: "optionOne", 
    }))
   // TODOS:
   //also add it to database so that this poll will be shown in the completed polls ---async redux thunk will be used.
  //  dispatch()
   navigate("/")
  };
  
  
  const chooseOptionTwo = () => { //
    //  e.preventDefault();
    dispatch(handleSaveAnswer(
      {
        authedUser, 
        id: props.questionAndUserInfo.id,
        answer: "optionTwo", 
    }))

   navigate("/")
  }

  const {author, name, avatar, text1, text2} = props.questionAndUserInfo;

  return (
    <div className="poll">
        <h1>A Poll by {author}</h1>
        <span><i>{name}</i></span>
        <img src={avatar} alt={`Avatar of ${author}`} className="avatar"/>
        <h2>Would you rather</h2>
        <div className="options">
          <div className="option">
            <p>{text1}</p>
            <button className="btn" onClick={chooseOptionOne}>Choose</button>
          </div>
          <div className="option">
            <p>{text2}</p>
            <button className="btn" onClick={chooseOptionTwo}>Choose</button>
          </div>
        </div>
    </div>
  )
};

const mapStateToProps = ({authedUser, questions, users }, props) => {

  const { id } = props.router.params;
  const question = questions[id];

  return {
    id,
    questionAndUserInfo: formattedQuestion(question, users[question.author], authedUser),
    authedUser,
  }
  
};

export default withRouter(connect(mapStateToProps)(Poll))

//  {/* if the user has voted then show the votes :  */}
          // {
          //   props.answeredQuestionIds.includes(props.id) && <button>Show number of votes</button> && <button>Show percentage of votes</button> 
          // } 



          // {
          //   props.answeredQuestionIds.includes(props.id) && <button>Show number of votes</button> && <button>Show percentage of votes</button> 
          // }