import {ActionTypes} from "../constants/actionTypes";

const initialState = {
    books:[],
}
export const bookReducer = (state=initialState,{type, payload}) => {
    switch(type){
        case ActionTypes.SET_BOOKS:
            return {...state,books:payload};
        case ActionTypes.CREATE_BOOK:
            return {...state}    
        default:
            return state;
    }
};

export const selectedBookReducer = (state={}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_BOOKS:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_BOOK:
            return {...state};
        case ActionTypes.UPDATE_SELECTED_BOOK:
            return {...state,book:payload}
        default:
            return state;
    }
};