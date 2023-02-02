export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_AUTHOR = 'ADD_QUESTION_AUTHOR';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
};

export function addQuestionAuthor({author, questionId}) {
    return {
      type: ADD_QUESTION_AUTHOR,
      questionId,
      author,
    }
};
