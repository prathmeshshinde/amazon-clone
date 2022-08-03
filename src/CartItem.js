import React from "react";
import styled from "styled-components";
import { db } from "./firebase_config";

function CartItem({ id, item }) {
  const deleteItem = (e) => {
    e.preventDefault();
    db.collection("cartItems").doc(id).delete();
  };

  let options = [];

  for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
    options.push(<option value={i}>Qty:{i}</option>);
  }

  const changeQuantity = (newQuantity) => {
    db.collection("cartItems")
      .doc(id)
      .update({
        quantity: parseInt(newQuantity),
      });
  };

  return (
    <Container>
      <ImageContainer>
        <img alt="cartImage" src={item.image} />
      </ImageContainer>
      <CartItemInfo>
        <CartItemTop>
          <h2>{item.name}</h2>
        </CartItemTop>
        <CartItemBottom>
          <CartItemQuantityContainer>
            <select
              onChange={(e) => changeQuantity(e.target.value)}
              value={item.quantity}
            >
              {options}
            </select>
          </CartItemQuantityContainer>
          <CartItemDeleteContainer onClick={deleteItem}>
            Delete
          </CartItemDeleteContainer>
        </CartItemBottom>
      </CartItemInfo>
      <CartItemPrice>${item.price}</CartItemPrice>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  border-bottom: 0.01px solid #000;
`;

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 426px) {
    width: 100px;
    img {
      width: 100px;
      height: 100px;
    }
  }
  @media screen and (max-width: 376px) {
    width: 90px;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;

const CartItemTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;

const CartItemBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;

const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shawdow: 0 2px 5px rgba(15, 17, 17, 0.15);
    :focus {
      outline: none;
    }
  }
`;

const CartItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;

const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;
