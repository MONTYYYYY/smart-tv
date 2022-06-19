import React from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
import LazyImage from 'react-lazy-progressive-image';
import PhotoStyles from './styles';
import { IPhoto } from '../../helpers/interfaces';
import { SoundTracks } from '../../assets';
import InfoCard from '../InfoCard/InfoCard';
import { useAppSelector } from '../../helpers/hooks';
import { selectTv } from '../../redux/slices/tvSlice';

interface IPhotoProps {
  photo : IPhoto;
  selectedGridItem : string;
  setSelectedGridItem: React.Dispatch<React.SetStateAction<string>>;
}

function Photo({ photo, selectedGridItem, setSelectedGridItem } :IPhotoProps) {
  const { isPhotosInfoDisplayed } = useAppSelector(selectTv);
  const [play] = useSound(SoundTracks.SideClick);
  const handlePhotoClick = () => {
    setSelectedGridItem(photo.id);
    play();
  };
  return (
    <PhotoStyles.Container className={`photo-image-container ${selectedGridItem === photo?.id ? 'selected' : ''}`} onClick={handlePhotoClick}>
      <InfoCard photo={photo} visible={isPhotosInfoDisplayed} />
      <LazyImage
        placeholder={photo?.urls.thumb}
        src={photo?.urls.regular}
      >
        {(src : string, loading : boolean) => (
          <PhotoStyles.PhotoImage
            className="photo-image"
            src={src}
            alt={photo?.alt_description || photo?.description}
            isLoading={loading}
          />
        )}
      </LazyImage>
    </PhotoStyles.Container>
  );
}

Photo.defaultProps = {
  photo: null,
};

Photo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  photo: PropTypes.object,
};

export default Photo;
