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
    // StoreName,
    CarShop,
    BuyButton,
    ButtonsContainer,
    SecondMainContainer
} from "./detailElements"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineCreditCard } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchReviews, findProductById } from "../../../redux/actions/async"
import ReviewForm from "../../Reviews/ReviewForm/ReviewForm"
import ReviewCard from "../../Reviews/ReviewCard/ReviewCard"
// import { clean_select_product } from "../../../redux/actions/sync"

const DetailProduct = () => {
    const { idProduct } = useParams()

    const dispatch = useDispatch()
    const product = useSelector((state) => state.main.products.detail)
    const reviews = useSelector((state) => state.main.reviews.all)

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
        <GlobalContainer>
            <TitleContainer>{product.name}</TitleContainer>
            <MainContainer>
                <ImageContainer>
                    <img src={product.img} alt="..." />
                </ImageContainer>

                <SecondMainContainer>
                    {/* <div style={{ display: "flex", width: "100%" }}>
                        <StoreName>{storeName}</StoreName>
                    </div> */}

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

                        {/* <ListItem>
                            <Etiqueta>Category:</Etiqueta>
                            <Data>{product.category}</Data>
                        </ListItem> */}

                        <ListItem>
                            <Etiqueta>Categories:</Etiqueta>
                            <Data>
                                {product.categories.map((el, i) => (
                                    <span key={i}>{`  ${el}- `}</span>
                                ))}
                            </Data>
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

            <MainContainer>
                <h1>Reviews</h1>
                <ReviewForm />

                {!!reviews.length && (
                    <div className="productReviews">
                        {reviews.map((r) => (
                            <ReviewCard key={r._id} review={r} />
                        ))}
                    </div>
                )}
            </MainContainer>
        </GlobalContainer>
    )
}

export default DetailProduct
