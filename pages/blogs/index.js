import Link from 'next/link';
import slug from 'slug';
import Layout from '../../components/Layout/Layout';
import classes from '../../styles/blogIndex.module.css';
import dbConnect from '../../server/utils/dbConnect';
import Post from '../../server/Models/Post';
let moment = require('moment');

const Blog = ({ posts }) => (
  
  <Layout>
    <div className="container">
      <div className={classes.wrapper}>
        {posts
          .slice(0)
          .reverse()
          .map((post) => (
            <article key={post._id}>
              <div>
                <Link href="/blogs/[slug]" as={`/blogs/${slug(post.title)}`}>
                  <a className={classes.title}>
                    <div>{post.title}</div>
                  </a>
                </Link>
                <div className="blog-date">{moment(post.date).format('MMMM Do, YYYY')}</div>
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

export async function getStaticProps(req, res) {
  dbConnect();

  const postx = await Post.find({}, 'id title slug date');
  const postz = await JSON.parse(JSON.stringify(postx));
  return { props: { posts: postz } };
}

export default Blog;
