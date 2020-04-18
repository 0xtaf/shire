import Head from 'next/head';
import Link from 'next/link';
import unfetch from 'isomorphic-unfetch';
import slug from 'slug';
import Layout from '../../components/Layout/Layout';
import classes from '../../components/index.module.css';

const Blog = ({ posts }) => (
  <Layout>
    <div className="container">
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
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <div className="blog">
              <h2 className="blog-title">
                <Link
                  href="/blogs/[slug]"
                  as={`/blogs/${slug(post.title)}-${post._id}`}
                >
                  <a className="blog-title-link">{post.title}</a>
                </Link>
              </h2>
              <div>{post.details}</div>
              <div className="blog-date">{post.date}</div>
            </div>
          </li>
        ))}
      </ul>
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

export async function getStaticProps() {
  const res = await unfetch('https://shire-c2l9wct3m.now.sh/api/posts');
  const json = await res.json();
  const posts = await json.data;
  return { props: { posts } };
}

export default Blog;
