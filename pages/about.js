import Layout from '../components/Layout/Layout';
import Link from 'next/link';
const Home = () => (
  <Layout>
    <div className="aboutWrapper">
      <h1>About</h1>
      <div className="pWrapper">
        <p>
          I'm an inquisitive full stack web developer who is also interested in
          web application security. I used to be an industrial engineer until
          curiosity got the better of me. Improving myself every single day and
          pushing my own limits to be fully competent in web development field.
        </p>
        <p>
          During my transition I've been benefiting a lot from the sharing
          community and now is time to feed the community back. In this website,
          I'll be writing my personal thoughts about life in general, along with
          plenty of technical subjects in order to share with the community, and
          of course, get better at what I do.
        </p>
        <p>
          Javascript, React, Next.js, Node.js, Express and MongoDB are the tech
          stacks I've been learning and using during my improvement process.{' '}
        </p>
        <p>
          If you'd like to keep in touch with me, you can use{' '}
          <Link href="/contact">
            <a>the contact form</a>
          </Link>{' '}
          or send an email to tayfunsur [at] gmail [dot] com
        </p>
      </div>
      <style jsx>{`
        @font-face {
          font-family: 'Roboto Slab', serif;
          src: url('/fonts/RobotoSlab-Bold.ttf');
          src: url('/fonts/RobotoSlab-Light.ttf');
          src: url('/fonts/RobotoSlab-Regular.ttf');
        }
        p {
          font-family: 'Roboto Slab', serif;
        }
        body {
          font-family: 'Roboto Slab', serif;
        }
        .aboutWrapper {
          display: grid;
          grid-template-column. 1fr;
          margin: 0 26vw;
        }
        h1 {
          font-size: 3em;
        }

        .pWrapper {
          margin-top: -4%;
        }

        p {
          line-height: 1.5;
          font-size: 1.12em;
        }

        @media (max-width: 1250px){
          .aboutWrapper {
            margin: 0 20vw;
          }
        }
        @media (max-width: 1000px){
          .aboutWrapper {
            margin: 0 15vw;
          }
        }
        @media (max-width: 850px){
          .aboutWrapper {
            margin: 0 15vw;
          }
          h1 {
            font-size: 2.5em;
          }
        }
      `}</style>
    </div>
  </Layout>
);

export default Home;
