// src/pages/UserProfile.jsx
import React from 'react';

const UserProfile = ({ previouslyOrderedBooks = [] }) => {
    // Check if previouslyOrderedBooks is defined and is an array before sorting
    const sortedOrderedBooks = Array.isArray(previouslyOrderedBooks)
        ? previouslyOrderedBooks.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
        : []; // Fallback to an empty array if undefined or not an array

    return (
        <div>
            <h2>User Profile</h2>
            <h3>Your Previously Ordered Books:</h3>
            {sortedOrderedBooks.length === 0 ? (
                <p>No previously ordered books.</p>
            ) : (
                <ul>
                    {sortedOrderedBooks.map((book) => (
                        <li key={book.id}>
                            {book.title} - Ordered on: {new Date(book.orderDate).toLocaleDateString()} - Expiration Date: {new Date(book.expiration).toLocaleDateString()} - Quantity: {book.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserProfile;
