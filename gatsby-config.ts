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
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
