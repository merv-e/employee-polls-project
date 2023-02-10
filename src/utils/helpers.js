import {useLocation, useNavigate, useParams} from 'react-router-dom';

function calculatePercentage(numberOfVotesPerOption, total) {
    if (numberOfVotesPerOption !== 0 && total !==0) {
        return (100 * numberOfVotesPerOption/total).toFixed() + "%" ;
      }
      else <p>No one has voted</p>
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
  const total  = votesForOptionOne.length + votesForOptionTwo.length;
  
  const text1 = optionOne.text
  const text2 = optionTwo.text;
  
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

    percentageOptionOne: calculatePercentage(votesForOptionOne.length, total),
    percentageOptionTwo: calculatePercentage(votesForOptionTwo.length, total),
    
    answersOfUser : user.answers,
    questionsOfUser : user.questions, 

    /* TODO : calculate percentage later. */
    // hasUserVoted: votes.includes(authedUser),
    }
  }

 