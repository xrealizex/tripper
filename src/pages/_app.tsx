import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import { AuthInfo } from '../pages/api/AuthInfo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthInfo />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
