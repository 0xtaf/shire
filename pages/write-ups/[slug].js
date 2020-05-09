import Layout from '../../components/Layout/Layout';
import classes from '../../styles/slugs.module.css';
const ReactMarkdown = require('react-markdown');
import dbConnect from '../../server/utils/dbConnect';
import Writeup from '../../server/Models/Writeup';

const WriteupIndividual = ({ writeup }) => (
  <div className={classes.bg}>
    <Layout>
      <div className={classes.container}>
        <div className={classes.blog}>
          <h2 className={classes.blogTitle}>
            <a className={classes.blogTitleLink}>{writeup.title}</a>
          </h2>
          <hr />
          <ReactMarkdown
            source={writeup.details}
            className={classes.blogText}
          />

          <div className={classes.blogDate}>{writeup.date}</div>
        </div>

        <style jsx>{``}</style>
      </div>
    </Layout>
  </div>
);
export async function getStaticPaths() {
  dbConnect();
  const writeupx = await Writeup.find({});
  const writeupz = await JSON.parse(JSON.stringify(writeupx));
  const paths = await writeupz.map((item) => {
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
  const writeupx = await Writeup.findOne({ slug: slug });
  const writeupz = await JSON.parse(JSON.stringify(writeupx));
  return {
    props: { writeup: writeupz },
  };
}

export default WriteupIndividual;
