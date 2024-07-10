import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as bookActions from '../../store/booksReducer';
import BookIndexItem from "./BookIndexItem";

function BookIndex() {
    const dispatch = useDispatch();
    const books = useSelector(state => Object.values(state.books));
    const userId = useSelector(state => {

        if (state.session.user) {
            return state.session.user.id;
        } else {
            return null;
        }
    })

    useEffect(() => {
        dispatch(bookActions.fetchBooks());
    }, [dispatch])

    return (
        <>
            <h1>Book Index</h1>
            <ul>
                {books.map(book => {
                    
                    return <NavLink to={`/books/${book.id}`} key={book.id}><BookIndexItem book={book} userId={userId} /></NavLink>
                    
                    })
                }
            </ul>
        </>
    )
}

export default BookIndex;