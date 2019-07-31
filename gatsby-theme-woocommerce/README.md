# Gatsby Theme Woocommerce

This is a Gatsby theme for displaying products from a Wordpress Woocommerce instance.

See the [live demo](https://gatsby-theme-woocommerce.netlify.com/)

## Features

The theme isn't yet a fully functioning ecommerce site with the ability to checkout, but instead it is a proof of concept of what can be done with Woocommmerce and Gatsby. The following features are available in the theme:

-   All Products Page
-   Paginated Products page
-   Simple Product Page
-   External Product Page
-   Local Storage MiniCart

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save @ccerda0520/gatsby-theme-woocommerce
    ```

2.  Add the theme to your `gatsby-config.js`:

        ```js
        module.exports = {
        plugins: [
            {
                resolve: '@ccerda0520/gatsby-theme-woocommerce',
                options: {
                    woocommerce_api: 'wp-woocommerce-themejam.dev.localhost',
                    woocommerce_https: false,
                    woocommerce_consumer_key: 'ck_79997ad91749a5dfe86e34133ac247aaed932216',
                    woocommerce_consumer_secret: 'cs_cbaf2e1a7c262b64f7b42d740db98635ea1bd84c',
                },
            },
        ],

    };

Replace the options above with your woocommerce site's correct data. To grab the woocommerce consumer key and token, visit the following for [instructions](https://docs.woocommerce.com/document/woocommerce-rest-api/)

3.  Start your site
    ```sh
    gatsby develop
    ```
