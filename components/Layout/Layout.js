import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation/Navigation';
import classes from './Layout.module.css';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <title>Tayfun Sur Personal Website</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={classes.header}>
        <div className={classes.name}>
          <div>
            <Link href="/">
              <a>Tayfun Sur</a>
            </Link>
          </div>
          <div>Personal blog on web development, security and life</div>
        </div>
        <Navigation className={classes.navigation} />
      </header>
      <main>{children}</main>
      <footer></footer>
      <style jsx>{`
        @font-face {
          font-family: 'Roboto Slab', serif;
          src: url('/fonts/RobotoSlab-Bold.ttf');
          src: url('/fonts/RobotoSlab-Light.ttf');
          src: url('/fonts/RobotoSlab-Regular.ttf');
        }
        p {
          font-family: 'Roboto Slab', serif;
        }
        a {
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Layout;
