import React from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from '../userContext';
import styles from './HeaderHome.module.css';

const HeaderHome = () => {
  const { dataUser } = React.useContext(userContext);
  return (
    <header className={styles.headerHome}>
      <NavLink to="/" end>
        <span className={styles.span}>Feed Geral</span>
      </NavLink>
      {dataUser && (
        <NavLink to="/seguindo">
          <span className={styles.span}>Seguindo</span>
        </NavLink>
      )}
    </header>
  );
};

export default HeaderHome;
