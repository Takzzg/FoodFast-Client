import styled from "styled-components"

export const MainContainer = styled.section`
    border-radius: 10px;
    height: 10rem;
    width: 20rem;
    background-color: ${({ backcolor }) => backcolor};

    padding: 0.5rem;
    gap: 0.5rem;

    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
    justify-content: center;
`

export const ImageCategory = styled.div`
    background-image: url(${({ image }) => image});
    height: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`

export const NameCategory = styled.div`
    font-size: 30px;
    color: white;
`
