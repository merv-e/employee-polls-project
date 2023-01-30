import { connect } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { formattedQuestion } from "../utils/helpers";

const Poll = (props) => {

  const navigate = useNavigate();
  const chooseOption = (e) => {
     e.preventDefault();
   // TODOS:
   //navigate -- go to the main page? 
   //also add it to database so that this poll will be shown in the completed polls ---async redux thunk will be used.

  //  navigate("/")
  }

  // const {name} = props.username;
  // console.log(props.username);
  

  // const {author, name, optionOne, optionTwo } = props.question;
  // avatar

  /* Su anda author ve name Polls componentinden geliyor ancak bu sadece deneme amacli. */
  return (
    <div className="poll">
        {/* { console.log(author) } */}
        <h1>A Poll by {props.author}</h1>
        <span> Name : {props.name}</span>
        <img src={props.avatar} alt={`Avatar of ${props.author}`} className="avatar"/>
        <h2>Would you rather</h2>
        <div className="options">
          <p>{props.optionOne}</p>
          <button className="btn" onClick={(e) => chooseOption(e)}>Choose</button>
           
          <p>{props.optionTwo}</p>
          <button className="btn" onClick={(e) => chooseOption(e)}>Choose</button>
         
        </div>
    </div>
    /* div yerine Link mi olmasi gerek?  */
  )
};



/* Not : su anda sanki verileri yukaridan alacakmisiz gibi duzenlendi, ancak boyle calismiyor kod */
const mapStateToProps = ({authedUser, }, {id ,question, optionOne, optionTwo, author }) => {

  // questions, users

  // const question = questions[id];
  // const user = users[question.author]; //userId gibi.

  return {
    // question: formattedQuestion(question, users[question.author], authedUser),
    author, 
    //: users[question.author],
    optionOne,
    //  : question.optionOne.text,
     optionTwo,
    //  : question.optionTwo.text,
    // user,     //full obj about the user. 
    // question: formattedQuestion(question, users[question.author], authedUser),
    // fullname:   question.name,
    // name : question.author,
    // name: question.name,
 
    // avatar : users[username].avatarURL,

  }
  
};


export default connect(mapStateToProps)(Poll)

//  {/* if the user has voted then show the votes :  */}
          // {
          //   props.answeredQuestionIds.includes(props.id) && <button>Show number of votes</button> && <button>Show percentage of votes</button> 
          // } 



          // {
          //   props.answeredQuestionIds.includes(props.id) && <button>Show number of votes</button> && <button>Show percentage of votes</button> 
          // }