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
  const [isPlaying, setIsPlaying] = useState(true);

  // Start music when page loads
  useEffect(() => {
    const audio = audioRef.current;

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        console.log("Autoplay blocked by browser.");
      });
  }, []);

  // Change song source
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = songs[currentSong];

    if (isPlaying) {
      audio.play().catch(() => {});
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
    <div className="flex justify-between items-center p-4 bg-transparent text-white">
      <audio ref={audioRef} src={songs[0]} />

      <header>PHOENIX-WEAR</header>

      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        <ul className="flex space-x-4">
          <i className="bx bx-cart-alt" />
          <i className="bx bx-user" />

          {!isPlaying ? (
            <i
              className="bx bx-volume-full"
              onClick={playMusic}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <i
              className="bx bx-volume-mute"
              onClick={pauseMusic}
              style={{ cursor: "pointer" }}
            />
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;