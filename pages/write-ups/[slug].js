import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout/Layout';
import classes from '../../styles/slugs.module.css';
const ReactMarkdown = require('react-markdown');

const WriteUp = ({ writeup }) => (
  <Layout>
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className={classes.blog}>
        <h2 className={classes.blogTitle}>
          <a className={classes.blogTitleLink}>{writeup.title}</a>
        </h2>
        <hr />
        <ReactMarkdown source={writeup.details} className={classes.blogText} />

        <div className={classes.blogDate}>{writeup.date}</div>
      </div>

      <style jsx>{``}</style>
    </div>
  </Layout>
);
// export async function getStaticPaths() {
//   const data = await fetch('https://tayfunsur.com/api/write-ups/main');
//   const json = await data.json();

//   const paths = json.data.map((item) => {
//     return {
//       params: {
//         slug: `${item.slug}`, //pid blogs/[pid] rotasıyla aynı isimde olmalı.
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false, // See the "fallback" section below
//   };
// }
WriteUp.getInitialProps = async ({ req, query }) => {
  const slug = query.slug;
  const res = await fetch(`http://localhost:3000/api/write-ups/${slug}`);
  const { data } = await res.json();

  return {
    writeup: data,
  };
};

export default WriteUp;
