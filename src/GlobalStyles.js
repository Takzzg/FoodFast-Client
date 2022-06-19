import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        scrollbar-color: ${({ theme }) => theme.colors.main} ${({ theme }) =>
    theme.colors.background};
    }

    .App {
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        background-color: ${({ theme }) => theme.colors.background};

        & > div {
            overflow: auto;
            min-height: 100%;
        }
    }
`

export default GlobalStyle
