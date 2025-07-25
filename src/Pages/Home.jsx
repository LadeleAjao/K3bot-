import React from 'react'
import Hero from "../Component/Hero"
import Features from "../Pages/Features"

const Home = () => {
  return (
    <main className="m-0 p-0">
      <section className="lg:h-screen w-full overflow-hidden m-0 p-0">
        <Hero />
      </section>

      <section className="w-full m-0 p-0">
        <Features />
      </section>
    </main>
  )
}

export default Home
