import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Online Book Rental</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
};

export default Header;
