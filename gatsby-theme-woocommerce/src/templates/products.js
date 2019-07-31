import React from 'react';
import Layout from '../components/layout';
import ProductPagination from '../components/product-pagination';
import ProductsList from '../components/products-list';
import { Container } from '../helpers/common-styles';

const ProductsTemplate = ({ pageContext }) => {
    return (
        <Layout title="Paginated Products Page">
            <Container>
                <h1>Paginated Products Page</h1>
                <ProductsList products={pageContext.products} />
                <ProductPagination pageCount={pageContext.pageCount} currentPage={pageContext.currentPage} />
            </Container>
        </Layout>
    );
};

export default ProductsTemplate;
