import Head from 'next/head';
import Link from 'next/link';
const Home = () => (
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

    <div className="blog">
      <h2 className="blog-title">
        <Link href="/test">
          <a className="blog-title-link">iyi bir bloğun 2983 özelliği</a>
        </Link>
      </h2>
      <div className="blog-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget mi proin sed
        libero enim. Ultrices tincidunt arcu non sodales. Amet est placerat in
        egestas erat imperdiet sed euismod nisi. Morbi leo urna molestie at
        elementum eu. Suspendisse ultrices gravida dictum fusce ut. Nullam non
        nisi est sit amet. Eget mauris pharetra et ultrices. Auctor urna nunc id
        cursus metus aliquam eleifend. Quam nulla porttitor massa id neque
        aliquam vestibulum morbi blandit. Scelerisque mauris pellentesque
        pulvinar pellentesque habitant morbi tristique senectus. Sit amet dictum
        sit amet justo donec enim. Augue eget arcu dictum varius duis. Hendrerit
        dolor magna eget est lorem ipsum. Nec dui nunc mattis enim ut tellus
        elementum sagittis.
      </div>
      <div className="blog-date">7 Nisan 2020 </div>
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

export default Home;
