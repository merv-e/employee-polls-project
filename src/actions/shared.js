import { getData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "mtsamis";

export function handleData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getData()
        .then(({users, questions, authedUser}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));      //bunu login'de dispatch edecegiz galiba :)       
            dispatch(hideLoading());
        })
    }
};

