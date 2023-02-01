import { connect } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom"; 
import { formattedQuestion, withRouter } from "../utils/helpers";

const Poll = (props) => {
  const navigate = useNavigate();
  
  const chooseOption = (e) => {
     e.preventDefault();
   // TODOS:
   //also add it to database so that this poll will be shown in the completed polls ---async redux thunk will be used.

  //  navigate("/")
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
            <button className="btn" onClick={(e) => chooseOption(e)}>Choose</button>
          </div>
          <div className="option">
            <p>{text2}</p>
            <button className="btn" onClick={(e) => chooseOption(e)}>Choose</button>
          </div>
        </div>
    </div>
  )
};

const mapStateToProps = ({authedUser, questions, users }, props) => {

  const { id } = props.router.params;
  const question = questions[id];

  return {
    // id,
    questionAndUserInfo: formattedQuestion(question, users[question.author], authedUser),
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