// query products and create pages
exports.createPages = async ({ actions, graphql, reporter }) => {
    const basePath = '/';
    actions.createPage({
        path: basePath,
        component: require.resolve('./src/templates/index.js'),
    });

    const result = await graphql(`
        query {
            allWcProducts {
                nodes {
                    id
                    name
                    type
                    sku
                    slug
                    regular_price
                    sale_price
                    on_sale
                    description
                    short_description
                    status
                    external_url
                    attributes {
                        id
                        name
                        visible
                        variation
                        options
                    }
                    product_variations {
                        id
                        description
                        sku
                        stock_status
                        regular_price
                        sale_price
                        on_sale
                    }
                    images {
                        src
                        name
                        alt
                        localFile {
                            childImageSharp {
                                fixed(quality: 90, width: 350, cropFocus: CENTER) {
                                    base64
                                    width
                                    height
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panic('error loading products', result.errors);
    }

    const products = result.data.allWcProducts.nodes;
    products.forEach((product) => {
        if (product.status === 'publish') {
            const slug = product.slug;
            actions.createPage({
                path: slug,
                component: require.resolve('./src/templates/product.js'),
                context: {
                    product: product,
                },
            });
        }
    });

    // Created paginated pages
    const paginatedProducts = await graphql(`
        query {
            allWcProducts(limit: 6) {
                pageInfo {
                    currentPage
                    pageCount
                }
            }
        }
    `);

    const pageCount = paginatedProducts.data.allWcProducts.pageInfo.pageCount;
    if (pageCount > 1) {
        await Promise.all(
            [...Array(pageCount)].map(async (u, i) => {
                const specificPaginatedProductsResult = await graphql(`
                    query {
                        allWcProducts(limit: 6, skip: ${6 * i}) {
                            nodes {
                                id
                                name
                                sku
                                slug
                                regular_price
                                sale_price
                                on_sale
                                short_description
                                status
                                images {
                                    src
                                    name
                                    alt
                                    localFile {
                                        childImageSharp {
                                            fixed(quality: 90, width: 300, cropFocus: CENTER) {
                                                base64
                                                width
                                                height
                                                src
                                                srcSet
                                            }
                                        }
                                    }
                                }
                            }
                            pageInfo {
                                currentPage
                                pageCount
                            }
                        }
                    }
                `);
                if (specificPaginatedProductsResult.errors) {
                    reporter.panic('error loading products', specificPaginatedProductsResult.errors);
                }
                if (i === 0) {
                    actions.createPage({
                        path: `/products`,
                        component: require.resolve('./src/templates/products.js'),
                        context: {
                            currentPage: specificPaginatedProductsResult.data.allWcProducts.pageInfo.currentPage,
                            pageCount: specificPaginatedProductsResult.data.allWcProducts.pageInfo.pageCount,
                            products: specificPaginatedProductsResult.data.allWcProducts.nodes,
                        },
                    });
                } else {
                    actions.createPage({
                        path: `/products/${i + 1}`,
                        component: require.resolve('./src/templates/products.js'),
                        context: {
                            currentPage: specificPaginatedProductsResult.data.allWcProducts.pageInfo.currentPage,
                            pageCount: specificPaginatedProductsResult.data.allWcProducts.pageInfo.pageCount,
                            products: specificPaginatedProductsResult.data.allWcProducts.nodes,
                        },
                    });
                }
            }),
        );
    } else {
        actions.createPage({
            path: '/products',
            component: require.resolve('./src/templates/index.js'),
        });
    }
};
