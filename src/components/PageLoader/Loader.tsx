import React from 'react';
import Images from '../../assets';
import LoaderStyles from './styles';

function Loader() {
  return (
    <LoaderStyles.OverLay className="center-child-items">
      <img src={Images.LoadingSpinner} alt="Loading" />
    </LoaderStyles.OverLay>
  );
}

export default Loader;
