// import {saveQuestion} from "../utils/api";
import { useState } from "react";

const NewPoll = (props) => {

    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const handleChangeFirstOp = (ev) => {
      const text1 = ev.target.value;
      setFirstOption(text1);
      // dispatch()
    };
    
    const handleChangSecOp = (ev) => {
      const text2 = ev.target.value;
      setSecondOption(text2)
      // dispatch()
    };
    
    const handleSubmit = (e) => {  
      e.preventDefault();
      setFirstOption("");
      setSecondOption("");
      console.log("First Option: ", firstOption);
      console.log("Second Option: ", secondOption);

      // TODO : 
      // 1- send it to the store => 
      // 2- redirect to homepg
      // dispatchEvent(handle)    
    };

  return (
    <div className="poll">
        <h2>Would you rather</h2>
        <form className="form-poll" onSubmit={(e) => handleSubmit(e)}>
          <input 
           value={firstOption}
           onChange={(e) => handleChangeFirstOp(e)}placeholder="First Option"/>
          <input 
           value={secondOption}
           onChange={(e) => handleChangSecOp(e)} 
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

export default NewPoll
