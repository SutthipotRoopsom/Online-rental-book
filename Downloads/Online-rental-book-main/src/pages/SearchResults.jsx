// src/pages/SearchResults.jsx
import React from 'react';
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom';

const SearchResults = ({ books, onRent }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <div className="book-list">
                {books.map(book => (
                    <BookCard key={book.id} book={book} onRent={onRent} buttonLabel="Rent" />
                ))}
            </div>
            <Link to="/checkout">
                <button>Go to Checkout</button>
            </Link>
        </div>
    );
};

export default SearchResults;
