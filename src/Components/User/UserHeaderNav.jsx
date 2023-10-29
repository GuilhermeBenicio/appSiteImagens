import React from 'react';
import styles from './UserHeaderNav.module.css';
import { ReactComponent as AdicionarFoto } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';
import { NavLink } from 'react-router-dom';
import UserLogin from './UserLogin';

const UserHeaderNav = () => {
  const [modalFoto, setModalFoto] = React.useState(true);

  return (
    <section>
      <nav className={styles.nav}>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
        </NavLink>
        <button>
          <Sair />
        </button>
      </nav>
      {modalFoto && <UserLogin />}
    </section>
  );
};

export default UserHeaderNav;
