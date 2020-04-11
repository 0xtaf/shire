import Link from 'next/link';
import classes from './Navigation.module.css';
function Navigation() {
  return (
    <nav className={classes.nav}>
      <Link href="/">
        <a>Ana Sayfa</a>
      </Link>
      <Link href="/blogs">
        <a>Blog</a>
      </Link>
      <Link href="/writeups">
        <a>Write-Ups</a>
      </Link>
      <Link href="/contact">
        <a>İletişim</a>
      </Link>
    </nav>
  );
}

export default Navigation;
