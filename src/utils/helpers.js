// function calculatePercentage(numberOfVotesPerOption, total ) {
//     if (numberOfVotesPerOption !== 0 && total !==0) {
//         return  (100 * numberOfVotesPerOption)/total;
//     }
//     return ""; // return 0 or "" or null?
// };

function getDate(timestamp) {
  return new Date(timestamp).toLocaleString();
};

export function formattedQuestion (question, users, authedUser) {
  
  const { id, optionOne, optionTwo, timestamp, author } = question;

  const {  avatarURL } = author; //is this really needed here ?

  const {name} = users;
   
  const votesForOptionOne = optionOne.votes;
  const votesForOptionTwo = optionTwo.votes;
  const totalNumOfVotes  = optionOne.votes + optionTwo.votes;
  
  const text1 = optionOne.text
  const text2 = optionTwo.text;

  const numOfVotesForOptionOne = votesForOptionOne.length;
  const numOfVotesForOptionTwo = votesForOptionTwo.length;
  
  return {
    id,
    name,
    author,
    text1,
    votesForOptionOne,
    numOfVotesForOptionOne,
    text2,
    numOfVotesForOptionTwo,
    votesForOptionTwo,
    timestamp : getDate(timestamp),
    /* TODO : calculate percentage later. */
    // percentageForOptionOne: calculatePercentage(numOfVotesForOptionOne, totalNumOfVotes),
    // percentageForOptionTwo: calculatePercentage(numOfVotesForOptionTwo, totalNumOfVotes),
    // hasUserVoted: votes.includes(authedUser),
    avatar: avatarURL,  //TODO : find avatars for users.
    }
  }

  // export function _authentification ({ id, users, password, name }) {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       users = {
  //         ...users,
  //         [id]: {
  //           ...users[id],
  //           name: hasLiked === true
  //             ? users[id].name.filter((userName) => userName !== e.target.value)
  //             : users[id].likes.concat([authedUser])
  //         }
  //       }
  
  //       res()
  //     }, 500)
  //   })
  // }

  // export function getUserData(users, uid) {
  //   const user = users[uid];
  //   const {name, answers, avatarUrl, id, questions} = user;

  //   //NOTE : answers and questions are objects.
  //   return {
  //     avatarUrl :user.avatarURL,
  //     id: user.id,
  //     name: user.name,
  //     // questions
  //     //answers
  //   }

  // };