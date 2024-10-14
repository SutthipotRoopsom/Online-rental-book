// src/pages/UserProfile.jsx
import React from 'react';
import "../styles/UserProfile.css"; // Ensure you have a CSS file for styling

const UserProfile = ({ previouslyOrderedBooks = [] }) => {
    const sortedOrderedBooks = Array.isArray(previouslyOrderedBooks)
        ? previouslyOrderedBooks.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
        : [];

    return (
        <div className="user-profile-container">
            <h2 className="user-profile-header">User Profile</h2>
            <h3 className="ordered-books-header">Your Previously Ordered Books:</h3>
            {sortedOrderedBooks.length === 0 ? (
                <p className="no-books-message">No previously ordered books.</p>
            ) : (
                <ul className="ordered-books-list">
                    {sortedOrderedBooks.map((book) => (
                        <li key={book.id} className="ordered-book-item">
                            <span className="book-title">{book.title}</span>
                            <div className="book-details">
                                <span className="order-date">Ordered on: {new Date(book.orderDate).toLocaleDateString()}</span>
                                <span className="expiration-date">Expiration Date: {new Date(book.expiration).toLocaleDateString()}</span>
                                <span className="quantity">Quantity: {book.quantity}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserProfile;
