import Link from 'next/link';
import unfetch from 'isomorphic-unfetch';
import slug from 'slug';
import Layout from '../../components/Layout/Layout';
import classes from '../../styles/blogIndex.module.css';

const Writeup = ({ posts }) => (
  <Layout>
    <div className="container">
      <div className={classes.wrapper}>
        {posts
          .slice(0)
          .reverse()
          .map((post) => (
            <article key={post._id}>
              <div>
                <Link href="/write-ups/[slug]" as={`/write-ups/${slug(post.title)}`}>
                  <a>
                    <img src={`${slug(post.title)}.png`} alt="1" />
                  </a>
                </Link>
                <Link href="/write-ups/[slug]" as={`/write-ups/${slug(post.title)}`}>
                  <a className={classes.title}>
                    <div>{post.title}</div>
                  </a>
                </Link>

                <div className="blog-date">{post.date}</div>
              </div>
            </article>
          ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 90%;
          width: 100%;
          margin: 1rem auto;
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
  const res = await unfetch('https://shire.now.sh/api/write-ups');
  const json = await res.json();
  const posts = await json.data;
  return { props: { posts } };
}

export default Writeup;
