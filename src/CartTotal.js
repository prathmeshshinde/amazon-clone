import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { db } from "./firebase_config";

function CartTotal({ getTotalPrice, getCount }) {
  const checkout = () => {
    getCount() === 0
      ? alert("Nothing in the cart")
      : alert("Your Order has been placed");
  };

  const deleteItem = () => {
    db.collection("cartItems")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
  };

  const handleCheckoutDelete = () => {
    deleteItem();
    checkout();
  };

  return (
    <Container>
      <Subtotal>
        Subtotal ( {getCount()} items):{" "}
        <NumberFormat
          value={getTotalPrice()}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Subtotal>
      <CheckOutButton onClick={handleCheckoutDelete}>
        Proceed to checkout
      </CheckOutButton>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  background-color: white;
  flex: 0.3;
  padding: 20px;
`;

const Subtotal = styled.h2`
  margin-bottom: 16px;
`;

const CheckOutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;
  border: 2px soild #a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background: #ddb347;
  }
`;
