import { connect } from "react-redux"; 

const Poll = (props) => {

 const chooseOption = (e) => {
   e.preventDefault();
  // TODOS:
    //navigate -- go to the main page? 
    //also add it to database so that this poll will be shown in the completed polls ---async redux thunk will be used.
 }

//  NOTE: this is the structure for an unanswered poll
  return (
    <div className="poll">
        <h1>A Poll by {props.author}</h1>
        <img src={props.avatar} alt={`Avatar of ${props.author}`} className="avatar"/>
        <h2>Would you rather</h2>
        <div className="options">
          <p>{props.optionOne}</p>
          <button className="btn" onClick={(e) => chooseOption(e)}>Choose</button>
           
          <p>{props.optionTwo}</p>
          <button className="btn" onClick={(e) => chooseOption(e)}>Choose</button>
         
        </div>
    </div>
  )
};


export default connect()(Poll)

//  {/* if the user has voted then show the votes :  */}
          // {
          //   props.answeredQuestionIds.includes(props.id) && <button>Show number of votes</button> && <button>Show percentage of votes</button> 
          // } 



          // {
          //   props.answeredQuestionIds.includes(props.id) && <button>Show number of votes</button> && <button>Show percentage of votes</button> 
          // }