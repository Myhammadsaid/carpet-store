import React, { useEffect } from "react";
import ProductCart from "../../components/productCart/ProductCart";
import CartEmpty from "../../components/cartEmpty/CartEmpty";
import { useGetProductsQuery } from "../../context/api/productApi";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";

const Cart = () => {
  const { data } = useGetProductsQuery();
  const cart = useSelector((state) => state?.cart?.value?.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {cart ? (
        <>
          <ProductCart />
          <Product data={data} title={"Рекомендуем"} />
        </>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default Cart;
