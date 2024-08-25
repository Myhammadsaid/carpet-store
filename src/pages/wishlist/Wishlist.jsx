import React, { useEffect } from "react";
import Product from "../../components/product/Product";
import HeartEmpty from "../../components/heartEmpty/HeartEmpty";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{wishlist.length ? <Product data={wishlist} /> : <HeartEmpty />}</>;
};

export default Wishlist;
