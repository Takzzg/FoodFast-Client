import React, { useEffect } from "react"
import {
    DescriptionContainer,
    GlobalContainer,
    ImageContainer,
    MainContainer,
    TitleContainer,
    ListItem,
    Etiqueta,
    Data,
    CarShop,
    BuyButton,
    ButtonsContainer,
    SecondMainContainer
} from "./detailElements"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineCreditCard } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { baseUrl, findProductById } from "../../../redux/actions/async"
import { clean_select_product } from "../../../redux/actions/sync"

const DetailProduct = () => {
    const { idProduct } = useParams()

    const dispatch = useDispatch()
    const product = useSelector((state) => state.main.products.selected)

    useEffect(() => {
        idProduct && dispatch(findProductById(idProduct))
    }, [dispatch, idProduct])

    useEffect(() => {
        return () => dispatch(clean_select_product())
    }, [dispatch])

    if (!product || !product.name) return <h1>Loading...</h1>

    return (
        <GlobalContainer>
            <TitleContainer>{product.name}</TitleContainer>
            <MainContainer>
                <ImageContainer>
                    <img
                        src={`${baseUrl}/products/img/${idProduct}`}
                        alt="Foto del producto"
                    />
                </ImageContainer>

                <SecondMainContainer>
                    <DescriptionContainer>
                        <ListItem>
                            <Etiqueta>DESCRIPTION:</Etiqueta>
                            <Data>{product.description}</Data>
                        </ListItem>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center"
                            }}
                        >
                            <ListItem>
                                <Etiqueta>Stock</Etiqueta>
                                <Data>{product.stock}</Data>
                            </ListItem>

                            <ListItem>
                                <Etiqueta>Price</Etiqueta>
                                <Data>{`$/ ${product.price}`}</Data>
                            </ListItem>
                        </div>
                        <ListItem>
                            <Etiqueta>Categories:</Etiqueta>
                            <Data>{product.categories.join(", ")}</Data>
                        </ListItem>
                    </DescriptionContainer>

                    <ButtonsContainer>
                        <CarShop>
                            <AiOutlineShoppingCart />
                        </CarShop>
                        <BuyButton>
                            <AiOutlineCreditCard />
                        </BuyButton>
                    </ButtonsContainer>
                </SecondMainContainer>
            </MainContainer>
        </GlobalContainer>
    )
}

export default DetailProduct
