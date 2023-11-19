import React from 'react';
import { userContext } from '../../userContext';
import { GET_POST_USER } from '../../api';
import useFetch from '../../Hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedSeguindo.module.css';
import FeedModal from './FeedModal';
import Error from '../Helper/Error';

const FeedSeguindo = () => {
  const { dataUser } = React.useContext(userContext);
  const { data, request, loading, error } = useFetch();
  const token = window.localStorage.getItem('token');

  const [foto, setFoto] = React.useState([]);
  const [modalPhoto, setModalPhoto] = React.useState(null);

  React.useEffect(() => {
    dataUser.seguindo.forEach((users) => {
      async function get_user() {
        const { url, options } = GET_POST_USER(users);
        const { response, json } = await request(url, options);
        if (response.ok) setFoto((prevFoto) => [...prevFoto, json]);
      }
      get_user();
    });
  }, [request]);

  return (
    <>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      <ul className={`${styles.feed} mainContainer animeLeft`}>
        {loading && 'Carregando...'}
        {foto &&
          foto.map((obj) =>
            obj.posts.map((url) => (
              <FeedPhotosItem
                key={url._id}
                photo={url}
                setModalPhoto={setModalPhoto}
              />
            )),
          )}
      </ul>
    </>
  );
};

export default FeedSeguindo;
