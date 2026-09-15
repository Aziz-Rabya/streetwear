"use client";

import { useEffect, useState } from "react";

export const songs = [
  {
    src: "/audios/George_Bondo.mp3",
    title: "George Bondo",
  },
  {
    src: "/audios/NY_State_of_Mind.mp3",
    title: "NY STATE OF MIND",
  },
  {
    src: "/audios/Scotties.mp3",
    title: "SCOTTIES",
  },
   {
    src: "/audios/The_World_Is_Yours.mp3",
    title: "THE WORLD IS YOURS",
  },
];

// Singleton audio instance
let audioInstance: HTMLAudioElement | null = null;

// Subscribers for React components
let listeners: (() => void)[] = [];

// Global music state
let currentSongIndex = 0;
let isPlaying = true;
let progress = 0;
let duration = 0;
let currentTime = 0;

// The song currently loaded into the audio element
let loadedSongIndex: number | null = null;

const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

const getAudio = (): HTMLAudioElement => {
  if (!audioInstance) {
    audioInstance = new Audio();

    audioInstance.addEventListener("timeupdate", () => {
      if (!audioInstance) return;

      currentTime = audioInstance.currentTime;

      if (
        Number.isFinite(audioInstance.duration) &&
        audioInstance.duration > 0
      ) {
        duration = audioInstance.duration;
        progress =
          (audioInstance.currentTime / audioInstance.duration) * 100;
      }

      notifyListeners();
    });

    audioInstance.addEventListener("loadedmetadata", () => {
      if (!audioInstance) return;

      duration = Number.isFinite(audioInstance.duration)
        ? audioInstance.duration
        : 0;

      currentTime = audioInstance.currentTime;
      progress =
        duration > 0 ? (currentTime / duration) * 100 : 0;

      notifyListeners();
    });

    audioInstance.addEventListener("play", () => {
      isPlaying = true;
      notifyListeners();
    });

    audioInstance.addEventListener("pause", () => {
      isPlaying = false;

      // IMPORTANT:
      // Do NOT reset currentTime here.
      // HTMLAudioElement.pause() automatically preserves it.
      notifyListeners();
    });

    audioInstance.addEventListener("ended", () => {
      // Move to the next track when the current one finishes.
      nextSong();
    });
  }

  return audioInstance;
};

// Load a song only when the song actually changes.
// This prevents Play/Pause from restarting the song.
const loadSong = (index: number) => {
  const audio = getAudio();

  if (loadedSongIndex === index) {
    return audio;
  }

  loadedSongIndex = index;

  audio.src = songs[index].src;
  audio.load();

  currentTime = 0;
  progress = 0;
  duration = 0;

  notifyListeners();

  return audio;
};

export const playMusic = async () => {
  const audio = loadSong(currentSongIndex);

  // If the song reached the end, start it from the beginning.
  // Otherwise, KEEP the currentTime.
  if (
    Number.isFinite(audio.duration) &&
    audio.duration > 0 &&
    audio.currentTime >= audio.duration
  ) {
    audio.currentTime = 0;
    currentTime = 0;
    progress = 0;
  }

  try {
    await audio.play();

    isPlaying = true;
    notifyListeners();
  } catch (error) {
    console.error("Play error:", error);

    isPlaying = false;
    notifyListeners();
  }
};

export const pauseMusic = () => {
  const audio = getAudio();

  audio.pause();

  // pause() automatically preserves audio.currentTime.
  currentTime = audio.currentTime;

  if (audio.duration > 0) {
    progress = (audio.currentTime / audio.duration) * 100;
  }

  isPlaying = false;
  notifyListeners();
};

export const togglePlay = () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
};

export const nextSong = async () => {
  const wasPlaying = isPlaying;

  currentSongIndex =
    (currentSongIndex + 1) % songs.length;

  const audio = loadSong(currentSongIndex);

  // Loading a new source can trigger pause.
  // Use the previous playing state instead.
  isPlaying = false;
  notifyListeners();

  if (wasPlaying) {
    try {
      await audio.play();

      isPlaying = true;
      notifyListeners();
    } catch (error) {
      console.error("Next song play error:", error);

      isPlaying = false;
      notifyListeners();
    }
  }
};

export const prevSong = async () => {
  const wasPlaying = isPlaying;

  currentSongIndex =
    (currentSongIndex - 1 + songs.length) % songs.length;

  const audio = loadSong(currentSongIndex);

  isPlaying = false;
  notifyListeners();

  if (wasPlaying) {
    try {
      await audio.play();

      isPlaying = true;
      notifyListeners();
    } catch (error) {
      console.error("Previous song play error:", error);

      isPlaying = false;
      notifyListeners();
    }
  }
};

export const setCurrentTime = (time: number) => {
  const audio = getAudio();

  if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
    return;
  }

  // Keep the seek position inside the song.
  const newTime = Math.max(
    0,
    Math.min(time, audio.duration)
  );

  audio.currentTime = newTime;

  currentTime = newTime;
  progress = (newTime / audio.duration) * 100;

  notifyListeners();
};

export const useMusic = () => {
  const [, setUpdate] = useState(0);

  useEffect(() => {
    const listener = () => {
      setUpdate((value) => value + 1);
    };

    listeners.push(listener);

    const audio = getAudio();

    // Load the first song
    if (loadedSongIndex === null) {
      loadSong(currentSongIndex);
    }

    // Try to autoplay when the website loads
    const startMusic = async () => {
      try {
        await audio.play();

        isPlaying = true;
        notifyListeners();
      } catch (error) {
        // Browser blocked autoplay.
        // Music can still be started with the Play button.
        console.log("Autoplay blocked by browser:", error);

        isPlaying = false;
        notifyListeners();
      }
    };

    startMusic();

    return () => {
      listeners = listeners.filter(
        (item) => item !== listener
      );
    };
  }, []);


  return {
    currentSong: currentSongIndex,

    currentSongData: {
      ...songs[currentSongIndex],
      index: currentSongIndex,
    },

    isPlaying,
    progress,
    duration,
    currentTime,

    togglePlay,
    playMusic,
    pauseMusic,
    nextSong,
    prevSong,
    setCurrentTime,

    songs,
  };
};

