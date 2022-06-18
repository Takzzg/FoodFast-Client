import React from "react"
import {
    CardContainer,
    TitleDiv,
    ImageContainer,
    FooterContainer,
    ButtonsContainer,
    PriceContainer
} from "./displayElements"
import { MdReadMore } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { baseUrl } from "../../redux/actions/async"
import { useDispatch } from "react-redux"
import { add_item_car } from "../../redux/actions/sync"

export default function SingleProductCard({ product}) {
    
    const dispatch = useDispatch(); 

    const addItem = (e) => {
        e.preventDefault(); 
        const item = {...product, img: {}}
        dispatch(add_item_car(item))
    }
    
    return (
        <CardContainer>
            <TitleDiv>{product.name}</TitleDiv>

            <ImageContainer>
                <Link to={`/products/${product._id}`}>
                    <img src={`${baseUrl}/products/img/${product._id}`} alt="imagen" />
                </Link>
            </ImageContainer>

            <FooterContainer>
                <PriceContainer>${product.price}</PriceContainer>
                <ButtonsContainer>
                        <AiOutlineShoppingCart id="car" onClick={addItem}/>

                    <Link to={`/products/${product._id}`} id="details">
                        <MdReadMore />
                    </Link>
                </ButtonsContainer>
            </FooterContainer>
        </CardContainer>
    )
}
