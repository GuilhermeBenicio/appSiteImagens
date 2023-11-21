import React from 'react';
import styles from './PhotoContentCurtida.module.css';
import { POST_LIKE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import coracaopreenchido from '../../assets/like.svg';
import coracaovazio from '../../assets/coracaovazio.svg';
import { userContext } from '../../userContext';

const PhotoContentCurtida = ({ curtidas, usuario, _id }) => {
  const [like, setLike] = React.useState(curtidas.length);
  const [isLike, setIsLike] = React.useState(false);
  const { dataUser } = React.useContext(userContext);
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
      console.log(json.tipo);
      if (json.tipo === 'like') {
        setLike(like + 1);
        setIsLike(true);
      } else if (json.tipo === 'dislike') {
        setLike(like - 1);
        setIsLike(false);
      }
    }
  }

  return (
    <>
      {dataUser ? (
        <span className={styles.curtidas} onClick={handleClick}>
          {isLike ? (
            <img
              src={coracaopreenchido}
              alt="Likes"
              width={24}
              height={24}
            ></img>
          ) : (
            <img src={coracaovazio} alt="Likes"></img>
          )}
          {like}
        </span>
      ) : (
        <span className={styles.curtidas}>
          <img src={coracaovazio} alt="Likes"></img>
          {like}
        </span>
      )}
    </>
  );
};

export default PhotoContentCurtida;
