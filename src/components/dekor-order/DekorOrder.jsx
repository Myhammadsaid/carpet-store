import React, { useState } from "react";
import { RiPercentLine } from "react-icons/ri";
import "./DekorOrder.scss";
import { useSelector } from "react-redux";

const bot_token = "5999169255:AAH54VNMOYp-myaWZcewvHtbt78LAZUv6Ms";
const chat_id = "-4208163629";

let initialState = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  comment: "",
};

const DekorOrder = () => {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state.cart.value);
  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    let title = "Buyurtma%0A";

    title += `Ism: ${data?.fname} %0A`;
    title += `Familya: ${data?.lname} %0A`;
    title += `Phone: ${data?.phone} %0A`;
    title += `Email: ${data?.email} %0A`;
    title += `Comment: ${data?.comment} %0A%0A`;

    cart?.forEach((product) => {
      title += `Nomi: ${product.title} %0A`;
      title += `Miqdori: ${product.quantity} %0A`;
      title += `Narxi: ${product.price} %0A%0A`;
    });

    let url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${title}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setData(initialState);
  };

  const cartItems = cart?.map((el) => (
    <tr key={el.id}>
      <td>{el.title}</td>
      <td>{el.quantity}</td>
      <td>{el.price} сум</td>
    </tr>
  ));

  let total = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <section className="dekor">
        <div className="container">
          <div className="dekor__style">
            <div className="dekor__style__content">
              <h1 className="dekor__title">Оформление заказа</h1>
              <div className="dekor__box">
                <form onSubmit={handleSubmit} className="dekor__box__form">
                  <input
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, fname: e.target.value }))
                    }
                    value={data?.fname}
                    required
                    type="text"
                    placeholder="Ваше имя"
                  />
                  <input
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, lname: e.target.value }))
                    }
                    value={data?.lname}
                    required
                    type="text"
                    placeholder="Ваша фамилия"
                  />
                  <input
                    required
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    value={data?.phone}
                    type="number"
                    placeholder="+7 (___) ___ - ___ - ___"
                  />
                  <input required type="email" placeholder="Ваш email" />
                  <textarea
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, comment: e.target.value }))
                    }
                    value={data?.comment}
                    required
                    placeholder="Комментарий к заказу"
                  ></textarea>
                  <button type="submit" className="dekor__btn">
                    Оплатить онлайн
                  </button>
                </form>
              </div>
            </div>
            <div className="dekor__style__content">
              <div className="dekor__style__wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Название товара</th>
                      <th>Кол-во</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>{cartItems}</tbody>
                </table>
                <div className="dekor__style__content__box">
                  <span>
                    <p>Сумма заказа</p>
                    <p>{total} сум</p>
                  </span>
                  <span>
                    <p>Доставка</p>
                    <p>Бесплатно</p>
                  </span>
                  <span>
                    <p>Итого к оплате:</p>
                    <p>{total} сум</p>
                  </span>
                </div>
              </div>
              <div className="promokod">
                <div className="dekor__promokod">
                  <p>
                    <RiPercentLine />
                    Промокод или сертификат
                  </p>
                  <button onClick={() => setToggle(!toggle)}>
                    {toggle ? "-" : "+"}
                  </button>
                </div>
                {toggle ? (
                  <form className="dekor__promokod__content">
                    <input required type="text" placeholder="Введите код" />
                    <button>Применить промокод</button>
                  </form>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DekorOrder;
