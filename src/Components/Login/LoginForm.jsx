import React from 'react';
import styles from './LoginForm.module.css';
import Input from '../Form/Input';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import Button from '../Form/Button';
import { userContext } from '../../userContext';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const email = useForm('email');
  const senha = useForm();
  const { userLogin, error, loading, setErrorContext } =
    React.useContext(userContext);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(senha.value);
    if (email.validate() && senha.validate()) {
      userLogin(email.value.trim(), senha.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="titulo">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="email" type="text" id="email" name="email" {...email} />
        <Input
          label="senha"
          type="password"
          id="password"
          name="password"
          {...senha}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <fieldset className="fieldset">
          <span>
            {error && <Error error={error} />}
            Não possui uma conta?{' '}
            <Link to="/login/criar" onClick={() => setErrorContext(null)}>
              Clique Aqui
            </Link>
          </span>
        </fieldset>
      </form>
    </section>
  );
};

export default LoginForm;
