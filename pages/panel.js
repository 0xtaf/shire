import React from 'react';
import Layout from '../components/Layout/Layout';
const Panel = () => {


  return (
    <Layout>
      <form action="/api/userCreate" method="POST">
        <div className="form-row firstrow">
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="username" name="username" required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required />
          </div>

          <button type="submit">Sign up</button>
        </div>
      </form>
    </Layout>
  );
};

export default Panel;
