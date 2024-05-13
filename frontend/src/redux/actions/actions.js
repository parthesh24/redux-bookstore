import { ActionTypes } from "../constants/actionTypes"

export const setBooks = (books) =>{
    return {
        type:ActionTypes.SET_BOOKS,
        payload: books,
    };
}

export const selectedBook = (book) =>{
    return{
        type: ActionTypes.SELECTED_BOOKS,
        payload: book,
    }
}

export const removeSelectedBook = () =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_BOOK,
    }
}

export const updateSelectedBook = (book) =>{
    return{
        type: ActionTypes.UPDATE_SELECTED_BOOK,
        payload: book
    }
}

export const createBook = () =>{
    return{
        type: ActionTypes.CREATE_BOOK,
    }
}