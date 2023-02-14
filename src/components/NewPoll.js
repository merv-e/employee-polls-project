import { useState } from "react";
import { connect } from "react-redux";
import { showLoading } from "react-redux-loading-bar";
import { Navigate, useNavigate } from "react-router-dom";
import { logOut } from "../actions/authedUser";
import {handleAddQuestion} from '../actions/questions'
import { withRouter } from "../utils/helpers";

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

  const { id } = props.router.params;
  // const question = questions[id];

  return {
    id,
    authedUser,
  }
  
};

export default withRouter(connect(mapStateToProps)(NewPoll))
