import { SET_ID } from './actionCreators';

const initialState = {
    id: null
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ID:
            const newState = { ...state };
            return {
                ...newState,
                id: action.id
            };
        default:
            return state;
    }
}