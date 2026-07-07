"use client";

import React, { useState, useEffect } from "react";
import RotatingText from "./RotatingText";
import ImageTrail from "./ImageTrail";
import Image from "next/image";

const images = [
  "/images/_.jpeg",
  "/images/_ (1).jpeg",
  "/images/canvas-city.jpeg",
  "/images/stairs.jpeg"
];

const Manifesto = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageTrail
          variant="6"
          items={[
            "/images/wallhaven-r2k8wq_1920x1080.png",
            "/images/wallhaven-r2k8wq_1920x1080.png",
            "/images/wallhaven-r2k8wq_1920x1080.png",
            "/images/wallhaven-r2k8wq_1920x1080.png",
            "/images/wallhaven-r2k8wq_1920x1080.png",
            "/images/wallhaven-r2k8wq_1920x1080.png",
          ]}
          imageWidth={400}
          imageHeight={400}
          trailLength={5}
          trailSpacing={20}
          trailSpeed={0.5}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center justify-between px-10 text-white">
        {/* Left */}
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-9 rubik-wet-paint-regular">
            PHOENIX-WEAR
          </h1>

          <div className="flex items-center mb-6 space-x-2">
            <h2 className="text-2xl font-bold">
              REPRESENTING THE
            </h2>

            <RotatingText
              texts={["CULTURE", "LIFESTYLE", "STREETS"]}
              mainClassName="bg-transparent text-white text-2xl mx-3 rubik-wet-paint-regular"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
              }}
              rotationInterval={3000}
              splitBy="characters"
              auto
              loop
            />
          </div>

          <p className="text-2xl font-light leading-relaxed">
            We believe in the power of fashion to express individuality and
            creativity. Our mission is to provide high-quality, sustainable
            clothing that empowers people to make a positive impact on the
            world.We believe in the power of fashion to express individuality and
            creativity. Our mission is to provide high-quality, sustainable
            clothing that empowers people to make a positive impact on the
            world.
          </p>
        </div>

        {/* Right */}
        <div className="flex-shrink-0 mx-20 mt-20">
          <div className="relative w-[400px] h-[600px] rounded-lg overflow-hidden">
            <Image
              src={images[currentImage]}
              alt="Phoenix Wear"
              width={400}
              height={600}
              className="rounded-lg object-cover"
            />

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 rounded-b-lg overflow-hidden">
              <div
                key={currentImage}
                className="h-full bg-white animate-progress"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;