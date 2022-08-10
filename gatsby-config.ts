import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "James Reagan",
    description: "My personal website built with Gatsby.",
    siteUrl: "https://www.jpreagan.com",
    author: "James Reagan",
    social: {
      twitter: "https://twitter.com/jpreagan_",
      linkedin: "https://www.linkedin.com/in/jpreagan/",
      github: "https://github.com/jpreagan",
      youtube: "https://www.youtube.com/channel/UCFBAMSjeJOmQ-gLrqczjRbg",
    },
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-vanilla-extract",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/profile_pic.jpg",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              loadingStrategy: "lazy",
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: (videoId: string) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                sh: "bash",
              },
            },
          },
          "gatsby-remark-images",
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};

export default config;
