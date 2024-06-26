import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import * as authorActions from '../../store/authorsReducer';

function AuthorItem({ authorId }) {

    const author = useSelector(state => state.authors[authorId]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authorActions.fetchAuthor(authorId));
    }, [dispatch, authorId]);

    if (!author) return null;

    return (
        <>
            <NavLink to={`/authors/${authorId}`}>
                <p>Author: {author.firstName} {author.lastName}</p>
            </NavLink>
        </>
    )
}

export default AuthorItem