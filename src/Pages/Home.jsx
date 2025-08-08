import React from 'react'
import Hero from "../Component/Hero"
import Features from "../Pages/Features"
import Blog from "../Pages/Blog"
import Testimony from '../Component/Testimony'
import  Trusted from '../Component/Trusted'
import Corefeautures from './Corefeautures'
const Home = () => {
  return (
    <main className="m-0 p-0">
      <section className="lg:h-screen w-full overflow-hidden m-0 p-0">
        <Hero />
      </section>
      <div>
        {/* <Trusted/> */}
      </div>
      <section className="w-full m-0 p-0">
        {/* <Features /> */}
        <Corefeautures/>
      </section>
      <div >
      <Testimony />
    </div>
    </main>
  )
}

export default Home
