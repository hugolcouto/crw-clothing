import React from 'react';
import './header.scss';
import { ReactComponent as Logo } from './crown.svg';
import { Link } from 'react-router-dom';

const header = () => (
    <div className="header">
        <Link to="/"><Logo className="logo"/></Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
        </div>
    </div>
);

export default header;