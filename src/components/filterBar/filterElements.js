import styled from "styled-components"

export const GlobalContainer = styled.section`
    color: ${({ theme }) => theme.text.highContrast};
    background-color: ${({ theme }) => theme.colors.bgPage};
    font-size: 1.5rem;

    height: 6rem; /* altura hardcodeada para que el boton del menu desplegable quede centrado */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const FilterContainer = styled.section`
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 1rem;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.colors.background};

        &:hover {
            background-color: ${({ theme }) => theme.colors.main};
        }
    }
`
//===================== Modal elements Styles =====================

export const IconClose = styled.div`
    height: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
        height: 100%;
        width: auto;
    }
`

export const ListContainer = styled.div`
    margin-bottom: 2rem;
`

export const MyH4 = styled.h4`
    color: black;
    font-family: "Roboto Mono", monospace;
`
export const ButtonContainer = styled.div`
    height: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`
export const FilterButton = styled.button`
    background-color: #00ff00;
    color: white;
    height: 50%;
    width: 30%;
    border: 0px;
    font-size: 1.5rem;
    border-radius: 1rem;
`

//========================================================

export const UserContainer = styled.section`
    /* width: 30%; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;

    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        /* height: 100%;
        width: 50%; */
        svg {
            cursor: pointer;
            /* height: 60%;
            width: auto; */
            &:hover {
                color: green;
            }
        }
    }
`
