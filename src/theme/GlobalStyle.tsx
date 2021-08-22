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

    h1 {
        font-weight: 600;
        font-size: 72px;
        line-height: 86px;
    }

    h2 {
        font-weight: 600;
        font-size: 46px;
        line-height: 60px;
    }

    h3 {
        font-weight: 600;
        font-size: 28px;
        line-height: 36px;
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
    h5 {
        font-weight: 300;
        font-size: 24px;
        line-height: 1.4;
    }

`