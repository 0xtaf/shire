import Layout from '../../components/Layout/Layout';
import classes from '../../styles/slugs.module.css';
const ReactMarkdown = require('react-markdown');
import dbConnect from '../../server/utils/dbConnect';
import Post from '../../server/Models/Post';

const BlogPost = ({ post }) => (
  <Layout>
    <div className={classes.bg}>
      <div className={classes.container}>
        <div className={classes.blog}>
          <h2 className={classes.blogTitle}>
            <a className={classes.blogTitleLink}>{post.title}</a>
          </h2>
          <hr />
          <ReactMarkdown source={post.details} className={classes.blogText} />
        </div>

        <style jsx>{``}</style>
      </div>
    </div>
  </Layout>
);
export async function getStaticPaths() {
  dbConnect();

  const postx = await Post.find({});
  const postz = await JSON.parse(JSON.stringify(postx));
  const paths = await postz.map((item) => {
    return {
      params: {
        slug: `${item.slug}`, //pid blogs/[pid] rotasıyla aynı isimde olmalı.
      },
    };
  });
  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}
export async function getStaticProps({ params }) {
  dbConnect();
  const slug = params.slug;

  const postx = await Post.findOne({ slug: slug });
  const postz = await JSON.parse(JSON.stringify(postx));

  return {
    props: { post: postz },
  };
}

export default BlogPost;
