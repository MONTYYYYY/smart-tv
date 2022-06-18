import React from 'react';
import formatDate from '../../helpers/date';
import { IPhoto } from '../../helpers/interfaces';
import InfoCardStyles from './styles';

interface InfoCardProps {
    photo : IPhoto;
    visible : boolean;
}
function InfoCard({ photo, visible }: InfoCardProps) {
  const {
    likes,
    created_at: createdAt,
    description,
    user,
  } = photo;
  return (
    <InfoCardStyles.Container className={`${visible ? 'elementToFadeIn' : 'elementToFadeOut'} backdrop-blur`}>
      <div>
        <p>
          {description && (
            <>
              ⚡
              {' '}
              {description}
            </>
          ) }
        </p>
        <p>
          👍
          {' '}
          {likes}
        </p>
        <p>
          ⏱
          {' '}
          Created:
          {formatDate(createdAt)}
        </p>
        <div className="center-child-items">
          <InfoCardStyles.ProfileImage src={user.profile_image.small} alt={user.name} />
          <b>{photo.user.name}</b>
          {' '}
          {photo.user.username}
        </div>
      </div>

    </InfoCardStyles.Container>
  );
}

export default InfoCard;
