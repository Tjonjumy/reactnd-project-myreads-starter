import React from 'react';
import { Link } from 'react-router-dom';

import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';

const MainPage = (props) => {
    const {books, onUpdateShelf} = props;
    // Filter list Currently Books
    const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading');
    // Filter list Read Books
    const readBooks = books.filter(book => book.shelf === 'read');
    // Filter list Want To Read Books
    const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead');

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <CurrentlyReading books = {currentlyReadingBooks} onUpdateShelf = {onUpdateShelf} />
                    <Read books = {readBooks} onUpdateShelf = {onUpdateShelf} />
                    <WantToRead books = {wantToReadBooks} onUpdateShelf = {onUpdateShelf} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            
            </div>
        </div>
    );
}

export default MainPage;