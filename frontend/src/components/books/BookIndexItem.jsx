// import AuthorItem from "../authors/AuthorItem"

import ReadForm from "../reads/ReadForm"

function BookIndexItem( { book, userId } ) {

    return (
        <>
            <li>
                <p>Title: {book.title}. By: {book.author}</p>
                <ReadForm bookId={book.id} userId={userId}/>
            </li>
        </>
    )
}

export default BookIndexItem