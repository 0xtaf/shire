import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout/Layout';
import classes from '../../styles/slugs.module.css';
const ReactMarkdown = require('react-markdown');

const BlogPost = ({ post }) => (
  <Layout>
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.blog}>
        <h2 className={classes.blogTitle}>
          <a className={classes.blogTitleLink}>{post.title}</a>
        </h2>
        <hr />
        <ReactMarkdown source={post.details} className={classes.blogText} />

        <div className={classes.blogDate}>{post.date}</div>
      </div>

      <style jsx>{``}</style>
    </div>
  </Layout>
);
// export async function getStaticPaths() {
//   const data = await fetch('https://tayfunsur.com/api/posts/blogs');
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
BlogPost.getInitialProps = async ({ req, query }) => {
  const slug = query.slug;
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`);

  const { data } = await res.json();

  return {
    post: data,
  };
};

export default BlogPost;
