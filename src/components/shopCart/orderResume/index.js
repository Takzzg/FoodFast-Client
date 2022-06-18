import React from "react";
import {
  MainContainer,
TitleContainer,
ItemsContainer,
SubTotalContainer,
AditionalContainer,
TotalContainer,
GoPayContainer
} from "./elements";

export default function OrdenSumary({items, subTotal}) {

  return (
    <MainContainer>
        <TitleContainer>Order Sumary</TitleContainer>
        <ItemsContainer>
            <div className="label">Items: </div>
            <div className="number">{items}</div>
        </ItemsContainer>

        <SubTotalContainer>
            <div className="label">Subtotal: </div>
            <div className="number">$/ {subTotal}</div>
        </SubTotalContainer>

        <AditionalContainer>
            <div className="label">Shipping: </div>
            <div className="number">$/ 12</div>
        </AditionalContainer>

        <TotalContainer>
            <div className="label">Total: </div>
            <div className="number">$/ {subTotal}</div>
        </TotalContainer>

        <GoPayContainer>
            <button>Go pay</button>
        </GoPayContainer>
    </MainContainer>
  );
}
