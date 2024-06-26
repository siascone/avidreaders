import csrfFetch from "./csrf";

export const RECEIVE_BOOKS = 'books/receiveBooks';
export const RECEIVE_BOOK = 'books/receiveBook';

const receiveBooks = (books) => {
    return {
        type: RECEIVE_BOOKS,
        payload: books
    };
};

const receiveBook = (book) => {
    return {
        type: RECEIVE_BOOK,
        payload: book
    };
};

export const fetchBooks = () => async dispatch => {
    const res = await csrfFetch('/api/books');

    const data = await res.json();

    dispatch(receiveBooks(data.books));

    return res;
};

export const fetchBook = (bookId) => async dispatch => {
    const res = await csrfFetch(`/api/books/${bookId}`);

    const data = await res.json();
    
    dispatch(receiveBook(data));

    return res;
}

const initialState = { }

const booksReducer = (state = initialState, action) => {

    let nextState = { ...state }

    switch(action.type) {
        case RECEIVE_BOOK: 
            nextState[action.payload.book.id] = action.payload.book;
            return nextState
        case RECEIVE_BOOKS:
            return { ...nextState, ...action.payload };
        default:
            return state;
    }
};

export default booksReducer;