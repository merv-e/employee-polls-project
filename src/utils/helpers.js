// function calculatePercentage(numberOfVotesPerOption, totalNumofVotes ) {
//     if (numberOfVotesPerOption !== 0 && totalNumofVotes !==0) {
//         return  (100 * numberOfVotesPerOption)/totalNumofVotes;
//     }
//     return 0;
// };


export function formattedQuestion (question, author, authedUser) {
  const { id, votes, text, timestamp } = question

  const { name, avatarURL } = author

  return {
    id,
    name,
    text,
    timestamp,
    votes: votes.length,
    // percentage: calculatePercentage(),
    hasUserAnswered : votes.includes(authedUser),
    avatar: avatarURL,  //TODO : find avatars for users.
    }
  }