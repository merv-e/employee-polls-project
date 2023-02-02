// import {saveQuestion} from "../utils/api";
import { useState } from "react";
import { connect } from "react-redux";
import { showLoading } from "react-redux-loading-bar";
import { Navigate, useNavigate } from "react-router-dom";
import {handleAddQuestion} from '../actions/questions'

const NewPoll = ({dispatch , authedUser}) => {

    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");
    
    const navigate = useNavigate();

    // const handleChange = (ev) => {
      // const text1 = ev.target.value;
      // setFirstOption(text1);
    // };
    
    // const handleChangSecOp = (ev) => {
    //   const text2 = ev.target.value;
    //   setSecondOption(text2)
    //   // dispatch()
    // };
    
    const handleSubmit = (e) => {  
      e.preventDefault();
      // dispatch(showLoading());
      dispatch(handleAddQuestion(firstOption, secondOption, authedUser))
      // navigate("/");
      console.log("First Option: ", firstOption);
      console.log("Second Option: ", secondOption);
      // setFirstOption("");
      // setSecondOption("");

    };

  return (
    <div className="poll">
        <h2>Would you rather</h2>
        <form className="form-poll" onSubmit={(e) => handleSubmit(e)}>
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
           disabled=
           {
            firstOption === "" || secondOption === ""
           }>Submit
           </button>
        </form>
    </div>
  )
}

export default connect()(NewPoll)
