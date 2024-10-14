// src/pages/Checkout.jsx
import React, { useState } from 'react';
import "../styles/Checkout.css";

const Checkout = ({ rentedBooks, onOrder, setRentedBooks }) => {
    const [rentalDays, setRentalDays] = useState({}); // State to hold rental days for each book

    const handleDaysChange = (id, days) => {
        setRentalDays(prev => ({ ...prev, [id]: days }));
    };

    const totalPrice = rentedBooks.reduce((total, book) => total + (book.price * (rentalDays[book.id] || 1)), 0); // Calculate total based on rental days

    const handleOrder = () => {
        const orderedBooks = rentedBooks.map(book => ({
            ...book,
            expiration: new Date(Date.now() + (rentalDays[book.id] || 1) * 24 * 60 * 60 * 1000), // Set expiration based on rental days
            orderDate: new Date(),
        }));
        onOrder(orderedBooks); // Pass the ordered books with updated expiration
    };

    return (
        <div className="checkout-container">
            <h1 className="checkout-header">Checkout</h1>
            <h2>Rented Books:</h2>
            <ul className="checkout-list">
                {rentedBooks.map((book) => (
                    <li key={book.id} className="checkout-item">
                        <span>{book.title} - Price per day: {book.price} Baht</span>
                        <div className="rental-days-input">
                            <label>
                                Days to rent:
                                <input 
                                    type="number" 
                                    min="1" 
                                    defaultValue={rentalDays[book.id] || 1} 
                                    onChange={(e) => handleDaysChange(book.id, e.target.value)} 
                                />
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
            <h3>Total Price: {totalPrice} Baht</h3>
            <button className="place-order-button" onClick={handleOrder}>Place Order</button>
        </div>
    );
};

export default Checkout;
