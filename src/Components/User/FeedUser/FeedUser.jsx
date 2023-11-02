import React from 'react';
import FeedUserPhotos from './FeedUserPhotos';
import FeedModal from '../../Feed/FeedModal';

const FeedUser = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedUserPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default FeedUser;
