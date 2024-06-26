import {RECEIVE_BOOK} from './booksReducer';

const RECEIVE_AUTHOR = 'authors/receiveAuthor';

const receiveAuthor = (author) => {
    return {
        type: RECEIVE_AUTHOR,
        payload: author
    }
}

export const fetchAuthor = (authorId) => async dispatch => {
    const res = await fetch(`/api/authors/${authorId}`);

    const data = await res.json();

    dispatch(receiveAuthor(data.author));

    return res;
}


function authorsReducer(state = {}, action) {
    let nextState = { ...state };

    switch(action.type) {
        case RECEIVE_AUTHOR:
            nextState[action.payload.id] = action.payload;
            return nextState;
        // case RECEIVE_BOOKS:
            
        case RECEIVE_BOOK:
            console.log(action.payload)
            nextState[action.payload.book.authorId] = {name: action.payload.book.author};
            return nextState;
        default:
            return state;
    }

}
export default authorsReducer;