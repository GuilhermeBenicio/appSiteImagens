import React, { useContext } from 'react';
import editar from '../../assets/edit.svg';
import { userContext } from '../../userContext';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_EDIT_COMMENT } from '../../api';
import styles from './PhotoEditComment.module.css';
import Button from '../Form/Button';
import ButtonEditComment from './ButtonEditComment';

const PhotoEditComment = ({
  comments,
  onEditClick,
  editingCommentId,
  setCommentsUser,
  commentsUser,
  id,

  setModalPhoto,
}) => {
  const { dataUser, setEdit, edit } = useContext(userContext);
  const { request } = useFetch();
  const [commentEdited, setCommentEdited] = React.useState({
    comentarioTexto: comments.comentarioTexto,
  });

  function handleClick() {
    //const { url, options } = PHOTO_EDIT_COMMENT();
    onEditClick(comments._id);
    setEdit(true);
  }
  return (
    <>
      {dataUser && comments.usuario === dataUser.usuario ? (
        <>
          {edit && editingCommentId === comments._id ? (
            <div className={styles.containerEditComment}>
              <textarea
                value={commentEdited.comentarioTexto}
                onChange={(e) =>
                  setCommentEdited({
                    ...commentEdited,
                    comentarioTexto: e.target.value,
                  })
                }
                className={styles.textarea}
              ></textarea>
              <ButtonEditComment
                idComment={comments._id}
                commentEdited={commentEdited}
                setCommentsUser={setCommentsUser}
                commentsUser={commentsUser}
                setCommentEdited={setCommentEdited}
                idPost={id}
                setModalPhoto={setModalPhoto}
              />
            </div>
          ) : (
            <div
              onClick={handleClick}
              style={{ position: 'relative', top: '-3px' }}
            >
              <img src={editar} alt="editar" className={styles.img} />
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default PhotoEditComment;
