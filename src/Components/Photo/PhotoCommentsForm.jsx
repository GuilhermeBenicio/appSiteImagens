import React from 'react';
import styles from './PhotoCommentsForm.module.css';
import { CREATE_COMMENT } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoCommentsForm = ({ usuario, id, setCommentsUser }) => {
  const [comments, setComments] = React.useState('');
  const { error, loading, request, data } = useFetch();
  const token = window.localStorage.getItem('token');

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = CREATE_COMMENT(
      {
        usuario: usuario,
        comentarioTexto: comments,
      },
      id,
      token,
    );

    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments('');
      setCommentsUser((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <textarea
          className={styles.textarea}
          value={comments}
          onChange={({ target }) => setComments(target.value)}
          placeholder="Comentário..."
        ></textarea>
      </div>
      <button className={styles.button}>Enviar</button>
    </form>
  );
};

export default PhotoCommentsForm;
