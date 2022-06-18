import React from 'react';
import LoaderStyles from './styles';
import Images from '../../assets/index';

function Loader() {
  return (
    <LoaderStyles.Container className="center-child-items">
      <img src={Images.LoadingSpinner} alt="Loading" />
    </LoaderStyles.Container>
  );
}

export default Loader;
