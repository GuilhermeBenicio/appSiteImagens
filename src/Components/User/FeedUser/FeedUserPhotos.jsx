import React from 'react';
import { userContext } from '../../../userContext';
import useFetch from '../../../Hooks/useFetch';
import { USER_GET_PHOTO } from '../../../api';
import FeedUserPhotosItem from './FeedUserPhotosItem';
import styles from './FeedUserPhotos.module.css';

const FeedUserPhotos = ({ setModalPhoto }) => {
  const { dataUser } = React.useContext(userContext);
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const token = window.localStorage.getItem('token');
      const { url, options } = USER_GET_PHOTO(dataUser.usuario, token);
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <span>Carregando...</span>;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.posts.map((photo) => (
          <FeedUserPhotosItem
            key={photo._id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedUserPhotos;
