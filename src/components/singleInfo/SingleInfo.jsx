import React, { useState } from "react";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import "./SingleInfo.scss";

const SingleInfo = ({ data }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="singleInfo">
        <div className="container">
          <h1 className="singleInfo__title">{data?.title}</h1>
          <div className="singleInfo__style">
            <div className="single__imgs">
              <img src={data?.img} alt={data?.title} />
              <img src={data?.img} alt={data?.title} />
              <img src={data?.img} alt={data?.title} />
            </div>
            <img src={data?.img} alt={data?.title} />
            <div className="single__content">
              <div className="single__content__wrapper">
                <div className="single__content__wrapper__box">
                  <p>Цена:</p>
                  <h1>{data?.price}</h1>
                </div>
                <div className="single__content__wrapper__box">
                  <p>В рассрочку</p>
                  <h1>{data?.price / 4}</h1>
                </div>
              </div>
              <div className="single__content__wrapper">
                <p className="single__content__wrapper__par">
                  Размер: {data?.size} см
                </p>
                <div className="single__content__wrapper__quantity">
                  <p>Количество:</p>
                  <div className="cart__btns">
                    <button
                      disabled={count === 1}
                      onClick={() => setCount((p) => p - 1)}
                      className="cart__btn"
                    >
                      -
                    </button>
                    <span className="cart__quantity">{count}</span>
                    <button
                      disabled={count === 5}
                      onClick={() => setCount((p) => p + 1)}
                      className="cart__btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="single__content__wrapper">
                <button className="single__content__wrapper__btn">
                  В корзину
                </button>
                <button className="single__content__wrapper__btn">
                  <FaRegHeart />
                </button>
              </div>
              <div className="single__content__return">
                <p>
                  <IoReturnUpForwardOutline />
                  Возврат в течение 14 дней
                </p>
                <p>
                  <MdOutlineDirectionsCarFilled />
                  Среднее время доставки 2.5 дня
                </p>
                <p>Подробнее</p>
              </div>
              <div className="single__content__footer">
                <p>
                  Нужна помощь с выбором? Просто напишите нам в WhatsApp и мы
                  обязательно вам поможем!
                </p>
                <button>
                  <ImWhatsapp /> Написать
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleInfo;
