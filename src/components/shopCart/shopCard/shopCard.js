import React, { useEffect, useState } from "react";
import { FifthColumn, FirstColumn, FourthColumn, MainContainer, SecondColumn, ThirdColumn } from "./cardElements";
import { baseUrl } from "../../../redux/actions/async";
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"; 

export default function ShopProductCard({product, setItems, setMount}) {
    const [quantity, setQuantity] = useState(1); 
    const [total, setTotal] = useState(product.price); 

    const Increment = () => {
        setQuantity(Number(quantity) + 1)
        setTotal(quantity*product.price)
    }

    const Decrement = () => {
        setQuantity(Number(quantity) - 1)
        setTotal(quantity*product.price)
    }


    return(
    <MainContainer>
        <FirstColumn>
            <img src={`${baseUrl}/products/img/${product._id}`} alt="product"/>
        </FirstColumn>
        
        <SecondColumn>
            {product.name}
        </SecondColumn>
        
        <ThirdColumn>
            <AiFillMinusCircle onClick={Decrement}/>
            {quantity}
            <AiFillPlusCircle onClick={Increment}/>
        </ThirdColumn>

        <FourthColumn>
            $/ {product.price}
        </FourthColumn>

        <FifthColumn>
           $/ {total}
        </FifthColumn>
    </MainContainer>)
}