import { connect } from "react-redux";
import Polls from "./Polls";

const Home = (props) => {
  // console.log(props.authedUser);  undefined.

  return (
    <div>
      <h2 className="center">New Polls</h2>  
      <ul className="container">
      {
        props.questionIds.map(qid => (
          <li className="poll-list" key={qid}>
            <Polls id={qid} /> 
          </li>
        ))
      }
      </ul>
      <h2 className="center">Completed Polls</h2>
    </div>
  )
};

const mapStateToProps = ({questions}) => ({
    questionIds : Object.keys(questions)
     .sort((x, y) => 
        questions[y].timestamp - questions[x].timestamp
     )
    //TODO : timestamps are not defined yet. Maybe create a helper file, like in the Udacity course?
});

export default connect(mapStateToProps)(Home)
