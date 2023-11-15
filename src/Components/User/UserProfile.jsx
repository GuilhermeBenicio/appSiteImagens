import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import FeedUser from './FeedUser/FeedUser';
import { userContext } from '../../userContext';
import UserSeguir from './UserSeguir';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const { user } = useParams();
  const { dataUser } = useContext(userContext);
  return (
    <section className="container">
      <div className={styles.headerProfile}>
        <h1 className="titulo">{user}</h1>
        <div>{dataUser !== null && <UserSeguir user={user} />}</div>
      </div>
      <FeedUser user={user} />
    </section>
  );
};

export default UserProfile;
