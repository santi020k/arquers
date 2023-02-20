// Libs:
import 'raf/polyfill'
import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-expect-error Property '_frameTimestamp' does not exist on type 'Window & typeof globalThis'.ts(2339)
    window._frameTimestamp = null
  }
}

fixReanimatedIssue()

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Arquers</title>
        <meta name="description" content="Arquers club App." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
