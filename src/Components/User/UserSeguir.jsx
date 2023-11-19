import React, { useContext, useState } from 'react';
import styles from './UserSeguir.module.css';
import { USER_FOLLOW } from '../../api';
import { userContext } from '../../userContext';
import useFetch from '../../Hooks/useFetch';

const UserSeguir = ({ user }) => {
  const { dataUser } = useContext(userContext);
  const token = window.localStorage.getItem('token');
  const { request, data } = useFetch();

  const [seguindo, setSeguindo] = useState(dataUser.seguindo.includes(user));

  async function handleClick() {
    const { url, options } = USER_FOLLOW(dataUser.usuario, user, token);

    const { response, json } = await request(url, options);
    if (response.ok) {
      setSeguindo(!seguindo);
      window.location.reload();
    }
  }

  return (
    <>
      <button className={styles.seguir} onClick={handleClick}>
        {seguindo ? 'Seguindo' : 'Seguir'}
      </button>
    </>
  );
};

export default UserSeguir;
