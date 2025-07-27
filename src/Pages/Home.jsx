import React from 'react'
import Hero from "../Component/Hero"
import Features from "../Pages/Features"
import Blog from "../Pages/Blog"
import Niche from './Niche'
import Testimony from '../Component/Testimony'

const Home = () => {
  return (
    <main className="m-0 p-0">
      <section className="lg:h-screen w-full overflow-hidden m-0 p-0">
        <Hero />
      </section>

      <section className="w-full m-0 p-0">
        <Features />
      </section>
      <div className="min-h-screen">
      <Testimony />
    </div>
    </main>
  )
}

export default Home
