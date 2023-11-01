import React from 'react';
import { TOKEN_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const userContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [dataUser, setDataUser] = React.useState(null);
  const [error, setErrorContext] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [request, setRequest] = React.useState(false);
  const navigate = useNavigate();

  async function getUser(token, email) {
    const { url, options } = USER_GET(token, email);
    const response = await fetch(url, options);
    const json = await response.json();
    setDataUser(json);
    setLogin(true);
  }

  async function userLogin(email, senha) {
    try {
      setErrorContext(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, senha });
      const response = await fetch(url, options);

      if (!response.ok) throw new Error('Usuário não encontrado');

      const json = await response.json();
      window.localStorage.setItem('token', json.access_token);
      await getUser(json.access_token, email);
      setRequest(true);
      navigate('/conta');
    } catch (error) {
      setErrorContext(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <userContext.Provider
        value={{
          userLogin,
          login,
          dataUser,
          error,
          setErrorContext,
          loading,
          request,
        }}
      >
        {children}
      </userContext.Provider>
    </>
  );
};
