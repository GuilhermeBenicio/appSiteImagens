const URL = 'https://web-q5cgaeb0c6i6.up-de-fra1-1.apps.run-on-seenode.com/';

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
