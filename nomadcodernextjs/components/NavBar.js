import Link from 'next/link'
import { useRouter } from 'next/router'
export default function NavBar() {
  const router = useRouter();
  return <nav>
    <Link href='/'>
      <a className='hello' style={{color : router.pathname === '/' ? 'lightgray' : 'black'}}>
        Home
      </a>
    </Link>
    <Link href='/about-us'>
      <a className='about-us' style={{color : router.pathname === '/' ? 'black' : 'lightgray'}} >
        About us
      </a>
    </Link>
  </nav>
}