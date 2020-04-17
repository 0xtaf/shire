
import Layout from '../components/Layout/Layout';
import classes from '../components/index.module.css';

const Home = () => (
  <Layout>
    <div className="wrapper">
      <h1>Write ups</h1>

      <style jsx>{`
        .wrapper {
          max-width: 650px;
          width: 100%;
          margin: 0 auto;
        }
      `}</style>

    </div>
  </Layout>
);

export default Home;
