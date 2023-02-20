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
    <div className="form-poll">
        <h2>Would you rather</h2>
        <form className="form-poll" onSubmit={handleSubmit}>
          {/* <label for="fOption">First Option</label> */}
          <input
           name="fOption" 
           value={firstOption}
           onChange={(ev) => setFirstOption(ev.target.value)}
           data-testid="first-option-input"
           placeholder="Please write down your first option"
           />
          
          {/* <label for="sOption">
          Second Option</label> */}
          <input 
           name="sOption" 
           value={secondOption}
           data-testid="second-option"
           onChange={(ev) => setSecondOption(ev.target.value)} 
           placeholder="Please write down your second option"
           />
          <button
           type="submit" 
           className="btn" 
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
