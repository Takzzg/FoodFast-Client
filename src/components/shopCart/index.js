import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  TitleMainContainer,
  GlobalContainer,
  TablesContainer,
  ShopContainer,
  OrderContainer,
  Header,
  Footer
} from "./displayElements";
import ShopProductCard from "./shopCard/shopCard";

export default function ShoppingCart() {
  const products = useSelector((state) => state.shopCart.shopCart);
  const [items, setItems] = useState(1); 
  const [mount, setMount] = useState(0); 
  return (
    <GlobalContainer>
      <TitleMainContainer>SHOPPING CART</TitleMainContainer>

      <TablesContainer>
        <ShopContainer>
          <Header>
            <div id="product">PRODUCT DETAILS</div>
            <div id="quantity">QUANTITY</div>
            <div id="price">PRICE</div>
            <div id="total">TOTAL</div>
          </Header>
          <ShopProductCard product={products[0]} setItems={setItems} setMount={setMount}/>
        </ShopContainer>

        <OrderContainer>
            {items} ---
            {mount}
        </OrderContainer>
      </TablesContainer>
    </GlobalContainer>
  );
}
