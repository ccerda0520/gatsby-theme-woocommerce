import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import ProductsList from '../components/products-list';
import { Container } from '../helpers/common-styles';

const IndexTemplate = () => {
    const data = useStaticQuery(graphql`
        query {
            allWcProducts {
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
                                fixed(width: 300, cropFocus: CENTER) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const products = data.allWcProducts.nodes;
    return (
        <Layout title="Gatsby Theme Woocommerce">
            <Container>
                <h1>Gatsby Theme Woocommerce</h1>
                <ProductsList products={products} />
            </Container>
        </Layout>
    );
};

export default IndexTemplate;
