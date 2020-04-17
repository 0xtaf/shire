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
    </nav>
  );
}

export default Navigation;
