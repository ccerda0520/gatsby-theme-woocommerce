import { Link } from 'gatsby';
import styled from 'styled-components';
import { colorPrimary, transitionPrimary } from './variables';

export const Container = styled('div')`
    width: 100%;
    max-width: 1140px;
    margin: auto;
    padding: 0 15px;
`;

export const ButtonPrimary = styled('button')`
    display: inline-block;
    color: white;
    text-transform: uppercase;
    background: ${colorPrimary};
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.05em;
    padding: 10px 15px;
    border: 2px solid ${colorPrimary};
    line-height: 1.1;
    font-size: 14px;
    cursor: pointer;
    transition: ${transitionPrimary};
    &:hover,
    &:focus {
        background: white;
        color: ${colorPrimary};
    }
`;

export const LinkButtonPrimary = styled(Link)`
    display: inline-block;
    color: white;
    text-transform: uppercase;
    background: ${colorPrimary};
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.05em;
    padding: 10px 15px;
    border: 2px solid ${colorPrimary};
    line-height: 1.1;
    font-size: 14px;
    transition: ${transitionPrimary};
    cursor: pointer;
    &:hover,
    &:focus {
        background: white;
        color: ${colorPrimary};
    }
`;

export const StandardLinkButtonPrimary = styled('a')`
    display: inline-block;
    color: white;
    text-transform: uppercase;
    background: ${colorPrimary};
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.05em;
    padding: 10px 15px;
    border: 2px solid ${colorPrimary};
    line-height: 1.1;
    font-size: 14px;
    transition: ${transitionPrimary};
    cursor: pointer;
    &:hover,
    &:focus {
        background: white;
        color: ${colorPrimary};
    }
`;
