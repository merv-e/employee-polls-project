import { connect } from "react-redux";
import Polls from "./Polls";
import Table from 'react-bootstrap/Table';

const Home = (props) => {
  // console.log(props);
  return (
    <div>
    {/* WHY DOES REACT-BOOTSTRAP NOT WORK?   */}
        <h2 className="center">Polls</h2>
        <Table>
          {/*  responsive="m"
            striped="columns"  */}
          <thead>
            <tr>
              <th>Username</th>
              <th>Date Added</th>
              <th>Poll</th>
            </tr>
          </thead>
            {
              props.questionIds.map(qid => (
                  <Polls id={qid} /> 
              ))
            }
      </Table>
      {/* NOTE : maybe list should be added above and Polls component must be wrapped?  */}
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
