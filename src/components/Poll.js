import { connect } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import handleSaveAnswer from "../actions/users";
import { formattedQuestion, withRouter } from "../utils/helpers";

const Poll = (props) => { 

  const navigate = useNavigate();
  const {dispatch, authedUser, id, question} = props;
  const {author, name, avatar, text1, text2} = props.questionAndUserInfo;
  
  // console.log(question.id);
  // console.log(id);
  // yukaridakilerin her ikisi ile de question id'ye ulasmak mumkun.

  const chooseOptionOne = (e) => { 
     e.preventDefault();
     dispatch(handleSaveAnswer({
        authedUser, 
        qid :id, 
        answer:"optionOne" //: {qid :"optionOne"},
        // : {authedUser : "optionOne"},
        // votes :  
     }))
    //  navigate("/")
  };
  
  const chooseOptionTwo = (e) => { //
     e.preventDefault();
    dispatch(handleSaveAnswer(
      {
        authedUser, 
        qid :id,  //qid: question.id
        answer: "optionTwo" , // :{qid : "optionTwo"}, 
    }))

   navigate("/")
  }

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
    question
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