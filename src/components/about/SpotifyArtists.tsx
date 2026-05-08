"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa6";
import styles from "./SpotifyArtists.module.scss";

const artists = [
  {
    rank: 1,
    name: "Alan Walker",
    image: "/media/about/alan-walker.jpg",
    audio: "/media/about/alan-walker-on-my-way.mp3",
  },
  {
    rank: 2,
    name: "YOASOBI",
    image: "/media/about/yoasobi.jpg",
    audio: "/media/about/yoasobi-haruka.mp3",
  },
  {
    rank: 3,
    name: "Robin x HOYO-MiX",
    image: "/media/about/robin.jpg",
    audio: "/media/about/robin-hope.mp3",
  },
];

export function SpotifyArtists() {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const toggleTrack = async (name: string) => {
    const selectedAudio = audioRefs.current[name];

    if (!selectedAudio) {
      return;
    }

    Object.entries(audioRefs.current).forEach(([artistName, audio]) => {
      if (artistName !== name && audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    selectedAudio.volume = 0.28;

    if (playing === name) {
      selectedAudio.pause();
      setPlaying(null);
      return;
    }

    await selectedAudio.play();
    setPlaying(name);
  };

  return (
    <div className={styles.aboutCard}>
      <div className={styles.cardHeader}>
        <h3>Top 3 Spotify Artists</h3>
        <FaSpotify aria-hidden="true" />
      </div>
      <div className={styles.artistList}>
        {artists.map((artist) => (
          <button
            className={styles.artistItem}
            key={artist.name}
            type="button"
            onClick={() => toggleTrack(artist.name)}
            aria-label={`${playing === artist.name ? "Pause" : "Play"} ${artist.name}`}
            data-playing={playing === artist.name}
          >
            <span className={styles.artistRank}>{artist.rank}</span>
            <Image
              src={artist.image}
              alt={artist.name}
              width={56}
              height={56}
              className={styles.artistImage}
            />
            <span className={styles.artistName}>{artist.name}</span>
            <span className={styles.spotifyPulse} aria-hidden="true" />
            <audio
              ref={(audio) => {
                audioRefs.current[artist.name] = audio;
                if (audio) {
                  audio.volume = 0.28;
                }
              }}
              src={artist.audio}
              onEnded={() => setPlaying(null)}
              preload="none"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
