import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Collections from '@/components/Collections'
import Marquee from '@/components/Marquee'
import Mood from '@/components/Mood'
import Cinematic from '@/components/Cinematic'
import Featured from '@/components/featured'
import Story from '@/components/Story'
import Soundtrack from '@/components/Soundtrack'
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifesto />
      <Marquee />
      <Collections />
      <Mood />
      <Cinematic />
      <Featured />
      <Story />
      <Soundtrack />
      <NewsLetter />
      <Footer />
    </main>
  )
}

export default page
