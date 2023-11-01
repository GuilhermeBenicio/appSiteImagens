import React from 'react';
import styles from './FeedUserPhotosItem.module.css';

const FeedUserPhotosItem = ({ photo }) => {
  console.log(photo);
  return (
    <li className={styles.photo}>
      <img src={photo.pathFotoPost} />
      <span>{photo.curtidas.length}</span>
    </li>
  );
};

export default FeedUserPhotosItem;
