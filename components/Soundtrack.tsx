"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMusic, songs } from "./music";

const Soundtrack = () => {
  const vinylRef = useRef<HTMLImageElement>(null);

  const {
    isPlaying,
    currentSongData,
    progress,
    currentTime,
    duration,
    togglePlay,
    nextSong,
    prevSong,
    setCurrentTime,
  } = useMusic();

  // Vinyl animation
  useGSAP(() => {
    const vinyl = vinylRef.current;

    if (!vinyl) return;

    if (isPlaying) {
      gsap.to(vinyl, {
        rotation: "+=360",
        duration: 4,
        ease: "none",
        repeat: -1,
      });
    } else {
      gsap.killTweensOf(vinyl);
    }
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSeek = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTime = Number(event.target.value);
    setCurrentTime(newTime);
  };

  const handleSongClick = (index: number) => {
    if (index === currentSongData.index) {
      togglePlay();
      return;
    }

    // Go directly to the selected song.
    // Using next/previous repeatedly isn't ideal,
    // so the music module can be extended later with
    // a selectSong() function if you want arbitrary selection.
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      {/* Left side - Vinyl */}
      <div className="flex flex-1 items-center justify-center">
        <div className="relative">
          <Image
            src="/images/vinyl.svg"
            width={400}
            height={400}
            alt="vinyl"
            ref={vinylRef}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Right side - Controls and info */}
      <div className="flex flex-1 flex-col items-start justify-center gap-6 pl-8">
        <div>
          <p className="mb-2 text-sm uppercase tracking-widest text-white opacity-60">
            Now Playing
          </p>

          <h2 className="text-3xl font-light tracking-wider text-white">
            {currentSongData.title}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Phoenix Wear Soundtrack
          </p>
        </div>

        {/* Progress */}
        <div className="w-full max-w-md">
          <div className="mb-1 flex justify-between text-xs text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Seek bar */}
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={handleSeek}
            disabled={!duration}
            className="w-full cursor-pointer accent-white"
            aria-label="Seek through song"
          />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={prevSong}
            className="p-2 text-white/60 transition hover:text-white"
            aria-label="Previous song"
          >
            <i className="bx bx-skip-previous text-3xl" />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="rounded-full bg-white p-4 text-black shadow-lg transition-transform hover:scale-105"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            <i
              className={`bx ${
                isPlaying ? "bx-pause" : "bx-play"
              } text-3xl`}
            />
          </button>

          <button
            type="button"
            onClick={nextSong}
            className="p-2 text-white/60 transition hover:text-white"
            aria-label="Next song"
          >
            <i className="bx bx-skip-next text-3xl" />
          </button>

          <span className="ml-2 text-xs text-gray-500">
            {isPlaying ? "▶ Playing" : "⏸ Paused"}
          </span>
        </div>

        {/* Queue */}
        <div className="mt-6 w-full max-w-md">
          <p className="mb-3 text-xs uppercase tracking-wider text-gray-500">
            Up Next
          </p>

          <div className="flex flex-col gap-2">
            {songs.map((song, index) => (
              <button
                type="button"
                key={song.src}
                onClick={() => handleSongClick(index)}
                className={`flex w-full items-center justify-between rounded p-3 text-left text-sm transition ${
                  index === currentSongData.index
                    ? "border-l-2 border-white bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5"
                }`}
              >
                <span>{song.title}</span>

                {index === currentSongData.index && (
                  <span className="text-xs text-white">
                    {isPlaying ? "● Playing" : "⏸ Paused"}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soundtrack;


