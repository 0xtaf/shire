import Head from 'next/head';
import Link from 'next/link';
import unfetch from 'isomorphic-unfetch';
import slug from 'slug';
import Layout from '../components/Layout/Layout';
import classes from '../components/index.module.css';

const Home = () => (
  <Layout>
    <div className={classes.container}>
      <h1>Anasayfa</h1>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  </Layout>
);

export default Home;
