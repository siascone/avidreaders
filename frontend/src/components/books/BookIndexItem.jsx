// import AuthorItem from "../authors/AuthorItem"

function BookIndexItem( { book } ) {

    return (
        <>
            <li>
                <p>Title: {book.title}. By: {book.author}</p>
            </li>
        </>
    )
}

export default BookIndexItem