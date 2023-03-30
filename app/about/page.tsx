/// <reference types="spotify-api" />
import Link from "next/link";
import Image from "next/image";
import Photos from "~/components/photos";
import querystring from "query-string";
import "~/styles/spotify.css";

export const metadata = {
  title: "About me",
  description:
    "Learn more about me, I'm a Hawaii-based software engineer with a passion for web performance and accessibility.",
};

export default async function AboutPage() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  async function getAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      cache: "no-store",
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });

    return response.json();
  }

  async function getRecentlyPlayed() {
    const { access_token } = await getAccessToken();

    return fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    });
  }

  const response = await getRecentlyPlayed();
  const { items }: SpotifyApi.UsersRecentlyPlayedTracksResponse =
    await response.json();

  const tracks = items.map(({ track }) => {
    const minutes = Math.floor(track.duration_ms / 1000 / 60);
    const seconds = Math.floor(track.duration_ms / 1000) % 60;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const duration = `${minutes}:${paddedSeconds}`;

    return {
      artists: track.artists.map(
        ({ external_urls: { spotify: url }, id, name }) => ({
          url,
          id,
          name,
        })
      ),
      album: track.album.name,
      albumUrl: track.album.external_urls.spotify,
      id: track.id,
      image: track.album.images[2].url,
      trackName: track.name,
      trackUrl: track.external_urls.spotify,
      duration,
    };
  });

  return (
    <>
      <header>
        <h1 className="mx-auto mb-8 max-w-5xl px-4 text-4xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          About
        </h1>
      </header>

      <section className="prose mx-auto mb-16 max-w-5xl px-4 dark:prose-invert md:prose-lg lg:prose-xl prose-a:text-sky-600 dark:prose-a:text-sky-300 lg:mb-32">
        <p>
          I&apos;m a software engineer in Hawaii, specializing in full-stack web
          development with a focus on accessibility and performance. My mission
          is to create technology that not only solves problems, but also
          improves people&apos;s lives by building accessible and efficient
          applications with a positive impact on society. I am committed to
          continuous learning and growth, both personally and professionally,
          and to fostering a culture of collaboration and inclusivity in the
          tech community.
        </p>
        <p>
          I share my learning journey on my <Link href="/blog">blog</Link> and{" "}
          <a href="https://www.youtube.com/channel/UCFBAMSjeJOmQ-gLrqczjRbg">
            YouTube
          </a>{" "}
          channel and am always available to help. If you think I can be of any
          assistance, don&apos;t hesitate to{" "}
          <Link href="/contact">reach out</Link>.
        </p>
      </section>

      <Photos />

      <section className="mx-auto my-16 max-w-5xl px-4 lg:my-32">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl lg:text-4xl">
          Recently played
        </h2>

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
      </section>
    </>
  );
}
