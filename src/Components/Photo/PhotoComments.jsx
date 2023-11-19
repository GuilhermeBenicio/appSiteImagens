import React from 'react';
import styles from './PhotoComments.module.css';
import { userContext } from '../../userContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import PhotoEditComment from './PhotoEditComment';

const PhotoComments = ({ id, comments, setComentario, setModalPhoto }) => {
  const { login, dataUser } = React.useContext(userContext);
  const [commentsUser, setCommentsUser] = React.useState(() => comments);
  const [editingCommentId, setEditingCommentId] = React.useState('');

  const handleEditClick = (commentId) => {
    setEditingCommentId(commentId);
  };

  return (
    <>
      <ul className={styles.comments}>
        {commentsUser &&
          commentsUser.map((comentario, index) => (
            <li key={index} className={styles.comentarioTexto}>
              {editingCommentId === comentario._id ? (
                <PhotoEditComment
                  comments={comentario}
                  onEditClick={handleEditClick}
                  editingCommentId={editingCommentId}
                  setCommentsUser={setCommentsUser}
                  id={id}
                  setComentario={setComentario}
                  setModalPhoto={setModalPhoto}
                />
              ) : (
                <>
                  <div>
                    <b className={styles.usuario}>{comentario.usuario}:</b>
                    <span className={styles.comentario}>
                      {comentario.comentarioTexto}
                    </span>
                  </div>
                  <PhotoEditComment
                    comments={comentario}
                    onEditClick={handleEditClick}
                    editingCommentId={editingCommentId}
                    setCommentsUser={setCommentsUser}
                    commentsUser={commentsUser}
                    id={id}
                    setModalPhoto={setModalPhoto}
                  />
                </>
              )}
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
