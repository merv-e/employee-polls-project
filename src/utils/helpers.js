function calculatePercentage(numberOfVotesPerOption, total ) {
    if (numberOfVotesPerOption !== 0 && total !==0) {
        return  (100 * numberOfVotesPerOption)/total;
    }
    return ""; // return 0 or "" or null?
};


export function formattedQuestion (question, users, authedUser) {
  
  const { id, optionOne, optionTwo, timestamp, author } = question;

  const {  avatarURL } = author; //is this really needed here ?

  const votesForOptionOne = optionOne.votes;
  const votesForOptionTwo = optionTwo.votes;
  const totalNumOfVotes  = optionOne.votes + optionTwo.votes;

  const text1 = optionOne.text
  const text2 = optionTwo.text;

  const numOfVotesForOptionOne = votesForOptionOne.length;
  const numOfVotesForOptionTwo = votesForOptionTwo.length;
  return {
    id,
    author,
    text1,
    votesForOptionOne,
    numOfVotesForOptionOne,
    text2,
    numOfVotesForOptionTwo,
    votesForOptionTwo,
    timestamp,
    /* TODO : calculate percentage later. */
    // percentageForOptionOne: calculatePercentage(numOfVotesForOptionOne, totalNumOfVotes),
    // percentageForOptionTwo: calculatePercentage(numOfVotesForOptionTwo, totalNumOfVotes),
    // hasUserVoted: votes.includes(authedUser),
    avatar: avatarURL,  //TODO : find avatars for users.
    }
  }