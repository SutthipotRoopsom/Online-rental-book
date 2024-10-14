// src/pages/SearchResults.jsx
import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar'; // Import the SearchBar component

const SearchResults = ({ books, onRent, onSearch }) => {
    const [filteredBooks, setFilteredBooks] = useState(books);

    const handleSearch = (query) => {
        const results = books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBooks(results);
    };

    return (
        <div>
            <h2>Search Results</h2>
            <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar here */}
            <div className="book-list">
                {filteredBooks.map(book => (
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
