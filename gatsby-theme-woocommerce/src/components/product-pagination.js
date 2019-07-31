import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colorPrimary, transitionPrimary } from '../helpers/variables';

const StyledList = styled('ul')`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin-bottom: 50px;
`;

const StyledListItem = styled('li')`
    display: inline-block;
    &:not(:last-of-type) {
        margin-right: 10px;
    }
`;

const StyledLink = styled(Link)`
    display: inline-flex;
    width: 30px;
    height: 30px;
    color: ${colorPrimary};
    font-weight: bold;
    border: 2px solid ${colorPrimary};
    justify-content: center;
    align-items: center;
    line-height: 1;
    text-decoration: none;
    transition: ${transitionPrimary};
    &:hover,
    &:focus {
        color: white;
        background: ${colorPrimary};
    }
`;

const StyledActiveSpan = styled('span')`
    display: inline-flex;
    width: 30px;
    height: 30px;
    color: white;
    font-weight: bold;
    border: 2px solid ${colorPrimary};
    background: ${colorPrimary};
    justify-content: center;
    align-items: center;
    line-height: 1;
    text-decoration: none;
`;

const ProductPagination = ({ pageCount, currentPage }) => {
    return (
        <StyledList>
            {[...Array(pageCount)].map((u, i) => {
                const link = i === 0 ? '/products' : `/products/${i + 1}`;
                return (
                    <StyledListItem key={i}>
                        {currentPage === i + 1 ? <StyledActiveSpan>{currentPage}</StyledActiveSpan> : <StyledLink to={link}>{i + 1}</StyledLink>}
                    </StyledListItem>
                );
            })}
        </StyledList>
    );
};

ProductPagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default ProductPagination;
