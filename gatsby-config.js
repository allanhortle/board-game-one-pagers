module.exports = {
    siteMetadata: {
        title: 'Board Game One Pagers',
        author: 'Allan Hortle',
        description: 'Short instructions for boardgames',
        siteUrl: 'www.boardgameonepagers.com',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/rules`,
                name: 'rules',
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 590,
                    },
                },
                {
                    resolve: `gatsby-remark-responsive-iframe`,
                    options: {
                        wrapperStyle: `margin-bottom: 1.0725rem`,
                    },
                },
                'gatsby-remark-copy-linked-files',
                ],
            },
        },
        // {
        //     resolve: `gatsby-plugin-google-analytics`,
        //     options: {
        //         //trackingId: `ADD YOUR TRACKING ID HERE`,
        //     },
        // },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
                // postCssPlugins: [somePostCssPlugin()],
                precision: 8, // SASS default: 5
            }
        }
    ],
}
