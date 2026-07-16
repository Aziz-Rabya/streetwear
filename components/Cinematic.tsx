import React from 'react'

const Cinematic = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center overflow-hidden">
      <div>
        <video
          src="/videos/house.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="absolute phoenix top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl font-bold">
          THE WORLD IS YOURS      </h1>
      </div>
    </div>
  )
}

export default Cinematic