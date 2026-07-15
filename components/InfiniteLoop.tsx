"use client";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

const InfiniteLoop = ({ 
  items = [],
  speed = 110,
  numCopies = 2,
  containerClassName = "overflow-hidden",
  scrollerClassName = "marquee-text",
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const width = useElementWidth(containerRef);

  useGSAP(() => {
    if (!scrollerRef.current || width === 0) return;

    // Clear any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Calculate total width of all items
    const totalWidth = width * numCopies;
    const duration = totalWidth / speed;

    // Create the animation with wrapping
    const animation = gsap.to(scrollerRef.current, {
      x: -totalWidth,
      duration: duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          // Wrap the animation to create infinite loop
          const wrapped = parseFloat(x) % totalWidth;
          return wrapped + "px";
        }
      }
    });

    animationRef.current = animation;

    // Handle pause/resume on hover
    const container = containerRef.current;
    const handleMouseEnter = () => {
      if (animationRef.current) {
        animationRef.current.pause();
        setIsPaused(true);
      }
    };
    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.resume();
        setIsPaused(false);
      }
    };

    container?.addEventListener("mouseenter", handleMouseEnter);
    container?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      container?.removeEventListener("mouseenter", handleMouseEnter);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [width, speed, numCopies]);

  // Generate the items with copies
  const renderedItems = [];
  for (let i = 0; i < numCopies; i++) {
    renderedItems.push(
      <div className="flex gap-10" key={i} ref={i === 0 ? containerRef : null}>
        {items.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
    );
  }

  return (
    <div className={containerClassName} ref={containerRef}>
      <div 
        ref={scrollerRef} 
        className={`${scrollerClassName} mt-10 mb-10 text-white text-4xl gap-10 font-bold whitespace-nowrap flex`}
      >
        {renderedItems}
      </div>
    </div>
  );
};

export default InfiniteLoop;