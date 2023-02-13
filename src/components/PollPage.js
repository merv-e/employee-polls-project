import { connect } from "react-redux";
import { withRouter } from "../utils/helpers";
import ErrorPage from "./ErrorPage";
import Poll from "./Poll";
import { Navigate } from "react-router-dom";

const PollPage = (props) => {

    if(props.id !== null) {
        Navigate(`/question/${props.id}`)
    };

  return (
    <>
    { (props.qid === undefined || props.question === undefined ) 
    ? <ErrorPage/>
    : <Poll />
    }
  </>
  )
};

const mapStateToProps = ({questions, users, authedUser}, props) => {

    const {id} = props.router.params;
    const question = questions[id];

    return {
        qid: id,
        // questions,
        question,
        // users,
        // authedUser,
    }
};

export default withRouter(connect(mapStateToProps)(PollPage))


// {/* ? */}
        
//       {/* : <Poll/> */}