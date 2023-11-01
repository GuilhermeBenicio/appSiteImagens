import React from 'react';
import styles from './PhotoComments.module.css';

const PhotoComments = ({ id, comments }) => {
  return (
    <>
      <ul className={styles.comments}>
        {comments &&
          comments.map((comentario) => (
            <li
              key={comentario.comentarioTexto}
              className={styles.comentarioTexto}
            >
              <b className={styles.usuario}>{comentario.usuario}:</b>
              <span className={styles.comentario}>
                {comentario.comentarioTexto}
              </span>
            </li>
          ))}
      </ul>
      <textarea
        className={styles.textarea}
        placeholder="Escreva um comentário aqui..."
      ></textarea>
    </>
  );
};

export default PhotoComments;
