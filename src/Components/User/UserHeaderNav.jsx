import React from 'react';
import styles from './UserHeaderNav.module.css';
import { ReactComponent as AdicionarFoto } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';
import { Link } from 'react-router-dom';
import UserLogin from './UserLogin';

const UserHeaderNav = () => {
  const [modalFoto, setModalFoto] = React.useState(false);

  return (
    <section>
      <nav className={styles.nav}>
        <Link onClick={() => setModalFoto(true)}>
          <AdicionarFoto />
        </Link>
        <button>
          <Sair />
        </button>
      </nav>
      {modalFoto && <UserLogin setModalFoto={setModalFoto} />}
    </section>
  );
};

export default UserHeaderNav;
