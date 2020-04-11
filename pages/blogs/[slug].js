import Head from 'next/head';
import Link from 'next/link';
import unfetch from 'isomorphic-unfetch';
import slug from 'slug';

const BlogPost = ({ post }) => (
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
        <a className="blog-title-link">{post.title}</a>
      </h2>
      <div className="blog-text">{post.details}</div>
      <div className="blog-date">{post.date}</div>
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
export async function getStaticPaths() {
  const data = await unfetch('http://localhost:3000/api/posts');
  const json = await data.json();

  const paths = json.data.map((item) => {
    return {
      params: {
        slug: `${slug(item.title)}-${item._id}`, //pid blogs/[pid] rotasıyla aynı isimde olmalı.
      },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}
export async function getStaticProps({ params }) {
  console.log("burayı niye kaydetmiyo amk")
  const id = params.slug.split("-").slice(-1)[0];
  console.log("id şudur ki", id)
  const res = await unfetch(`http://localhost:3000/api/posts/` + id);
  const json = await res.json();
  const post = await json.data;
  console.log('post şudur ki:', post);

  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
