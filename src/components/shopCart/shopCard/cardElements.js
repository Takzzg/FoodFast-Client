import styled from "styled-components"; 

export const MainContainer = styled.section`
    display: flex;
    width: 80%;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const FirstColumn = styled.div`
    flex-grow: 1.5;
    img {
        height: 5rem;
        width: auto;
    }
`

export const SecondColumn = styled.div`
    flex-grow: 2;
    font-family: 'Acme', sans-serif;
`

export const ThirdColumn = styled.div`
    flex-grow: 1;
    font-size: 1.2rem;
    svg {
        height: 1.2rem;
        width: auto;
        cursor: pointer;
        &:hover{
            color: white;
        }
    }
`

export const FourthColumn = styled.div`
    flex-grow: 1;
    font-family: 'Domine', serif;
`

export const FifthColumn = styled.div`
    flex-grow: 1;
    font-family: 'Domine', serif;

`

