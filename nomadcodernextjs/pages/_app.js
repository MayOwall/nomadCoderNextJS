import Layout from '../components/Layout';
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color : tomato;
          }
        `}
      </style>
      <span>Hello this is from _app</span>
      </Layout>
    </div>
  )
}
