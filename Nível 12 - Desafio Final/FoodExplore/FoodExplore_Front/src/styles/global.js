import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: ${px2vw(24)};
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.Dark_400};

        -webkit-font-smoothing: antialiased;
    }

    body, textarea, p, input {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: ${px2vw(16)};
        outline: none;
    }

    button, h1, span, a, strong {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: ${px2vw(16)};
        outline: none;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        filter: brightness(0.5);
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
`;