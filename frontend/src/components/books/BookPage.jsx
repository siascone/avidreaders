import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as bookActions from '../../store/booksReducer';
import { useParams } from "react-router-dom";

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
            <div>
                <h2>{book.title}</h2>
                <h3>{book.subtitle}</h3>
                <p>{book.authorId}</p>
                <p>{book.summary}</p>
            </div>
        </>
    )
}

export default BookPage