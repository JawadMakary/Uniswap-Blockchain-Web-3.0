import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
const style = {
  wrapper:
  // bg-[#2d242f]
    'h-screen max-h-screen h-min-screen w-screen  text-white select-none flex flex-col justify-between',
}
const Home: NextPage = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: 'url(https://wallpaperaccess.com/full/1267683.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Head>
        <title>Uniswap clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.wrapper}>
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
