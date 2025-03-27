// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import GoogleAnalytics from '../components/googleanalytics';

function MyApp({Component, pageProps}) {
  <GoogleAnalytics />;
  return <Component {...pageProps} />;
}

export default MyApp;
