import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout/Layout';
const ReactMarkdown = require('react-markdown');

const WriteUp = ({ writeup }) => (
  <Layout>
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <h1 className="hero-title">Tayfun Sür</h1>
        <div className="hero-social-links">
          <Link href="//twitter.com/_tsur">
            <a target="_blank" className="social-link">
              Twitter
            </a>
          </Link>
          <Link href="//www.linkedin.com/in/tayfunsur/">
            <a target="_blank" className="social-link">
              Linkedin
            </a>
          </Link>
        </div>
      </div>

      <div className="blog">
        <h2 className="blog-title">
          <a className="blog-title-link">{writeup.title}</a>
        </h2>
        <ReactMarkdown source={writeup.details} className="blog-text" />

        <div className="blog-date">{writeup.date}</div>
      </div>

      <style jsx>{`
        .container {
          max-width: 650px;
          width: 100%;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          margin: 5rem;
        }

        .social-link:first-child {
          margin-right: 8px;
        }

        .hero-title {
          font-size: 3rem;
        }

        a {
          color: #1b4ff8;
          text-decoration: none;
        }

        .blog-date {
          text-align: right;
          color: #ccc;
          margin: 0.75em 0 3em 0;
        }
      `}</style>
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
WriteUp.getInitialProps = async({ req, query }) => {
  const slug = query.slug;
  const res = await fetch(`https://www.tayfunsur.com/api/write-ups/${slug}`);
  const { data } = await res.json();
  

  return {
  
     writeup: data,
 
  };
}

export default WriteUp;
