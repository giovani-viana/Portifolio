import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.css'
import { SSRProvider } from 'react-bootstrap'

import MainContainer from '../Components/MainContainer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </SSRProvider>
  )
}
