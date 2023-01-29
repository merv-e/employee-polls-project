import { getData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "sarahedo";

export function handleData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID)); // TODO: Authentification should be taken care of!
            dispatch(hideLoading());
        })
    }
};

