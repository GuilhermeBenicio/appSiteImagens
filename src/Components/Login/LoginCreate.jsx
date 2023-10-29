import React from 'react';
import styles from './LoginCreate.module.css';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import { parseISO } from 'date-fns';
import { userContext } from '../../userContext';
import { USER_REGISTER } from '../../api';

const LoginCreate = () => {
  const usuario = useForm();
  const email = useForm('email');
  const dataNasc = useForm();
  const senha = useForm();
  const [data, setData] = React.useState(null);

  const { request, userLogin, error, setErrorContext, loading } =
    React.useContext(userContext);

  const dataAtual = new Date();

  async function handleSubmit(event) {
    event.preventDefault();
    const iso = parseISO(dataNasc.value);
    const dataFormatada = format(iso, 'dd/MM/yyyy');

    const { url, options } = USER_REGISTER({
      usuario: usuario.value,
      email: email.value,
      senha: senha.value,
      dataNasc: dataFormatada,
      dataAtual,
    });

    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    /*setTimeout(() => {
      userLogin(email.value.trim(), senha.value);
    }, 50);*/
  }

  return (
    <section className="animeLeft">
      <h1 className="titulo">Cadastrar</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="usuário"
          type="text"
          id="text"
          name="usuario"
          {...usuario}
        />
        <Input label="email" type="text" id="email" name="email" {...email} />
        <Input
          label="data de nascimento"
          type="date"
          id="data"
          name="data"
          {...dataNasc}
        />
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
          {error && <Error error={error} />}
          Já possui uma conta?{' '}
          <Link to="/login" onClick={() => setErrorContext(null)}>
            Clique Aqui
          </Link>
        </fieldset>
      </form>
    </section>
  );
};

export default LoginCreate;
