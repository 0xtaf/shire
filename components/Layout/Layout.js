import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation/Navigation';
import classes from './Layout.module.css';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Tayfun Sur Blog</title>
        
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap" rel="stylesheet" />
        
      </Head>
      <header className={classes.header}>
        <div className={classes.name}>
          <div>
            <Link href="/">
              <a>Tayfun Sür</a>
            </Link>
          </div>
          <div>Personal blog on web development, security and life</div>
        </div>
        <Navigation className={classes.navigation} />
      </header>
      <main>{children}</main>
      <footer></footer>
      <style jsx>{`
        a {
          font-weight: 500
        }
      `}</style>
    </div>
    
  );
};

export default Layout;
