import React, { useState } from 'react';
import Link from 'next/link';
import slug from 'slug';
import Layout from '../../components/Layout/Layout';
import classes from '../../styles/blogIndex.module.css';
import dbConnect from '../../server/utils/dbConnect';
import Post from '../../server/Models/Post';
let moment = require('moment');

const Blog = ({ posts }) => {
  const [category, setCategory] = useState({
    category: 'life',
  });
  const [style, setStyle] = useState({
    life: 'solid 1px',
    technical: '',
    writeup: '',
  });

  const handleFilter = (e) => {
    switch (e.target.id) {
      case 'life':
        if (category.category !== 'life') {
          setStyle({
            life: 'solid 1px',
            technical: '',
            writeup: '',
          });
          setCategory({ category: 'life' });
        }
        break;
      case 'technical':
        if (category.category !== 'technical') {
          setStyle({
            life: '',
            technical: 'solid 1px',
            writeup: '',
          });
          setCategory({ category: 'technical' });
        }
        break;
      case 'writeup':
        if (category.category !== 'writeup') {
          setStyle({
            life: '',
            technical: '',
            writeup: 'solid 1px',
          });
          setCategory({ category: 'writeup' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className={classes.navCategory}>
          <div className={classes.buttons}>
            <button
              id="life"
              onClick={handleFilter}
              style={{ borderBottom: style.life }}
            >
              Life
            </button>
            <button
              id="technical"
              onClick={handleFilter}
              style={{ borderBottom: style.technical }}
            >
              Technical
            </button>
            <button
              id="writeup"
              onClick={handleFilter}
              style={{ borderBottom: style.writeup }}
            >
              Write-ups
            </button>
          </div>
        </div>
        <div className={classes.wrapper}>
          {posts
            .slice(0)
            .reverse()
            .map((post) =>
              category.category === post.category ? (
                <article key={post._id}>
                  <div>
                    <Link
                      href="/blogs/[slug]"
                      as={`/blogs/${slug(post.title)}`}
                    >
                      <a className={classes.title}>
                        <div>{post.title}</div>
                      </a>
                    </Link>
                    <div className={classes.blogDate}>
                      {moment(post.date).format('MMMM Do, YYYY')}
                    </div>
                  </div>
                </article>
              ) : (
                ''
              )
            )}
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
};

export async function getStaticProps(req, res) {
  dbConnect();

  const postx = await Post.find({}, 'id title slug date category');
  const postz = await JSON.parse(JSON.stringify(postx));
  return { props: { posts: postz } };
}

export default Blog;
