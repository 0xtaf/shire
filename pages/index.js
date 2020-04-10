import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="hero-title">Tayfun Sür</h1>
      <div className="hero-social-links">
        <Link href="https://twitter.com/_tsur">
          <a target="_blank" className="social-link">
            Twitter
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/tayfunsur/">
          <a target="_blank" className="social-link">
            Linkedin
          </a>
        </Link>
      </div>
    </div>

    {posts.map((post) => (
      
      <div className="blog">
        <h2 className="blog-title">
          {console.log(post)}
          <Link href="/[postId]" as={`/asd`}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div>{post.details}</div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}
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

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async function () {
  const res = await fetch('http://localhost:3000/api/posts');
  const json = await res.json();
  console.log("data geliyor: ", json)
  console.log("json.dat geliyor", json.data)
  return {posts: json.data};
};

export default Home;
