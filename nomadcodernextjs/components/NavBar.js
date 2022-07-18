import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter();
  return <nav>
    <Link href='/'>
      <a className={router.pathname === '/' ? 'active' : ""}>Home</a>
    </Link>
    <Link href='/about-us'>
      <a className={router.pathname === '/about-us' ? 'active' : ""}>About us</a>
    </Link>
    <style jsx>{`
      nav {
        background-color : darkolivegreen;
      }
      
      .active {
        color : bisque;
        text-decoration: underline;
      }
    `}</style>
  </nav>
}