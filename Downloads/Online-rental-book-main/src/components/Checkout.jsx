import React from 'react';

const Checkout = ({ rentedBooks, onOrder, setRentedBooks }) => {
    const handleIncrease = (id) => {
        const updatedRentedBooks = rentedBooks.map(book =>
            book.id === id ? { ...book, quantity: book.quantity + 1 } : book
        );
        setRentedBooks(updatedRentedBooks);
    };

    const handleDecrease = (id) => {
        const updatedRentedBooks = rentedBooks.map(book =>
            book.id === id ? { ...book, quantity: Math.max(1, book.quantity - 1) } : book
        );
        setRentedBooks(updatedRentedBooks);
    };

    const totalPrice = rentedBooks.reduce((total, book) => total + (book.price * book.quantity), 0);

    return (
        <div>
            <h1>Checkout</h1>
            <h2>Rented Books:</h2>
            <ul>
                {rentedBooks.map((book) => (
                    <li key={book.id}>
                        {book.title} - Price: {book.price} Baht - Quantity: 
                        <button onClick={() => handleDecrease(book.id)}>-</button>
                        {book.quantity}
                        <button onClick={() => handleIncrease(book.id)}>+</button> 
                        - Expires on: {book.expiration.toLocaleDateString()}
                    </li>
                ))}
            </ul>
            <h3>Total Price: {totalPrice} Baht</h3>
            <button onClick={onOrder}>Place Order</button>
        </div>
    );
};

export default Checkout;
