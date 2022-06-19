import React from "react"
import {
    CardContainer,
    TitleDiv,
    ImageContainer,
    FooterContainer
} from "./displayElements"
import { MdReadMore } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { baseUrl } from "../../redux/actions/async"
import { useSelector } from "react-redux"

export default function SingleProductCard({ id, name, price, stock }) {
    const theme = useSelector((state) => state.theme.selectedTheme)

    return (
        <CardContainer theme={theme}>
            <TitleDiv>{name}</TitleDiv>

            <ImageContainer
                to={`/products/${id}`}
                img={`${baseUrl}/products/img/${id}`}
            />

            <FooterContainer theme={theme}>
                ${price}
                <Link to={`/products/${id}`} className="iconBtn">
                    <AiOutlineShoppingCart id="car" />
                </Link>
                <Link to={`/products/${id}`} id="details" className="iconBtn">
                    <MdReadMore />
                </Link>
            </FooterContainer>
        </CardContainer>
    )
}
