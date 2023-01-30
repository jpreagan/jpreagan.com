import Image from "next/image";
import { Track } from "../lib/types";

type Props = {
  tracks: Track[];
};

export default function Spotify({ tracks }: Props) {
  return (
    <>
      <p className="my-4 md:text-lg lg:text-xl">
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
          <article key={id} className="spotify">
            <p className="text-right">{trackNumber + 1}</p>
            <div className="flex items-center gap-4">
              <a href={albumUrl}>
                <div className="mt-1.5 min-w-[40px]">
                  <Image src={image} alt={album} width={40} height={40} />
                </div>
              </a>
              <div>
                <p className="track-title">
                  <a
                    href={trackUrl}
                    className="text-gray-900 hover:underline dark:text-gray-100"
                  >
                    {trackName}
                  </a>
                </p>
                <p>
                  {artists.map(({ name, url, id: artistId }, index) => (
                    <span key={artistId}>
                      {index > 0 && ", "}
                      <a href={url} className="hover:underline">
                        {name}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <p className="hidden sm:block">
              <a href={albumUrl} className="hover:underline">
                {album}
              </a>
            </p>
            <p className="hidden sm:block">{duration}</p>
          </article>
        )
      )}
    </>
  );
}
