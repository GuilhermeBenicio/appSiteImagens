import React from 'react';
import styles from './UserLogin.module.css';
import Button from '../Form/Button';
import useFetch from '../../Hooks/useFetch';
import TextArea from '../Form/TextArea';
import useForm from '../../Hooks/useForm';
import { PHOTO_POST, UPLOAD_PHOTO_POST } from '../../api';
import { userContext } from '../../userContext';

const UserLogin = ({ setModalFoto }) => {
  const [file, setFile] = React.useState({});
  const { error, loading, request } = useFetch();
  const { dataUser } = React.useContext(userContext);
  const txtArea = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file.raw);
    const token = window.localStorage.getItem('token');

    const { url, options } = UPLOAD_PHOTO_POST(formData, token);
    const { response, json } = await request(url, options);
    if (response.ok) await sendFinalPost(json.url, token, dataUser._id);
  }

  async function sendFinalPost(urlIMG, token, id) {
    const { url, options } = PHOTO_POST(
      {
        usuario: dataUser.usuario,
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
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalFoto(false);
  }

  return (
    <section className={`${styles.modal}`} onClick={handleOutsideClick}>
      <div className={`${styles.card} animeModal`}>
        <form onSubmit={handleSubmit}>
          <h1 className="titulo">Postar Foto</h1>
          <TextArea id="textarea" label="Descrição da foto" {...txtArea} />
          <input
            className={styles.input}
            type="file"
            name="file"
            id="file"
            accept="image/jpeg"
            onChange={handleChange}
            required
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Postar</Button>
          )}
          {error && <Error error={error} />}
        </form>
        <div>
          {file.preview && (
            <div
              className={styles.preview}
              style={{ backgroundImage: `url('${file.preview}')` }}
            ></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
