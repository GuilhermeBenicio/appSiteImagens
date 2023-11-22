import React from 'react';
import styles from './PhotoContentCurtida.module.css';
import { POST_LIKE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import coracaopreenchido from '../../assets/like.svg';
import coracaovazio from '../../assets/coracaovazio.svg';
import { userContext } from '../../userContext';

const PhotoContentCurtida = ({ curtidas, usuario, _id }) => {
  const [curtidasArray, setCurtidasArray] = React.useState(curtidas);
  const { dataUser } = React.useContext(userContext);
  const [like, setLike] = React.useState(curtidas.length);
  const [islike, setIsLike] = React.useState(() =>
    curtidasArray.includes(dataUser.usuario),
  );

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

    if (islike) {
      const novasCurtidas = curtidasArray.filter(
        (nome) => nome !== dataUser.usuario,
      );
      setCurtidasArray(novasCurtidas);
    } else {
      const novasCurtidas = [...curtidasArray, usuario];
      setCurtidasArray(novasCurtidas);
    }
    setIsLike(!islike);

    if (response.ok) {
      if (json.tipo === 'like') {
        setLike(like + 1);
      } else if (json.tipo === 'dislike') {
        setLike(like - 1);
      }
    }
  }

  return (
    <>
      {dataUser ? (
        <span className={styles.curtidas} onClick={handleClick}>
          {islike ? (
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
