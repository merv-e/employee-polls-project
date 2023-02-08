import { useNavigate } from "react-router-dom";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id, 
    }
}

export function handleLogin(id, password) {
    return (dispatch, getState) => {

        const {users} = getState();
        const navigate = useNavigate();

        const successfulUserLogin = Object.values(users).includes(u => u.id === id && u.password === password)
        
        if (successfulUserLogin === true) {
         return dispatch(setAuthedUser(id))
        //  .then(()=> navigate("/") 
        //  )
        }

        
        else alert("Incorrect password or username"); 
    }
};

