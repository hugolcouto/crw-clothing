import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Category from '../category/Category';

import WithSpinner from '../../components/with-spinner/WithSpinner';

import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryPageWithSpinner = WithSpinner(Category);

class ShopPage extends Component {
    unsubscribeFromSnapshop = null;

    state = {
        loading: true
    }

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshop = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route
                exact
                path={`${match.path}`} render={
                    (props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                } />
                <Route
                    path={`${match.path}/:categoryId`}
                    render= {
                        (props) => <CategoryPageWithSpinner isLoading={loading} {...props} />
                    }
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);