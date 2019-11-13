import React from 'react';
import CollectionItem from '../../components/collection-item/Collection-item';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { match } from 'react-router-dom';
import './Category.scss';

const Category = ({ collection }) => {
  console.log(collection);
  return (
  <div className="category">
    <h2>Category Page</h2>
  </div>
)};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Category);
