import React from 'react';
import styles from './FeedPhotos.module.css';
import { userContext } from '../../userContext';
import useFetch from '../../Hooks/useFetch';
import { GET_POSTS } from '../../api';
import FeedPhotosItem from './FeedPhotosItem';

const FeedPhotos = ({ setModalPhoto }) => {
  const { dataUser } = React.useContext(userContext);
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = GET_POSTS();
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <span>Carregando...</span>;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(({ posts }) =>
          posts.map((photo) => (
            <FeedPhotosItem
              key={photo._id}
              photo={photo}
              setModalPhoto={setModalPhoto}
              data={data}
            />
          )),
        )}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
