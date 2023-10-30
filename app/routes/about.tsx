import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { Track } from "~/lib/types";

export const meta: MetaFunction = () => {
  return [
    { title: "About me" },
    {
      name: "description",
      content:
        "Learn more about me, I'm a Hawaii-based software engineer with a passion for web performance and accessibility.",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  async function getAccessToken(): Promise<{ access_token: string } | null> {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  }

  try {
    const tokenResponse = await getAccessToken();

    if (!tokenResponse) {
      return json({ tracks: [] });
    }

    const { access_token } = tokenResponse;
    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      return json({ tracks: [] });
    }

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
          }),
        ),
        album: track.album.name,
        albumUrl: track.album.external_urls.spotify,
        id: track.id,
        image: track.album.images[2]?.url || "",
        trackName: track.name,
        trackUrl: track.external_urls.spotify,
        duration,
      };
    });

    return json({ tracks });
  } catch {
    return json({ tracks: [] });
  }
};

type LoaderData = { tracks: Track[] };

export default function AboutPage() {
  const { tracks } = useLoaderData<LoaderData>();

  return (
    <>
      <h1 className="page-title">About me</h1>
      <section className="about-section">
        <p>
          I&apos;m a software engineer in Hawai&#699;i focused on web
          application development. My mission is to create technology that
          solves problems and improves people&apos;s lives by building
          accessible and efficient applications with a positive impact on
          society. Moreover, I am dedicated to fostering a culture of
          collaboration and inclusivity in the tech community and always strive
          for personal and professional growth.
        </p>
        <p>
          As a passionate advocate for open-source software, I actively
          contribute to various projects and believe in the power of
          collaboration to drive innovation. I also enjoy sharing my learning
          journey on my <Link to="/blog">blog</Link>, where I offer insights,
          tutorials, and experiences that can help others in their journey.
        </p>
        <p>
          Please feel free to <Link to="/contact">reach out</Link> if I can
          assist you or if you&apos;d like to collaborate on a project. I&apos;m
          always eager to connect with like-minded individuals and explore new
          opportunities.
        </p>
      </section>
      {tracks.length > 0 && (
        <section className="recently-played">
          <h2 className="recently-played-heading">Recently Played</h2>
          <p className="recently-played-description">
            A live feed of my recently played tracks on Spotify.
          </p>
          {tracks.map((track, index) => (
            <article key={track.id} className="recently-played-item">
              <p className="track-number">{index + 1}</p>
              <div className="track">
                <a href={track.albumUrl}>
                  <div className="album-image">
                    <img
                      src={track.image}
                      alt={track.album}
                      width={40}
                      height={40}
                    />
                  </div>
                </a>
                <div>
                  <p className="track-name">
                    <a href={track.trackUrl}>{track.trackName}</a>
                  </p>
                  <p>
                    {track.artists.map((artist, index) => (
                      <span key={artist.id} className="artist-name">
                        {index > 0 && ", "}
                        <a href={artist.url}>{artist.name}</a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <p className="album">
                <a href={track.albumUrl}>{track.album}</a>
              </p>
              <p className="track-duration">{track.duration}</p>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
