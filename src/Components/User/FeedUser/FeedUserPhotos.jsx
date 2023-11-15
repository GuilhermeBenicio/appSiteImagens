import React from 'react';
import { userContext } from '../../../userContext';
import useFetch from '../../../Hooks/useFetch';
import { USER_GET_PHOTO } from '../../../api';
import FeedUserPhotosItem from './FeedUserPhotosItem';
import styles from './FeedUserPhotos.module.css';
import Error from '../../Helper/Error';

const FeedUserPhotos = ({ setModalPhoto, user }) => {
  const { dataUser } = React.useContext(userContext);
  const { data, request, loading, error } = useFetch();
  const User = user ? user : dataUser.usuario;

  React.useEffect(() => {
    async function fetchPhotos() {
      const token = window.localStorage.getItem('token');
      const { url, options } = USER_GET_PHOTO(User, token);
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
