import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Category from '../category/Category';

import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(Category);

class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching } = this.props;
        return (
            <div className="shop-page">
                <Route
                exact
                path={`${match.path}`} render={
                    (props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                } />
                <Route
                    path={`${match.path}/:categoryId`}
                    render= {
                        (props) => <CategoryPageWithSpinner isLoading={isCollectionFetching} {...props} />
                    }
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);