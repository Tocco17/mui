import { AppPropsWithLayout } from '@/src/types'
import '@/styles/globals.css'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App(props: AppPropsWithLayout<{session: Session}>) {
  const {
    Component,
    pageProps: {
      session,
      ...pageProps
    },
  } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Titolo</title>
      </Head>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  );
}
