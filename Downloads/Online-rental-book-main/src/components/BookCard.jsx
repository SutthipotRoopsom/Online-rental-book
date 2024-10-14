// src/components/BookCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, buttonLabel, onRent, showDetails }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const shortDescription = book.description.length > 100
        ? book.description.substring(0, 100) + '...' 
        : book.description;

    return (
        <div className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p className="book-description">
                <strong>Description:</strong> 
                {isExpanded ? book.description : shortDescription}
                {book.description.length > 100 && (
                    <button className="read-more" onClick={handleToggleDescription}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </p>
            {onRent && (
                <button className="rent-button" onClick={() => onRent(book.id)}>
                    {buttonLabel}
                </button>
            )}
            {showDetails && (
                <Link to={`/books/${book.id}`} className="view-details-button">View Details</Link>
            )}
        </div>
    );
};

export default BookCard;
