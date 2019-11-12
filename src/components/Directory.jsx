import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../redux/directory/directory.selectors';

import MenuItem from './MenuItem';

const Directory = ({ directory }) => (
    <ul className="directory-menu">
        {directory.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} { ...otherSectionProps } />
        ))}
    </ul>
)

const mapStateToProps = createStructuredSelector({
    directory: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);