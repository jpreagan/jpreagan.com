module.exports = {
  siteMetadata: {
    title: `James Reagan`,
    description: `My personal website.`,
    author: `James Reagan`,
    siteUrl: `https://jpreagan.com/`,
    social: {
      twitter: `https://twitter.com/jpreagan_`,
      linkedin: `https://www.linkedin.com/in/jpreagan/`,
      github: `https://github.com/jpreagan`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 608,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `James Reagan`,
        short_name: `James Reagan`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profile_pic.jpeg`,
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
}
