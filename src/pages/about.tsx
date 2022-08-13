/* eslint-disable camelcase */
import React from "react";
import querystring from "query-string";

import Layout from "../components/layout";
import Seo from "../components/seo";
import About from "../components/about";
import Music from "../components/music";

import * as styles from "../styles/page.css";

export default function AboutPage({ serverData }) {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.title}>About me</h1>
        <About />
      </section>
      <section className={styles.container}>
        <h2 className={styles.heading}>Recently played</h2>
        <Music tracks={serverData} />
      </section>
    </Layout>
  );
}

export async function getServerData() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  const getAccessToken = async () => {
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
  };

  const getRecentlyPlayed = async () => {
    const { access_token } = await getAccessToken();

    return fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  const response = await getRecentlyPlayed();
  const { items } = await response.json();

  return {
    props: items,
  };
}

export function Head() {
  return <Seo title="About me" />;
}
