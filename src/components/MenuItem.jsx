import React from 'react';

export const MenuItem = ({ id, title, imageUrl, size }) => (
    <li className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </li>
)