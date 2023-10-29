import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { userContext } from '../userContext';

const Header = () => {
  const { data } = React.useContext(userContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/">
          <h1>Logotipo</h1>
        </Link>
        {data ? (
          <Link className={styles.login} to="/login">
            {data.usuario}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Registrar-se
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
