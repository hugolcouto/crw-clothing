import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './style'

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...passedProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...passedProps} />
    )
  }
  return Spinner;
}

export default WithSpinner;
