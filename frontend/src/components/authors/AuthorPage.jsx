import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as authorActions from "../../store/authorsReducer";
import { useParams } from "react-router-dom";

function AuthorPage() {

    const dispatch = useDispatch();
    const { authorId } = useParams();

    const author = useSelector(state => state.authors[authorId]);

    useEffect(() => {
        dispatch(authorActions.fetchAuthor(authorId));
    }, [dispatch, authorId]);

    if (!author) return null;

    return (
        <>
            <h1>Author Page</h1>
            <h2>{author.firstName} {author.lastName}</h2>
            <p>Bio: {author.bio}</p>
        </>
    )
}

export default AuthorPage;
