const path = require("path");

module.exports = {
  siteMetadata: {
    title:
      "l0rdcafé 👑 Personal Homepage of Ismail Arafa, Freelance Front End Web Developer and Musician based in Toronto, Canada 🍁",
    siteUrl: "http://www.l0rdcafe.com"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        theme_color: "#3d9970",
        display: "minimal-ui" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.resolve("./source/_posts")
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    },
    "gatsby-plugin-offline"
  ]
};
