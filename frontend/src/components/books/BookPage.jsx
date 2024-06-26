import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as bookActions from '../../store/booksReducer';
import { useParams } from "react-router-dom";
import AuthorItem from "../authors/AuthorItem";

function BookPage() {
    const dispatch = useDispatch();
    const { bookId } = useParams();

    const book = useSelector(state => state.books[bookId])

    useEffect(() => {
        dispatch(bookActions.fetchBook(bookId));
    }, [dispatch, bookId]);

    if (book === undefined ) return null;

    return (
        <>
            <h1>Book Page</h1>
            <div>
                <h2>Title: {book.title}</h2>
                <h3>Subtitle: {book.subtitle}</h3>

                
                <AuthorItem authorId={book.authorId} />
                

                <p>Summary: {book.summary}</p>
            </div>
        </>
    )
}

export default BookPage