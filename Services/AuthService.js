export default {
  login: (user) => {
    return fetch('https://www.tayfunsur.com/api/panel-login', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else
        return {
          isAuthenticated: false,
          user: { username: '', isAdmin: '' },
          message: { msgBody: 'Either username or password is wrong' },
        };
    });
  },
  register: (user) => {
    return fetch('https://www.tayfunsur.com/api/userCreate', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
  logout: () => {
    return fetch('https://www.tayfunsur.com/api/logout')
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch('https://www.tayfunsur.com/api/authenticated').then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else
        return { isAuthenticated: false, user: { username: '', isAdmin: '' } };
    });
  },
};
