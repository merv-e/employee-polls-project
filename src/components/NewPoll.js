import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {handleAddQuestion} from '../actions/questions'
// import { withRouter } from "../utils/helpers";

const NewPoll = (props) => {

  const navigate = useNavigate();

  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  
  const {dispatch ,authedUser} = props; 
    
    const handleSubmit = (e) => { 
      e.preventDefault();
      dispatch(handleAddQuestion({
        optionOneText : firstOption, 
        optionTwoText : secondOption, 
        author: authedUser,
      }))
      setFirstOption("");
      setSecondOption("");
      navigate("/");
    };

  return (
    <div className="poll">
        <h1>Would you rather ...</h1>
        <form className="new-poll-form" onSubmit={handleSubmit}>
          <label 
           className="fOptionText"
           htmlFor="fOption"
           >First Option
          </label>
          <input 
           className="fOption"
           name="fOption" 
           value={firstOption}
           onChange={(ev) => setFirstOption(ev.target.value)}
           data-testid="first-option-input"
           placeholder="Please write down your first option"
           />
          
          <label
           className="sOptionText" 
           htmlFor="secOption"
           >Second Option
          </label>
          <input
           className="sOption"
           name="secOption" 
           value={secondOption}
           data-testid="second-option-input"
           onChange={(ev) => setSecondOption(ev.target.value)} 
           placeholder="Please write down your second option"
           />
          <button
           data-testid = "submitBtn"
           type="submit" 
           className="btn btn-secondary new-poll-btn" 
           onClick={handleSubmit} 
           disabled=
           {
            firstOption === "" || secondOption === ""
           }
          >Submit
           </button>
        </form>
    </div>
  )
}

const mapStateToProps = ({authedUser, questions, users }, props) => {

  // const { id } = props.router.params;
  // const question = questions[id];

  return {
    // id,
    authedUser,
  }
  
};

// export default withRouter(connect(mapStateToProps)(NewPoll))
export default connect(mapStateToProps)(NewPoll)
