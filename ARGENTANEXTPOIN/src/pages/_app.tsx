import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Firebase initialization will be handled in the components that need it
    console.log('Argenta Next.js App initialized')
  }, [])

  return <Component {...pageProps} />
}
