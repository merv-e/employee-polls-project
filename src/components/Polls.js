import { connect } from "react-redux";
import { formattedQuestion } from "../utils/helpers";
import {useNavigate, redirect} from "react-router-dom";
import Poll from "./Poll"
import { useState } from "react";


const Polls = (props) => {
  
  const navigate = useNavigate();
  // const [isClicked, setIsClicked]= useState(false);

    // when clicked it'll take us to the poll itself. 
    const showPoll = ({ id }) => {
        navigate(`/question/${props.id}`); 
        // setIsClicked(true)
        // return redirect(`/question/${props.id}`);    
    };
    
    const {author, name, timestamp } = props.question;
    
  return (
    <div>
        <p>{author} </p>
        <span>{name} </span>
        <p>{timestamp}</p>
        <button 
          className="btn" 
          onClick={  showPoll 
          // : 
          //   !isClicked ? (<Poll 
          // id={props.id}
          // author={author}
          // />) 
          }
        >
          Show poll
        </button>
    </div>
    )
};

const mapStateToProps = ({authedUser, users, questions}, prop) => { //we can use {id} instead of prop.

    const question = questions[prop.id];
    // console.log(prop.id);
    // const {username} = users[question.author];  
    //o kisinin username degerlerine karsilik geliyor bu' : o da id : username seklinde verilmis. 

    //Dahası users[id].name etc ile id,name, password ce avatarUrL'lerine ulasabiliyorsun

    return {
        id: prop.id,
        question: formattedQuestion(question, users[question.author], authedUser),
        author : users[question.author],
        optionOne : question.optionOne.text,
        optionTwo : question.optionTwo.text,
    }
};


export default connect(mapStateToProps)(Polls);
