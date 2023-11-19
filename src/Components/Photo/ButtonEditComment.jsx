import React from 'react';
import styles from './ButtonEditComment.module.css';
import { PHOTO_EDIT_COMMENT } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { userContext } from '../../userContext';

const ButtonEditComment = ({
  idComment,
  commentEdited,
  idPost,
  setModalPhoto,
}) => {
  const { setEdit } = React.useContext(userContext);
  const token = window.localStorage.getItem('token');
  const { data, request } = useFetch();
  async function handleClick() {
    const { url, options } = PHOTO_EDIT_COMMENT(
      {
        comentarioTexto: commentEdited.comentarioTexto,
      },
      token,
      idComment,
      idPost,
    );
    const { response, json } = await request(url, options);
    if (response.ok) {
      setEdit(false);
      console.log(json);
      setModalPhoto(false);
      setTimeout(() => {
        setModalPhoto(json);
      }, 100);
      //setModalPhoto();
    }
  }
  return (
    <button onClick={handleClick} className={styles.button}>
      Editar
    </button>
  );
};

export default ButtonEditComment;
