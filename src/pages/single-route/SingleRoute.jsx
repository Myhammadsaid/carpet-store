import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useDetailProductQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import Product from "../../components/product/Product";
import SingleInfo from "../../components/singleInfo/SingleInfo";

const SingleRoute = () => {
  let { id } = useParams();
  let { data } = useDetailProductQuery(id);
  let { data: product } = useGetProductsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SingleInfo data={data} />
      <Product data={product} title={"Вам может понравиться"} />
    </>
  );
};

export default SingleRoute;
