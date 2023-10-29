export function TOKEN_POST(body) {
  return {
    url: 'http://localhost:3000/auth/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token, email) {
  return {
    url: `http://localhost:3000/user/email/${email}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_REGISTER(body) {
  return {
    url: 'http://localhost:3000/user/register',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
