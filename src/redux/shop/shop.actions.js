import { actionType } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase';

export const fetchCollectionsStart = () => ({
  type: actionType.FETCHING_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: actionType.FETCHING_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: actionType.FETCHING_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(err => dispatch(fetchCollectionsFailure(err.message)));
  }
}