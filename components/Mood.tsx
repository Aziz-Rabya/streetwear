import React from 'react'
import InfiniteGallery from './InfiniteCanvas'

const Mood = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mb-2">
      <InfiniteGallery 
      className="w-full h-full"
      width={1850}
      height={1000}
      />
      <h1 className="absolute text-white text-7xl font-bold phoenix">LOUDER THAN HEAVY METAL</h1>
    </div>
  )
}

export default Mood
