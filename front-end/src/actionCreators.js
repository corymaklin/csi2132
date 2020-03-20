export const SET_ID = "SET_ID";

export function setId(id) {
    return ({
        type: SET_ID,
        id: id
    });
}