import React from 'react';

import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
    <li className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </li>
)

export default withRouter(MenuItem);