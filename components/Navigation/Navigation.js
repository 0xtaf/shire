import Link from 'next/link';
import classes from './Navigation.module.css';
function Navigation() {
  return (
    <nav className={classes.nav}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blogs">
        <a>Blog</a>
      </Link>
      <Link href="/write-ups">
        <a>WriteUps</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <style jsx>{`
        @font-face {
          font-family: 'Roboto Slab', serif;
          src: url('/fonts/RobotoSlab-Bold.ttf');
          src: url('/fonts/RobotoSlab-Light.ttf');
          src: url('/fonts/RobotoSlab-Regular.ttf');
        }
        body {
          font-family: 'Roboto Slab', serif;
        }
        nav a {
          font-family: 'Roboto Slab', serif;
        }
      `}</style>
    </nav>
  );
}

export default Navigation;
