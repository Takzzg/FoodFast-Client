import styled from "styled-components"

export const GlobalContainer = styled.section`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text.highContrast};
    background-color: ${({ theme }) => theme.colors.bgPage};
    min-height: 100vh;
`
export const TitleContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Concert One", cursive;
    font-size: 3.5rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.text.highContrast};
`
export const StoreName = styled.div`
    background-color: black;
    color: wheat;
    height: 1.5rem;
    width: 8rem;
    font-size: 0.8rem;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Bangers", cursive;
    font-size: 1rem;
`
export const MainContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const ReviewsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .productReviews {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
    }
`

export const SecondMainContainer = styled.div`
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 31.5rem;
`
export const ImageContainer = styled.section`
    display: flex;
    align-items: center;
    height: 31.5rem;
    width: 31.5rem;
    max-width: 32rem;
    img {
        border-radius: 30px;
        height: auto;
        width: 100%;
    }
`

export const DescriptionContainer = styled.section`
    background-color: ${({ theme }) =>
        theme.name === "light" ? theme.text.light : theme.colors.background};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`

export const ListItem = styled.div`
    width: 90%;
    margin: 1rem;
`
export const Etiqueta = styled.div`
    font-family: "Righteous", cursive;
    font-weight: lighter;
`
export const Data = styled.div`
    font-family: "Acme", sans-serif;
`
export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 30rem;
    margin-top: 1.5rem;
    div {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        margin: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        background-color: ${({ theme }) =>
            theme.name === "light" ? theme.text.light : theme.colors.main};
        svg {
            height: 100%;
            width: auto;
            color: ${({ theme }) =>
                theme.name === "light" ? theme.colors.main : theme.text.light};
        }
        &:hover {
            background-color: ${({ theme }) =>
                theme.name === "light" ? theme.colors.main : theme.text.light};
            svg {
                color: ${({ theme }) =>
                    theme.name === "light"
                        ? theme.text.light
                        : theme.colors.main};
            }
        }
    }
`
export const CarShop = styled.div`
    background-color: white;
`
export const BuyButton = styled.div`
    background-color: white;
`
/* font-family: 'Fredoka One', cursive; */
/* font-family: 'Righteous', cursive; */
