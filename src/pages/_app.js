import Layout from '../components/Layout'; 
import '../Styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
