import {useLocation, useNavigate, useParams} from 'react-router-dom';

function calculatePercentage(numberOfVotesPerOption, total ) {
    if (numberOfVotesPerOption !== 0 && total !==0) {
        return  (100 * numberOfVotesPerOption)/total;
    }
    return ""; // return 0 or "" or null?
};

function getDate(timestamp) {
  return new Date(timestamp).toLocaleString();
};

export function withRouter (Component) {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

export function formattedQuestion (question, user, authedUser) {
  
  const { id, optionOne, optionTwo, timestamp, author } = question;

  const {name, avatarURL, answers} = user;
   
  const votesForOptionOne = optionOne.votes;
  const votesForOptionTwo = optionTwo.votes;
  const totalNumOfVotes  = optionOne.votes + optionTwo.votes;
  
  const text1 = optionOne.text
  const text2 = optionTwo.text;

  const numOfVotesForOptionOne = votesForOptionOne.length;
  const numOfVotesForOptionTwo = votesForOptionTwo.length;
  
  return {
    uid: authedUser,
    qid : id,
    name,
    author,
    text1,
    text2,
    timestamp : getDate(timestamp),
    avatar: avatarURL,
    votesForOptionOne,
    votesForOptionTwo,

    numOfVotesForOptionOne,
    numOfVotesForOptionTwo,
    percentageOptionOne: calculatePercentage(numOfVotesForOptionOne, totalNumOfVotes),
    percentageOptionTwo: calculatePercentage(numOfVotesForOptionTwo, totalNumOfVotes),
    
    answersOfUser : user.answers,
    questionsOfUser : user.questions, 

    /* TODO : calculate percentage later. */
    // hasUserVoted: votes.includes(authedUser),
    }
  }

 