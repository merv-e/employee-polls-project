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

        const successfulUserLogin = Object.values(users).includes(u => u.id === id && u.password === password)
        
        if (successfulUserLogin) {
         return dispatch(setAuthedUser(id))
         // navigate("/") 
        }

        
        else alert("Incorrect password or username"); 
    }
};

