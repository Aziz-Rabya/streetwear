"use client";

import { useEffect, useState } from "react";


const slides = [
  {
    type: "video",
    src: "/videos/house.mp4",
    title: "SUMMER DROP",
    subtitle: "Minimal. Clean. Timeless.",
    button: "Discover",
  },
  {
    type: "image",
    src: "/images/wallhaven-r2k8wq_1920x1080.png",
    title: "ESSENTIAL GEARS",
    subtitle: "Premium everyday wear.",
    button: "Explore",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Auto-advance images after 5 seconds
  useEffect(() => {
    if (slides[currentSlide].type !== "image") return;

    const timer = setTimeout(nextSlide, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative h-screen w-full bg-cover bg-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity h-full  duration-1000 ${
            index === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {slide.type === "video" ? (
            <video
              src={slide.src}
              autoPlay={currentSlide === index}
              loop={currentSlide === index}
              muted
              playsInline
              preload="auto"
              onEnded={
                index === currentSlide ? nextSlide : undefined
              }
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-6xl font-bold">
              {slide.title}
            </h1>

            <p className="mb-8 text-xl">
              {slide.subtitle}
            </p>

            <button className="rounded bg-white px-8 py-3 text-black transition hover:scale-105">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}