import React from "react";

import * as styles from "./Music.css";

export default function Music({ tracks }) {
  return (
    <>
      <p>A live feed of my recently played tracks on Spotify.</p>
      <ol>
        {tracks.map(
          ({
            track: {
              artists,
              id,
              name,
              external_urls: { spotify: url },
            },
          }) => (
            <li key={id} className={styles.track}>
              <p>
                <a href={url}>{name}</a> by{" "}
                {artists.map(({ name: artist }) => artist).join(", ")}
              </p>
            </li>
          )
        )}
      </ol>
    </>
  );
}
