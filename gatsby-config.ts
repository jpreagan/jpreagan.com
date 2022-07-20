module.exports = {
  siteMetadata: {
    title: "James Reagan",
    description: "My personal website.",
    author: "James Reagan",
    siteUrl: "https://jpreagan.com/",
    social: {
      twitter: "https://twitter.com/jpreagan_",
      linkedin: "https://www.linkedin.com/in/jpreagan/",
      github: "https://github.com/jpreagan",
      youtube: "https://www.youtube.com/channel/UCFBAMSjeJOmQ-gLrqczjRbg",
      tiktok: "https://www.tiktok.com/@jpreagan.js",
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 700,
              loadingStrategy: "lazy", // Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
            },
          },
          "gatsby-remark-responsive-iframe",
        ],
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "James Reagan",
        short_name: "James Reagan",
        start_url: "/",
        background_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/profile_pic.jpeg",
      },
    },
    "gatsby-plugin-theme-ui",
  ],
}
