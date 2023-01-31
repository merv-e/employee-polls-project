import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";
import {Link, useNavigate} from "react-router-dom";

const Polls = (props) => {
  
  const navigate = useNavigate();

    // when clicked it'll take us to the poll itself. 
  const showPoll = (e, id ) => {
     e.preventDefault();
      navigate(); 
      // return redirect(`/question/${props.id}`);    
  };
    
  const {author, name, timestamp} = props.question;
    
  return (
    <>
    {/* {
      !isClicked 
      ? ( */}
      <div>
        <p>{author}</p>
        <span>{name} </span>
        <p>{timestamp}</p>
        <Link to={`/question/${props.id}`}
          className="btn" 
          // onClick={(e, id) => showPoll(e, id)}
        >
          Show poll
        </Link>
    </div>
    {/* )
    : ( */}
       {/* <Poll 
        id={props.id}
       />
      ) 
    } */}
  </>
    )
};

const mapStateToProps = ({authedUser, users, questions}, prop) => { //we can use {id} instead of prop.

  
    const question = questions[prop.id];
    return {
        question: formattedQuestion(question, users[question.author], authedUser),
    }
};

export default connect(mapStateToProps)(Polls);
