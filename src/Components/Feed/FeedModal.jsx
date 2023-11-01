import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { GET_POST_ID } from '../../api';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  console.log(photo);
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_POST_ID(photo._id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(false);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && 'Carregando...'}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
