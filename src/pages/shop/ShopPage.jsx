import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/CollectionOverview';

const ShopPage = ({ collections }) => (
    <div className="shop-page">
        <h1>Shop Page</h1>
        <CollectionOverview /> 
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);