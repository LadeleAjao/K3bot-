import React from 'react'
import Hero from "../Component/Hero"
import Features from "../Pages/Features"
import Blog from "../Pages/Blog"
import Testimony from '../Component/Testimony'
import Trusted from '../Component/Trusted'
import Corefeautures from './Corefeautures'

const Home = () => {
  return (
    <main className=" w-full flex flex-col bg-[#F9FAFB]">
      {/* <section className="flex-1 w-full min-h-screen"> */}
        <Hero />
      {/* </section>
      <section className="w-full block md:hidden"> */}
        <Corefeautures />
      {/* </section>
      <section className="w-full hidden md:block"> */}
        <Corefeautures />
      {/* </section> */}
      {/* <section className="w-full"> */}
        <Testimony />
      {/* </section> */}
    </main>
  )
}

export default Home