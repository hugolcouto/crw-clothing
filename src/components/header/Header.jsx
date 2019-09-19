import React from 'react';
import './header.scss';
import { ReactComponent as Logo } from './crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase';

const header = ({ currentUser }) => (
    <div className="header">
        <Link to="/"><Logo className="logo"/></Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            {/* <Link className="option" to="/shop">Contact</Link> */}
            { currentUser ?
                <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                :
                <Link className="option" to="/signin">Sign in</Link>
            }
        </div>
    </div>
);

export default header;