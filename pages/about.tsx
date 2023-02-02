/// <reference types="spotify-api" />
import Head from "next/head";
import Link from "next/link";
import querystring from "query-string";
import Layout from "../components/layout";
import Spotify from "../components/spotify";
import Photos from "../components/photos";
import type { Track } from "../lib/types";

type Props = {
  tracks: Track[];
};

export default function AboutPage({ tracks }: Props) {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Learn more about me, I'm a Hawaii-based software engineer with a passion for web performance and accessibility."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="mx-auto mb-8 max-w-5xl px-4 text-4xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          About
        </h1>
      </header>

      <section className="prose mx-auto mb-16 max-w-5xl px-4 prose-a:text-sky-600 dark:prose-invert dark:prose-a:text-sky-300 md:prose-lg lg:mb-32 lg:prose-xl">
        <p>
          I&apos;m a software engineer in Hawaii, specializing in full-stack web
          development with a focus on accessibility and performance. My mission
          is to create technology that not only solves problems but also
          improves people&apos;s lives, by building accessible and efficient
          applications with a positive impact on society. I am committed to
          continuous learning and growth, both personally and professionally,
          and to fostering a culture of collaboration and inclusivity in the
          tech community.
        </p>
        <p>
          I share my learning journey on my <Link href="/blog">blog</Link> and{" "}
          <Link href="">YouTube</Link> channel and am always available to help.
          If you think I can be of any assistance, don&apos;t hesitate to{" "}
          <Link href="/contact">reach out</Link>
        </p>
      </section>

      <Photos />

      <section className="my-16 mx-auto max-w-5xl px-4 lg:my-32">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl lg:text-4xl">
          Recently played
        </h2>
        <Spotify tracks={tracks} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
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

  return {
    props: { tracks },
  };
}
