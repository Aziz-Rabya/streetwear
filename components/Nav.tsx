"use client";

import React from "react";
import { useMusic } from "./music";

const Nav = () => {
  const {
    isPlaying,
    togglePlay,
    nextSong,
    prevSong,
    progress,
    currentSongData,
  } = useMusic();

  return (
    <nav className="absolute left-0 top-0 z-50 w-full text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <header className="text-xl font-bold tracking-wider">
          PHOENIX-WEAR
        </header>

        <div className="flex items-center gap-8">
          {/* Navigation */}
          <ul className="flex gap-6 font-medium">
            <li>
              <a
                href="/"
                className="transition hover:text-gray-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="transition hover:text-gray-300"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="transition hover:text-gray-300"
              >
                About
              </a>
            </li>
          </ul>

          {/* Music controls */}
          <div className="flex items-center gap-4 text-xl">
            <button
              type="button"
              className="transition hover:text-gray-300"
              aria-label="Cart"
            >
              <i className="bx bx-cart-alt" />
            </button>

            <button
              type="button"
              className="transition hover:text-gray-300"
              aria-label="Account"
            >
              <i className="bx bx-user" />
            </button>
            {/* Current song */}
            <span className="hidden text-xs font-light text-gray-300 md:block">
              {currentSongData.title}
            </span>

            {/* Progress */}
            <div className="hidden h-1 w-20 overflow-hidden rounded-full bg-gray-600 md:block">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{
                  width: `${Math.min(
                    Math.max(progress, 0),
                    100
                  )}%`,
                }}
              />
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={prevSong}
              className="transition hover:text-gray-300"
              aria-label="Previous song"
            >
              <i className="bx bx-skip-previous" />
            </button>

            {/* Play / Pause */}
            <button
              type="button"
              onClick={togglePlay}
              className="transition hover:text-gray-300"
              aria-label={
                isPlaying
                  ? "Pause music"
                  : "Play music"
              }
            >
              <i
                className={`bx ${
                  isPlaying
                    ? "bx-pause-circle"
                    : "bx-play-circle"
                } text-2xl`}
              />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextSong}
              className="transition hover:text-gray-300"
              aria-label="Next song"
            >
              <i className="bx bx-skip-next" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

