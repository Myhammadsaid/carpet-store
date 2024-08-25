import React from "react";
import Img from "../../assets/cart.jpg";
import "./CartEmpty.scss";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="cart__notfound">
          <img src={Img} alt="CartNotFound" />
          <h1 className="cart__notfound__text">
            There is nothing in the cart (
          </h1>
          <button onClick={() => navigate("/")} className="cart__notfound__btn">
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
