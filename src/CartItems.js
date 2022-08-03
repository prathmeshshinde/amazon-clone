import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

function CartItems({ cartItems }) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  background-color: white;
  flex: 0.8;
  margin-right: 18px;
  padding: 20px;
  @media screen and (max-width: 426px) {
    width: 350px;
    margin-right: 0px;
    margin-top: 10px;
  }
  @media screen and (max-width: 395px) {
    width: 350px;
    margin-left: -18px;
    margin-top: 10px;
  }

  @media screen and (max-width: 376px) {
    width: 300px;
    margin: 10px 0px 0px 0px;
  }
`;

const Title = styled.h1`
  margin-bottom: 8px;
`;

const ItemsContainer = styled.div``;
