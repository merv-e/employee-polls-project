import { connect } from "react-redux";
import Poll from "./Poll";

const Home = (props) => {
    // console.log(props);
  return (
    <div>
        <Poll  /> {/* id={id} */}
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
