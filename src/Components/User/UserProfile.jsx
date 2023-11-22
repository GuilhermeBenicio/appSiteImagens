import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FeedUser from './FeedUser/FeedUser';
import { userContext } from '../../userContext';
import UserSeguir from './UserSeguir';
import styles from './UserProfile.module.css';
import useFetch from '../../Hooks/useFetch';
import { USER_GET_USUARIO } from '../../api';

const UserProfile = () => {
  const { user } = useParams();
  const { dataUser } = useContext(userContext);
  const { request, data } = useFetch();
  const token = window.localStorage.getItem('token');

  React.useEffect(() => {
    async function get_post_user() {
      const { url, options } = USER_GET_USUARIO(token, user);
      const { response, json } = await request(url, options);
    }
    get_post_user();
    console.log(data);
  }, []);
  return (
    <section className="container">
      <div className={styles.headerProfile}>
        <h1 className="titulo">{user}</h1>
        <div>{dataUser !== null && <UserSeguir user={user} />}</div>
      </div>
      {dataUser === null ? null : (
        <div className={styles.userFollower}>
          {data && (
            <>
              <span>
                <span className={styles.posts}> {data.posts.length}</span>
                post{data.posts.length > 1 ? 's' : null}
              </span>
              <span>
                <span className={styles.seguidor}>
                  {' '}
                  {data.seguidores.length}
                </span>
                seguidor{data.seguidores.length > 1 ? 'es' : null}
              </span>
              <span>
                <span className={styles.seguindo}> {data.seguindo.length}</span>
                seguindo
              </span>
            </>
          )}
        </div>
      )}
      <FeedUser user={user} />
    </section>
  );
};

export default UserProfile;
