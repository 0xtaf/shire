import 'normalize.css';
import '../styles/app.css';
import AuthProvider from '../Context/AuthContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
