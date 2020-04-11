import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation/Navigation';
import classes from './Layout.module.css';
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Tayfun Sür</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={classes.header}>
        <Navigation className={classes.navigation}/>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
