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

    </div>
  </Layout>
);

export default Home;
