import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/slices/cartSlice";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import "./Product.scss";
import Skeleton from "../skeleton/Skeleton";

const Product = ({ data, title, isLoading }) => {
  const wishlist = useSelector((state) => state?.wishlist?.value);
  const cart = useSelector((state) => state?.cart?.value);
  const dispatch = useDispatch();

  let products = data?.map((el) => (
    <div key={el.id} className="product__card">
      <img src={el.img} alt="ProductImg" />
      <button
        className="product__card__svg1"
        onClick={() => dispatch(toggleHeart(el))}
      >
        {wishlist?.some((item) => item.id === el.id) ? (
          <FaRegHeart style={{ color: "red", fill: "red" }} />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <button
        onClick={() => dispatch(addToCart(el))}
        className="product__card__svg2"
      >
        {cart?.some((item) => item.id === el.id) ? (
          <BsCart style={{ color: "green", fill: "green" }} />
        ) : (
          <BsCart />
        )}
      </button>
      <Link to={`/products/${el.id}`}>
        <h2 className="product__card__text">{el.title}</h2>
      </Link>
    </div>
  ));

  return (
    <>
      <section className="product">
        <div className="container">
          <h1 className="product__title">{title}</h1>
          <div className="product__cards">
            {isLoading ? <Skeleton /> : products}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
