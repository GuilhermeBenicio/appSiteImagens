import React from 'react';
import styles from './PhotoContentDelete.module.css';
import { POST_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoContentDelete = ({ _id, setModalPhoto }) => {
  const token = window.localStorage.getItem('token');
  const { request } = useFetch();

  async function handleClick() {
    const { url, options } = POST_DELETE(_id, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setModalPhoto(false);
      window.location.reload();
    }
  }
  return (
    <button className={styles.deletar} onClick={handleClick}>
      Deletar
    </button>
  );
};

export default PhotoContentDelete;
