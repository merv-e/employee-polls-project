export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export function setAuthedUser(id) {
    return {
        type: LOG_IN,
        id,
    }
};

export function logOut(id) {
    return {
        type: LOG_OUT,
        id,
    }
};