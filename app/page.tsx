import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Collections from '@/components/Collections'


const page = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifesto />
      <Collections />
    </main>
  )
}

export default page