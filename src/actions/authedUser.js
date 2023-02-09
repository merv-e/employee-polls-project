import { useNavigate } from "react-router-dom";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
        // authedUser, 
    }
};

