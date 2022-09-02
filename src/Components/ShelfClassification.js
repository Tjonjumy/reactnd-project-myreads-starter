import React from 'react';

import '../App.css';

class ShelfClassification extends React.Component {
    render() {
        const { onUpdateShelf, book } = this.props

        return (
            <div className="book-shelf-changer">
                <select onChange = {(e) => onUpdateShelf(book, e.target.value)} value={ book.shelf }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default ShelfClassification;