import styled from "styled-components"

export const GlobalContainer = styled.section`
    z-index: 2;
`
export const OpenButton = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 2rem;
    height: 2rem;
    width: 2rem;

    svg {
        height: 100%;
        width: 100%;
        width: auto;
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
        }
    }
`

export const CloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    height: 2rem;
    width: 2rem;

    svg {
        height: 100%;
        width: 100%;
        width: auto;
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
        }
    }
`

export const NavBarContainer = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.text.highContrast};
    border-right: 4px solid #00a726;

    position: absolute;
    height: 100vh;
    width: 100%;
    max-width: 20rem;
    top: 0px;

    transition: ${({ isShowing }) =>
        isShowing ? "left 0.75s ease-out" : "left 0.75s ease-in"};
    left: ${({ isShowing }) => (isShowing ? "0px" : "-100%")};
    overflow-y: auto;

    display: flex;
    flex-direction: column;
`
export const MainIconContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    z-index: 1;
    margin: 2rem;

    svg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        color: ${({ theme }) => theme.colors.main};
    }
`

export const Title = styled.h1`
    color: ${({ theme }) => theme.text.highContrast};
    font-size: 3rem;
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid black;
    margin-bottom: 1.5rem;
    a {
        text-decoration: none;
        color: black;
    }
`
export const LoginRegisterButton = styled.button`
    height: 70%;
    text-decoration: none;
    width: 40%;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid orange;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.main};
    &:hover {
        background-color: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.text.highContrast};
    }
`
export const ListRoutes = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        text-decoration: none;
        color: black;
        width: 100%;
    }
`

export const RouteItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid red;
    border-top: 1px solid red;
    list-style: none;
    height: 3em;
    &:hover {
        cursor: pointer;
        outline: 3px solid red;
        outline: 3px solid red;
    }
`
