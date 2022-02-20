import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
const style={
  wrapper:'h-screen max-h-screen h-min-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between',
}
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Uniswap clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div className={style.wrapper} >
      {/* header */}
      <Header />
      {/* main */}
      <Main />
      {/* transaction history */}
      transactio
       </div>
      </div>
  )
}

export default Home
