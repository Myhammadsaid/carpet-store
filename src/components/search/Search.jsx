import React from "react";
import { Link } from "react-router-dom";
import "./Search.scss";

const Search = ({ filterData, searchValue, width }) => {
  let searchItem = filterData?.slice(0, 5)?.map((el) => (
    <div key={el.id} className="search__content">
      <img src={el.img} alt={el.title} />
      <Link to={`/products/${el.id}`}>{el.title}</Link>
    </div>
  ));

  return (
    <>
      {searchValue.trim() ? (
        <div style={{ width: width }} className="search">
          {searchItem}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Search;
