import Layout from '../components/Layout'
import '../styles/globals.css'
// Globaler Import von CSS Dateien zB für Packages

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
