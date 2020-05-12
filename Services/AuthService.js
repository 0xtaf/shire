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
      else return { isAuthenticated: false, user: { username: '', role: '' } };
    });
  },
  register: (user) => {
    console.log(user);
    return fetch('/api/signup', {
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
    console.log("isauth")
    return fetch('/api/authenticated').then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: '', isAdmin: '' } };
    });
  },
};
