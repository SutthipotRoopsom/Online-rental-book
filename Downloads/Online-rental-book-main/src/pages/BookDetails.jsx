// src/pages/BookDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = ({ books }) => {
    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id));

    if (!book) {
        return <h2>Book not found</h2>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <img src={book.image} alt={book.title} />
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Price:</strong> ${book.price}</p>
        </div>
    );
};

export default BookDetail;
