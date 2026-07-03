import React from 'react'
import RotatingText from './RotatingText'
import ImageTrail from './ImageTrail'
import Image from 'next/image'

const Manifesto = () => {
  return (

    <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
      <ImageTrail
        variant="5"
        items={[
          '/images/wallhaven-r2k8wq_1920x1080.png',
          '/images/wallhaven-r2k8wq_1920x1080.png',
          '/images/wallhaven-r2k8wq_1920x1080.png',
          '/images/wallhaven-r2k8wq_1920x1080.png',
          '/images/wallhaven-r2k8wq_1920x1080.png',
          '/images/wallhaven-r2k8wq_1920x1080.png'
        ]}
        imageWidth={400}
        imageHeight={800}
        trailLength={5}
        trailSpacing={20}
        trailSpeed={0.5}
      />
      <div className="flex flex-col items-left justify-left text-left py-20 px-4 bg-black text-white bg-blend-luminosity">
        <h1 className="text-6xl font-bold mb-9 rubik-wet-paint-regular">PHOENIX-WEAR</h1>
        <div className="flex flex-row items-left justify-left text-left mb-4 space-x-2">
          <h2 className="text-2xl font-bold mb-4">REPRESENTING THE</h2>
          <RotatingText
            texts={['CULTURE', 'LIFESTYLE', 'STREETS']}
            mainClassName="bg-transparent text-bold text-white text-2xl mx-3 rubik-wet-paint-regular"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
            splitBy="characters"
            auto
            loop
          />
        </div>
        <p className="text-2xl font-light max-w-3xl">
          We believe in the power of fashion to express individuality and creativity. Our mission is to provide high-quality, sustainable clothing that empowers people to make a positive impact on the world.
        </p>

        <div className='flex justify-end items-center mb-10'>
          <Image
            src="/images/wallhaven-r2k8wq_1920x1080.png"
            alt="Placeholder"
            width={400}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}

export default Manifesto