import React from 'react';
import FeedUserPhotos from './FeedUserPhotos';
import FeedModal from '../../Feed/FeedModal';

const FeedUser = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedUserPhotos user={user} setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default FeedUser;
