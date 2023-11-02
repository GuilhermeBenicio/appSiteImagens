import React from 'react';
import styles from './PhotoComments.module.css';
import { userContext } from '../../userContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = ({ id, comments }) => {
  const { login, dataUser } = React.useContext(userContext);
  const [commentsUser, setCommentsUser] = React.useState(() => comments);
  return (
    <>
      <ul className={styles.comments}>
        {commentsUser &&
          commentsUser.map((comentario, index) => (
            <li key={index} className={styles.comentarioTexto}>
              <b className={styles.usuario}>{comentario.usuario}:</b>
              <span className={styles.comentario}>
                {comentario.comentarioTexto}
              </span>
            </li>
          ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          usuario={dataUser.usuario}
          id={id}
          setCommentsUser={setCommentsUser}
        />
      )}
    </>
  );
};

export default PhotoComments;
