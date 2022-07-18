import NavBar from "../components/NavBar"
export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color : tomato;
          }
        `}
      </style>
      <span>Hello this is _app</span>
    </div>
  )
}
