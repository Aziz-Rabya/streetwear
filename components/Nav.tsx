"use client";
import React, { useEffect, useRef, useState } from "react";

const songs = [
  "/audios/ive-been-wrong-so-long.mp3",
  "/audios/i-know-i-need-you.mp3",
  "/audios/never-again.mp3",
];

const Nav = () => {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Start music when page loads
  useEffect(() => {
    const audio = audioRef.current;

    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
        console.log("Autoplay blocked.");
      });
  }, []);

  // Change song source
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = songs[currentSong];

    if (isPlaying) {
      audio.play().catch(() => { });
    }
  }, [currentSong]);

  // Go to next song automatically
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      setCurrentSong((prev) => (prev + 1) % songs.length);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const playMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <nav className="absolute top-0 left-0 z-50 w-full text-white">
      <audio ref={audioRef} src={songs[0]} />
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <header>PHOENIX-WEAR</header>

        <div className="flex items-center gap-8">
          <ul className="flex gap-6">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
          </ul>

          <ul className="flex items-center gap-4">
            <i className="bx bx-cart-alt" />
            <i className="bx bx-user" />
            {isPlaying ? (<i className="bx bx-volume-full" onClick={pauseMusic} style={{ cursor: "pointer" }} />) : (<i className="bx bx-volume-mute" onClick={playMusic} style={{ cursor: "pointer" }} />)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;