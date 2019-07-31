import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../helpers/global-style';
import { CartProvider } from './custom-hooks/use-cart';
import Header from './header';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <title>{title}</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <GlobalStyle />
            <CartProvider>
                <Header />
                <main>{children}</main>
            </CartProvider>
        </div>
    );
};

export default Layout;
