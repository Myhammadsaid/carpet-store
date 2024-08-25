import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { useGetProductsQuery } from "../../context/api/productApi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import Model from "../model/Model";
import "./Header.scss";
import Search from "../search/Search";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

let data = [
  {
    id: 1,
    title: "Алматы",
  },
  {
    id: 2,
    title: "Жанаозен",
  },
  {
    id: 3,
    title: "Кызылорда",
  },
  {
    id: 4,
    title: "Тараз",
  },
  {
    id: 5,
    title: "Нур-Султан",
  },
  {
    id: 6,
    title: "Жаркент",
  },
  {
    id: 7,
    title: "Лисаковск",
  },
  {
    id: 8,
    title: "Текели",
  },
  {
    id: 9,
    title: "Аксай",
  },
  {
    id: 10,
    title: "Жезказган",
  },
  {
    id: 11,
    title: "Павлодар",
  },
  {
    id: 12,
    title: "Темиртау",
  },
  {
    id: 13,
    title: "Аксу",
  },
  {
    id: 14,
    title: "Жетысай",
  },
  {
    id: 15,
    title: "Петропавловск",
  },
  {
    id: 16,
    title: "Туркестан",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [fromTitle, setFromTitle] = useState("Алматы");
  const { data: products } = useGetProductsQuery();
  const [navbarToggle, setNavbarToggle] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState(products);

  useEffect(() => {
    setFilterData(
      products?.filter((product) =>
        product.title.toLowerCase().includes(searchValue.trim().toLowerCase())
      )
    );
  }, [searchValue]);

  let fromItems = data?.map((el) => (
    <li
      onClick={() => setFromTitle(localStorage.setItem("from", el.title))}
      key={el.id}
    >
      {el.title}
    </li>
  ));

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <NavLink to={"/"}>
              <img src={logo} alt="Logo" />
            </NavLink>
            <div onClick={() => setToggle(!toggle)} className="from">
              <IoLocationOutline />
              <p>{localStorage.getItem("from") || "Алматы"}</p>
            </div>
            <form className="header__form form__none">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="search"
                placeholder="Поиск по товарам"
              />
              <CiSearch />
              <Search
                width={"100%"}
                filterData={filterData}
                searchValue={searchValue}
              />
            </form>
            <div
              className={`nav__items ${navbarToggle ? "active" : ""}`}
              id="responsive__navbar"
            >
              <NavLink>
                <FaRegCircleUser className="icon" />
                <span className="nav__item__none">User</span>
              </NavLink>
              <NavLink onClick={() => setNavbarToggle(false)} to={"/wishlist"}>
                <FaRegHeart className="icon" />
                <span className="nav__item__none">Heart</span>
              </NavLink>
              <NavLink onClick={() => setNavbarToggle(false)} to={"/cart"}>
                <BsCart className="icon" />
                <span className="nav__item__none">Cart</span>
              </NavLink>
              <div
                onClick={() => setToggle(!toggle) && setNavbarToggle(false)}
                className="from display__none"
              >
                <IoLocationOutline />
                <p>{localStorage.getItem("from") || "Алматы"}</p>
              </div>
            </div>
            <button
              className="navbar__btn"
              onClick={() => setNavbarToggle(!navbarToggle)}
            >
              {navbarToggle ? <MdClose /> : <FiMenu />}
            </button>
          </nav>
          <form className="header__form form__none2">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="search"
              placeholder="Поиск по товарам"
            />
            <CiSearch />
            <Search
              width={"100%"}
              filterData={filterData}
              searchValue={searchValue}
            />
          </form>
        </div>
      </header>
      {navbarToggle ? (
        <div
          onClick={() => setNavbarToggle(false)}
          className="overflow__navbar"
        ></div>
      ) : (
        <></>
      )}
      {toggle ? (
        <Model setToggle={setToggle}>
          <div className="from">
            <h1 className="from__title">Выберите ваш город</h1>
            <form className="header__form">
              <input type="search" placeholder="Найти город" />
              <CiSearch />
            </form>
            <div className="from__items">{fromItems}</div>
          </div>
        </Model>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
