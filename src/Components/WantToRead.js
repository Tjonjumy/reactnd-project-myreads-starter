import React from 'react';
import Book from './Book';

const WantToRead= (props) => {
    const {books, onUpdateShelf} = props;

    const lstWantToReadBooks = books.map(book => {
        return (
            <Book key={book.title} book={book} onUpdateShelf = {onUpdateShelf} />
        )});

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
                {
                    lstWantToReadBooks.length > 0 &&
                    (<ol className="books-grid">
                        {lstWantToReadBooks}
                    </ol>)
                }
                {
                    lstWantToReadBooks.length === 0 &&
                    <div>No books on the want to read bookshelf.</div>
                }
            </div>
        </div>
    );
}

export default WantToRead;