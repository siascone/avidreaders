// import AuthorItem from "../authors/AuthorItem"

import ReadForm from "../reads/ReadForm"

function BookIndexItem( { book } ) {

    return (
        <>
            <li>
                <p>Title: {book.title}. By: {book.author}</p>
                <ReadForm bookId={book.id}/>
            </li>
        </>
    )
}

export default BookIndexItem