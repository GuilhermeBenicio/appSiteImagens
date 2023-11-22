import React from 'react';
import styles from './LoginCreate.module.css';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { Link } from 'react-router-dom';
import { userContext } from '../../userContext';
import { USER_REGISTER } from '../../api';
import useFetch from '../../Hooks/useFetch';

const LoginCreate = () => {
  const usuario = useForm();
  const email = useForm('email');
  const dataNasc = useForm();
  const senha = useForm();

  const { userLogin } = React.useContext(userContext);
  const { loading, error, request } = useFetch();

  const dataAtual = new Date();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_REGISTER({
      usuario: usuario.value,
      email: email.value,
      senha: senha.value,
      dataNasc: dataNasc.value,
      dataAtual,
    });

    const { response, json } = await request(url, options);
    console.log(response, json);
    if (response.ok) userLogin(email.value.trim(), senha.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="titulo espaco">Cadastrar</h1>
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
          <Button>Cadastrar</Button>
        )}

        <fieldset className="fieldset">
          <Error error={error} />
          Já possui uma conta? <Link to="/login">Clique Aqui</Link>
        </fieldset>
      </form>
    </section>
  );
};

export default LoginCreate;
