import React from 'react'
import Hero from './section/Hero'
import Skills from './section/Skills'
import Social from './section/Social'
import Featured from './section/Featured'
import CTA from './section/CTA'

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Social />
        <Featured />
        <CTA />
      </main>
    </>
  )
}

export default Home
