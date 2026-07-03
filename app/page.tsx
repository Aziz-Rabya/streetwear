import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'


const page = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifesto />
    </main>
  )
}

export default page