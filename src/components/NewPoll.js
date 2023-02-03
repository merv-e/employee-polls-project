import { useState } from "react";
import { connect } from "react-redux";
import { showLoading } from "react-redux-loading-bar";
import { Navigate, useNavigate } from "react-router-dom";
import {handleAddQuestion} from '../actions/questions'
import { withRouter, formattedQuestion } from "../utils/helpers";


const NewPoll = (props) => {

  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  
  const navigate = useNavigate();
  const {dispatch ,authedUser} = props; 
    
    // const handleChange = (ev) => {
      // const text1 = ev.target.value;
      // setFirstOption(text1);
      // };
    
    // const handleChangSecOp = (ev) => {
    //   const text2 = ev.target.value;
    //   setSecondOption(text2)
    //   // dispatch()
    // };
    // console.log(firstOption); 
    // console.log(secondOption); 
    // console.log(props.id);
    
    // console.log(authedUser); => undefined
    const handleSubmit = (e) => { 
      e.preventDefault();
      dispatch(handleAddQuestion({
        // author: authedUser
        // firstOption : props.question.optionOne.text,
        // secondOption: props.question.optionOne.text,
      }))
      // setFirstOption("");
      // setSecondOption("");
      
      // navigate("/");

      // console.log("First Option: ", firstOption);
      // console.log("Second Option: ", secondOption);

    };

  return (
    <div className="poll">
        <h2>Would you rather</h2>
        <form className="form-poll" onSubmit={handleSubmit}>
          <input 
           value={firstOption}
           onChange={(ev) => setFirstOption(ev.target.value)}placeholder="First Option"/>
          <input 
           value={secondOption}
           onChange={(ev) => setSecondOption(ev.target.value)} 
           placeholder="Second Option"/>
          <button
           type="submit" 
           className="btn" 
           onClick={handleSubmit} 
          //  disabled=
          //  {
          //   firstOption === "" || secondOption === ""
          //  }
          >Submit
           </button>
        </form>
    </div>
  )
}

const mapStateToProps = ({authedUser, questions, users }, props) => {

  const { id } = props.router.params;
  const question = questions[id];

  return {
    // question : formattedQuestion(question, users[question.author]),
    id,
    authedUser,
  }
  
};

export default withRouter(connect(mapStateToProps)(NewPoll))
