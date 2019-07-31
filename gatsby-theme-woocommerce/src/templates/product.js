import React from 'react';
import Layout from '../components/layout';
import ExternalProduct from '../components/product/external-product';
import SimpleProduct from '../components/product/simple-product';
import { Container } from '../helpers/common-styles';

const ProductTemplate = ({ pageContext: { product, ...pageContext } }) => {
    console.log(product);
    const productLayout = getProductLayout(product);
    return <Layout title={product.name}>{productLayout}</Layout>;
};

const getProductLayout = (product) => {
    switch (product.type) {
        case 'simple':
            return <SimpleProduct product={product} />;
        case 'external':
            return <ExternalProduct product={product} />;
        default:
            return (
                <Container>
                    <p>This product type is not supported yet.</p>
                </Container>
            );
    }
};

export default ProductTemplate;
