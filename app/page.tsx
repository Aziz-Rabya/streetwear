import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Collections from '@/components/Collections'
import Marquee from '@/components/Marquee'
import Cinematic from '@/components/Cinematic'


const page = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifesto />
      <Marquee />
      <Collections />
      <Cinematic />
    </main>
  )
}

export default page