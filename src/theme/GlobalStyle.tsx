import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-weight: 500;
        background-color: #243350;
    }

    li {
        font-weight: 300;
        font-size: 18px;
        line-height: 160%;
        margin-left: 17px;
    }
    
    ul {
        padding: 0;
    }

    p, span {
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
 
        @media (max-width: 991.98px) {
            font-size: 16px;
        }
    }

    h4 {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
    }

`