import React from 'react';
import styles from './UserLogin.module.css';
import Button from '../Form/Button';
import useFetch from '../../Hooks/useFetch';
import TextArea from '../Form/TextArea';
import useForm from '../../Hooks/useForm';
import { PHOTO_POST, UPLOAD_PHOTO_POST } from '../../api';
import { userContext } from '../../userContext';
import parseJSON from 'date-fns/fp/parseJSON/index';

const UserLogin = () => {
  const [file, setFile] = React.useState({});
  const [textArea, setTextArea] = React.useState(null);
  const txtArea = useForm();
  const { error, loading, request } = useFetch();
  const { data } = React.useContext(userContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file.raw);
    const token = window.localStorage.getItem('token');

    const { url, options } = UPLOAD_PHOTO_POST(formData, token);
    const { response, json } = await request(url, options);
    if (response.ok) await sendFinalPost(json.url, token, data._id);
  }

  async function sendFinalPost(urlIMG, token, id) {
    const { url, options } = PHOTO_POST(
      {
        pathFotoPost: urlIMG,
        descricaoPost: txtArea.value,
      },
      token,
      id,
    );
    const { response } = await request(url, options);
  }

  function handleChange({ target }) {
    setFile({
      raw: target.files[0],
    });
    if (file) setTextArea(true);
  }

  return (
    <section className={styles.modal}>
      <div className={styles.card}>
        <h1 className="titulo">Postar Foto</h1>
        <form onSubmit={handleSubmit}>
          {textArea && (
            <TextArea id="textarea" label="Descrição da foto" {...txtArea} />
          )}
          <input
            className={styles.input}
            type="file"
            name="file"
            id="file"
            accept="image/jpeg"
            onChange={handleChange}
          />

          <Button>Postar</Button>
        </form>
      </div>
    </section>
  );
};

export default UserLogin;
