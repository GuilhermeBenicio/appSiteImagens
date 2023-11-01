import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.pathFotoPost} />
      <span>{photo.curtidas.length}</span>
    </li>
  );
};

export default FeedPhotosItem;
