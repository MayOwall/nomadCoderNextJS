import Layout from '../components/Layout';
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
      <Component {...pageProps} />
      <span>Hello this is from _app</span>
      </Layout>
    </div>
  )
}
