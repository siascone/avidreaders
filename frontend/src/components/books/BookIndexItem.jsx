function BookIndexItem( { book } ) {
    return (
        <>
            <li>
                <p>Title: {book.title}. By: {book.authorId}</p>
            </li>
        </>
    )
}

export default BookIndexItem