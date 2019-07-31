module.exports = ({ woocommerce_api, woocommerce_https, woocommerce_consumer_key, woocommerce_consumer_secret }) => ({
    plugins: [
        {
            resolve: '@pasdo501/gatsby-source-woocommerce',
            options: {
                api: woocommerce_api,
                https: woocommerce_https,
                api_keys: {
                    consumer_key: woocommerce_consumer_key,
                    consumer_secret: woocommerce_consumer_secret,
                },
                fields: ['products', 'products/categories'],
                api_version: 'wc/v3',
                per_page: 20,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/, // See below to configure properly
                },
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
    ],
});
