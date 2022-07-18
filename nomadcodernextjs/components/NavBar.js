import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return <nav className={styles.nav}>
    <Link href='/'>
      <a className={`${router.pathname === '/' ? styles.active : ""} ${styles.link}`} style={{color : router.pathname === '/' ? 'white' : 'black'}}>
        Home
      </a>
    </Link>
    <Link href='/about-us'>
      <a lassName={router.pathname === '/about-us' ? styles.active : ""} style={{color : router.pathname === '/' ? 'black' : 'white'}} >
        About us
      </a>
    </Link>
  </nav>
}