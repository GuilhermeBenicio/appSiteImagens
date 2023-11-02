import React from 'react';
import styles from './FeedUserPhotosItem.module.css';

const FeedUserPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.pathFotoPost} />
      <span>Visualizar</span>
    </li>
  );
};

export default FeedUserPhotosItem;
