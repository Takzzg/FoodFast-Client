import styled from "styled-components";

export const GlobalContainer = styled.section`
    width: 100%;
    height: 100%;
`

export const TitleMainContainer = styled.section`
    font-size: 3rem;
    background-color: red;
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const TablesContainer = styled.section`
    background-color: yellow;
    height: 90%;
    display: flex;
`

export const ShopContainer = styled.div`
    width: 70%;
    background-color: green;
`

export const Header = styled.div`
    display: flex;
    width: 80%;
    background-color: yellow;
    div {
        text-align: center;
    }
    #product{
        flex-grow: 8;
    }
    #quantity{
        flex-grow: 1;
    }
    #price{
        flex-grow: 1;
    }
    #total{
        flex-grow: 1;
    }
`
export const Footer = styled.div``

export const OrderContainer = styled.div`
    width: 30%;
    background-color: aliceblue;
`