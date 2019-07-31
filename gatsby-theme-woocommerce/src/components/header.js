import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../helpers/common-styles';
import { colorHeaderBackground, colorPrimary, transitionPrimary } from '../helpers/variables';
import MiniCart from './minicart';

const StyledNav = styled('nav')`
    padding-left: 35px;
`;

const StyledList = styled('ul')`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const StyledListItem = styled('li')`
    &:not(:last-of-type) {
        margin-right: 20px;
    }
`;

const StyledHeader = styled('header')`
    background: ${colorHeaderBackground};
    padding: 25px 0;
`;

const StyledHeaderText = styled('div')`
    font-size: 25px;
    color: white;
`;

const CustomContainer = styled(Container)`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    color: white;
    text-decoration: none;
    transition: ${transitionPrimary};
    &:hover,
    &:focus {
        color: ${colorPrimary};
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <CustomContainer>
                <StyledHeaderText>Gatsby Theme Woocommerce</StyledHeaderText>
                <StyledNav>
                    <StyledList>
                        <StyledListItem>
                            <StyledLink to="/">Home</StyledLink>
                        </StyledListItem>
                        <StyledListItem>
                            <StyledLink to="/products">Products</StyledLink>
                        </StyledListItem>
                    </StyledList>
                </StyledNav>
                <MiniCart />
            </CustomContainer>
        </StyledHeader>
    );
};

export default Header;
