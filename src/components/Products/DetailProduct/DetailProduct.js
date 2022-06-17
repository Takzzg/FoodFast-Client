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
    SecondMainContainer,
    ReviewsContainer
} from "./detailElements"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineCreditCard } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    baseUrl,
    fetchReviews,
    findProductById
} from "../../../redux/actions/async"
import ReviewForm from "../../Reviews/ReviewForm/ReviewForm"
import ReviewCard from "../../Reviews/ReviewCard/ReviewCard"
// import { clean_select_product } from "../../../redux/actions/sync"

const DetailProduct = () => {
    const { idProduct } = useParams()

    const dispatch = useDispatch()
    const product = useSelector((state) => state.main.products.detail)
    const reviews = useSelector((state) => state.main.reviews.all)
    const theme = useSelector((state) => state.theme.selectedTheme)

    useEffect(() => {
        if (!idProduct) return
        dispatch(findProductById(idProduct))
        dispatch(fetchReviews("product", idProduct))
    }, [dispatch, idProduct])

    // useEffect(() => {
    //     return () => dispatch(clean_select_product())
    // }, [dispatch])

    if (!idProduct || !product || idProduct !== product._id)
        return <h1>Loading...</h1>

    return (
        <GlobalContainer theme={theme}>
            <TitleContainer theme={theme}>{product.name}</TitleContainer>
            <MainContainer>
                <ImageContainer>
                    <img
                        src={`${baseUrl}/products/img/${idProduct}`}
                        alt="Foto del producto"
                    />
                </ImageContainer>

                <SecondMainContainer>
                    <DescriptionContainer theme={theme}>
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

                    <ButtonsContainer theme={theme}>
                        <CarShop>
                            <AiOutlineShoppingCart />
                        </CarShop>
                        <BuyButton>
                            <AiOutlineCreditCard />
                        </BuyButton>
                    </ButtonsContainer>
                </SecondMainContainer>
            </MainContainer>

            <ReviewsContainer>
                <h1>Reviews</h1>
                <ReviewForm />

                {!!reviews.length && (
                    <div className="productReviews">
                        {reviews.map((r) => (
                            <ReviewCard key={r._id} review={r} />
                        ))}
                    </div>
                )}
            </ReviewsContainer>
        </GlobalContainer>
    )
}

export default DetailProduct
