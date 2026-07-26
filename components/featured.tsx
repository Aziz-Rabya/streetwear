import React from 'react'
import { Button } from './ui/button'

const featured = () => {
    return (
        <div className="relative h-screen w-full bg-cover bg-center overflow-hidden mt-7">
            <video
                src="/videos/roof.mp4"
                className="h-full w-full object-cover" autoPlay loop muted playsInline
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
                <h1 className="mb-4 font-bold unifrakturmaguntia-regular sm:text-5xl md:text-6xl lg:text-9xl">
                    FEATURED DROP
                </h1>

                <p className="mb-8 text-xl">
                    Discover our exclusive featured collection.
                </p>

                <Button variant="secondary" size="lg" className="mt-4 bg-transparent backdrop-blur border-white text-black font-extrabold hover:bg-white hover:text-black">
                    EXPLORE NOW
                </Button>
            </div>
        </div>
    )
}

export default featured
