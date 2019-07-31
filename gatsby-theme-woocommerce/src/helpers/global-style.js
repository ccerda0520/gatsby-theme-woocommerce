import { createGlobalStyle } from 'styled-components';
import { colorTextPrimary, fontFamilyPrimary } from '../helpers/variables';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
    * {
        font-family: ${fontFamilyPrimary};
        box-sizing: border-box;
        color: ${colorTextPrimary};
    }
    h1 {
        font-size: 32px;
    }
    p {
        font-size: 15px;
    }
    .container {
        width: 100%;
        max-width: 1270px;
        margin: auto;
        padding: 0 15px;
    }
`;

export default GlobalStyle;
