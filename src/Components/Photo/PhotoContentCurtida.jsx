import React from 'react';
import styles from './PhotoContentCurtida.module.css';
import { POST_LIKE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoContentCurtida = ({ curtidas, usuario, _id }) => {
  const [like, setLike] = React.useState(curtidas.length);
  const { request } = useFetch();
  const token = window.localStorage.getItem('token');
  async function handleClick() {
    const { url, options } = POST_LIKE(
      {
        usuario: usuario,
      },
      _id,
      token,
    );
    const { response, json } = await request(url, options);
    if (response.ok) {
      if (json.tipo === 'like') {
        setLike(curtidas.length);
      } else if (curtidas.length === 0) {
        setLike(0);
      } else if (json.tipo === 'dislike') {
        setLike(curtidas.length - 1);
      }
    }
  }
  return (
    <span className={styles.curtidas} onClick={handleClick}>
      {like}
    </span>
  );
};

export default PhotoContentCurtida;
