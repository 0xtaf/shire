import Link from 'next/link';
import classes from './Navigation.module.css';
import Router from 'next/router';

function Navigation() {
  return (
    <nav className={classes.nav}>
      <Link href="/about">
        <a>About</a>
      </Link>

      <a onClick={() => Router.push('/blogs', { shallow: true })}>Blog</a>

      <a onClick={() => Router.push('/write-ups', { shallow: true })}>WriteUps</a>
      
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
}

export default Navigation;
