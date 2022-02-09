import Head from 'next/head'
import { CryptoCards, Button } from 'web3uikit';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CryptoCards chain="ethereum" />
      <Button theme="primary" type="button">
        Launch dApp
      </Button>
    </div>
  )
}
