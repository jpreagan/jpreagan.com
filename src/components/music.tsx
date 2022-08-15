import React from "react";

import * as styles from "./music.css";

import type { Track } from "../pages/about";

type MusicProps = {
  tracks: Track[];
};

export default function Music({ tracks }: MusicProps) {
  return (
    <>
      <p className={styles.text}>
        A live feed of my recently played tracks on Spotify.
      </p>
      {tracks.map(
        (
          {
            artists,
            album,
            albumUrl,
            id,
            image,
            trackName,
            trackUrl,
            duration,
          },
          trackNumber
        ) => (
          <article key={id} className={styles.grid}>
            <p className={styles.index}>{trackNumber + 1}</p>
            <div className={styles.track}>
              <a href={albumUrl}>
                <img
                  src={image}
                  alt={album}
                  width={40}
                  height={40}
                  className={styles.image}
                />
              </a>
              <div className={styles.container}>
                <p className={styles.trackTitle}>
                  <a href={trackUrl} className={styles.link}>
                    {trackName}
                  </a>
                </p>
                <p className={styles.artist}>
                  {artists.map(({ name, url, id: artistId }, index) => (
                    <span key={artistId}>
                      {index > 0 && ", "}
                      <a href={url} className={styles.link}>
                        {name}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <p className={styles.album}>
              <a href={albumUrl} className={styles.link}>
                {album}
              </a>
            </p>
            <p className={styles.duration}>{duration}</p>
          </article>
        )
      )}
    </>
  );
}
