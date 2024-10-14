// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import UserProfile from './pages/UserProfile';
import Checkout from './components/Checkout';
import CategoryFilter from './components/CategoryFilter';
import BookDetail from './pages/BookDetails';  // Import BookDetail component
import './styles/App.css';
import './styles/BookCard.css';

const App = () => {
    const initialBooks = [
      {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A novel set in the Jazz Age that explores themes of decadence and excess.',
        category: 'Fiction',
        price: 10,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
      },
      {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A novel about the serious issues of rape and racial inequality, seen through the eyes of a child.',
        category: 'Fiction',
        price: 12,
        image: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg'
      },
      {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.',
        category: 'Fiction',
        price: 15,
        image: 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg'
      },
      {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.',
        category: 'Fiction',
        price: 9,
        image: 'https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg'
      },
      {
        id: 5,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description: 'A story about teenage alienation and loss of innocence in post-war America.',
        category: 'Fiction',
        price: 11,
        image: 'https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/1/0/1000237540_front_xxxl_114.jpg'
      },
      {
        id: 6,
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        description: 'A thought-provoking exploration of the history and impact of Homo sapiens.',
        category: 'Non-Fiction',
        price: 20,
        image: 'https://inwfile.com/s-dl/73v5gp.jpg'
      },
      {
        id: 7,
        title: 'Educated',
        author: 'Tara Westover',
        description: 'A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education.',
        category: 'Non-Fiction',
        price: 18,
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg'
      },
      {
        id: 8,
        title: 'Becoming',
        author: 'Michelle Obama',
        description: 'A memoir by the former First Lady of the United States, discussing her life, values, and experiences.',
        category: 'Non-Fiction',
        price: 22,
        image: 'https://m.media-amazon.com/images/I/81KGjsBXQ7L._AC_UF894,1000_QL80_.jpg'
      },
      {
        id: 9,
        title: 'The Immortal Life of Henrietta Lacks',
        author: 'Rebecca Skloot',
        description: 'A nonfiction book that tells the story of Henrietta Lacks and the immortal cell line derived from her cells.',
        category: 'Non-Fiction',
        price: 15,
        image: 'https://m.media-amazon.com/images/I/81coyP8S-ZL._AC_UF1000,1000_QL80_.jpg'
      },
      {
        id: 10,
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        description: 'A self-help book that advocates for a more honest approach to personal development.',
        category: 'Non-Fiction',
        price: 16,
        image: 'https://bci.kinokuniya.com/jsp/images/book-img/97800/97800626/9780062641540.JPG'
      },
      {
        id: 11,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A philosophical book about a shepherd named Santiago who dreams of finding treasure in Egypt.',
        category: 'Fiction',
        price: 14,
        image: 'https://api.chulabook.com/images/pid-71418.jpg'
      },
      {
        id: 12,
        title: 'The Book Thief',
        author: 'Markus Zusak',
        description: 'A novel narrated by Death, telling the story of a young girl in Nazi Germany who finds solace by stealing books.',
        category: 'Fiction',
        price: 13,
        image: 'https://th-test-11.slatic.net/p/efc099a2ba478c823cee6d1825b5eb2e.jpg'
      },
    ];

    const [books, setBooks] = useState(initialBooks);
    const [filteredBooks, setFilteredBooks] = useState(initialBooks);
    const [rentedBooks, setRentedBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const categories = ['All Categories', ...new Set(books.map(book => book.category))];

    const handleSearch = (query) => {
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredBooks(filteredBooks);
    };

    const handleRent = (id) => {
        const rentedBook = filteredBooks.find(book => book.id === id);
        if (rentedBook) {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 7);
            setRentedBooks([...rentedBooks, { ...rentedBook, quantity: 1, expiration: expirationDate, orderDate: new Date() }]);
        }
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All Categories') {
            setFilteredBooks(initialBooks);
        } else {
            const filteredBooks = initialBooks.filter(book => book.category === category);
            setFilteredBooks(filteredBooks);
        }
    };

    const handleOrder = () => {
        const totalPrice = rentedBooks.reduce((total, book) => total + (book.price * book.quantity), 0);
        alert('Order placed! Total Price: ' + totalPrice + '. Your rented books will expire on: ' + rentedBooks[0]?.expiration.toLocaleDateString());
        setRentedBooks([]);
    };

    return (
        <Router>
            <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
            <Routes>
                <Route path="/" element={<Home onSearch={handleSearch} books={filteredBooks} onRent={handleRent} />} />
                <Route path="/search" element={<SearchResults books={filteredBooks} onRent={handleRent} />} />
                <Route path="/profile" element={<UserProfile previouslyOrderedBooks={rentedBooks} />} />
                <Route path="/checkout" element={<Checkout rentedBooks={rentedBooks} onOrder={handleOrder} setRentedBooks={setRentedBooks} />} />
                <Route path="/books/:id" element={<BookDetail books={books} />} /> {/* Add this route */}
            </Routes>
        </Router>
    );
};

export default App;
