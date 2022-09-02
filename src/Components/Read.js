import React from 'react';
import Book from './Book';

const Read= (props) => {

    const {books, onUpdateShelf} = props;

    const lstReadBooks = books.map(book => {
        return (
            <Book key={book.title} book={book} onUpdateShelf = {onUpdateShelf} />
        )});

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                {
                    lstReadBooks.length > 0 &&
                    (<ol className="books-grid">
                        {lstReadBooks}
                    </ol>)
                }
                {
                    lstReadBooks.length === 0 &&
                    <div>No books on the read bookshelf.</div>
                }
            </div>
        </div>
    );
}

export default Read;