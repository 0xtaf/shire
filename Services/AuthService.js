export default {
  login: (user) => {
    console.log(user);
    return fetch('/api/panel-login', {
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
    console.log(user);
    return fetch('/api/userCreate', {
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
    return fetch('/api/logout')
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch('/api/authenticated').then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else
        return { isAuthenticated: false, user: { username: '', isAdmin: '' } };
    });
  },
};
