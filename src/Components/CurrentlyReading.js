import React from 'react';
import Book from './Book';

const CurrentlyReading = (props) => {
    const {books, onUpdateShelf} = props;
    const lstCurrentlyBooks = books.map(book => {
        return (
            <Book key={book.id} book={book} onUpdateShelf = {onUpdateShelf} />
        )});

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                {
                    lstCurrentlyBooks.length > 0 &&
                    (<ol className="books-grid">
                        {lstCurrentlyBooks}
                    </ol>)
                }
                {
                    lstCurrentlyBooks.length === 0 &&
                    <div>No books on the currently bookshelf.</div>
                }
            </div>
        </div>
    );
}

export default CurrentlyReading;