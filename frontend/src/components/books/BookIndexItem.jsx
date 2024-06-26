function BookIndexItem( { book } ) {
    console.log(book)
    return (
        <>
            <li>
                <p>Title: {book.title}. By: {book.author}</p>
            </li>
        </>
    )
}

export default BookIndexItem