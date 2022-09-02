import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css'
import * as BooksAPI from './BooksAPI.js';
// Import Components
import MainPage from './Components/MainPage';
import SearchPage from './Components/Search/SearchPage';

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
                books
            }))
        })
    }

    render() {

        // Update shelf
        const onUpdateShelf = (book, shelf) => {  
            BooksAPI.update(book, shelf)
            .then((res) => {
                book.shelf = shelf
                this.setState((currentState) => ({
                    books: currentState.books.filter((e) => {
                    return e.id !== book.id
                    }).concat([book])
                }))
            })
        }

        return (
            <Routes>
                <Route exact path="/" element={
                    <MainPage 
                        books={this.state.books}
                        onUpdateShelf={onUpdateShelf}
                    />
                }/>
                <Route path="/search" element={
                    <SearchPage 
                        books={this.state.books}
                        onUpdateShelf={onUpdateShelf}
                    />
                }/>
            </Routes>
        );
    }
}

export default BooksApp;