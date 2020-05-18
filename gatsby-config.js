module.exports = {
  siteMetadata: {
    title: "Web Tricks",
    siteUrl: "{YOUR_SITE_URL_HERE}",
    titleTemplate: "%s · Web Tricks",
    description: "A collection of web development tips and tricks.",
    url: "{YOUR_SITE_URL_HERE}",
    image: "logo.webp",
    twitterUsername: "@{YOUR_TWITTER_HANDLE_HERE}",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter",
        short_name: "Gatsby Starter",
        start_url: "/",
        lang: "en",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "static/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
  ],
};
