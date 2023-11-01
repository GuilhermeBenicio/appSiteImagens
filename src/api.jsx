const URL = 'https://api-site-imagens.onrender.com/';

export function TOKEN_POST(body) {
  return {
    url: `${URL}auth/login`,
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
    url: `${URL}user/email/${email}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET_USUARIO(token, usuario) {
  return {
    url: `${URL}user/${usuario}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_POST_USER(token, usuario) {
  return {
    url: `${URL}post/list/user/${usuario}`,
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
    url: `${URL}user/register`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function UPLOAD_PHOTO_POST(formatData, token) {
  return {
    url: `${URL}post/upload`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formatData,
    },
  };
}

export function PHOTO_POST(body, token, id) {
  return {
    url: `${URL}post/create/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET_PHOTO(usuario, token) {
  return {
    url: `${URL}post/list/user/${usuario}`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_POSTS() {
  return {
    url: `${URL}post/list`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function GET_POST_ID(id) {
  return {
    url: `${URL}post/list/${id}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}
