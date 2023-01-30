export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id, 
    }
}

// export function handleLogin(userName, password) {
//     return (dispatch, getState) => {

//         const {users} = getState();

//         const userLogin = Object.values(users).includes(u => u.id === userName && u.password === password)
        
//         if (userLogin) {
//             return dispatch(setAuthedUser(userLogin))
//         }
//     }
// };

