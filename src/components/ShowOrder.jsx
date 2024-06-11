/* eslint-disable react/prop-types */
import { Card } from "@nutui/nutui-react";
import "./ShowOrder.scss";
import { useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext";

// eslint-disable-next-line react/prop-types
const ShowOrder = ({ data1 }) => {
  const [data, setDatas] = useState(data1);
  const { user } = useAuth();
  const state = {
    shopDescription: "自营",
    delivery: "厂商配送",
    shopName: "阳澄湖大闸蟹自营店>",
  };
  const products = JSON.parse(localStorage.getItem("products"));
  // eslint-disable-next-line react/prop-types
  const order = data
    ? data.products.map((cartItem) => {
        return {
          ...cartItem,
          product: products.find(
            (product) => product.id === cartItem.productId
          ),
        };
      })
    : [];

  function handleDelete() {
    const users = JSON.parse(localStorage.getItem("users")).filter(
      (data) => data.username === user.username
    )[0];
    users.order = users.order.filter((order) => order.id !== data.id);
    let originalData = JSON.parse(localStorage.getItem("users"));

    const x = originalData.map((data) => {
      if (data.username === user.username) return users;
      else {
        return data;
      }
    });

    localStorage.setItem("users", JSON.stringify(x));
    setDatas(null);
  }

  if (!order.length) {
    return;
  }

  return (
    <div className="box">
      <div className="tou">
        <span>{data.time}</span>
        <div>
          <span className="zt">{data.status ? "交易完成" : "待发货"}</span>
          <span>|</span>
          <span className="sc" onClick={handleDelete}>
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                d="M363.072 272.832H167.488c-21.76 0-39.488 11.84-39.488 32.256 0 20.352 17.664 31.744 39.488 31.744h48.512v418.24c0 77.568 51.328 140.928 120.896 140.928H691.2c69.376 0 120.64-63.04 120.64-140.928v-417.92h44.672c21.76 0 39.488-11.392 39.488-31.808 0-20.288-17.664-32.256-39.488-32.256H672.64C670.08 194.816 601.92 128 518.016 128s-152 66.816-154.88 144.832z m74.048 0C440 232.832 474.816 192 518.016 192s78.208 40.96 80.704 80.832H437.12z m-157.12 482.24v-417.92h467.84v418.304c0 42.24-32.128 76.544-56.768 76.544H336.768c-24.64-0.384-56.768-34.56-56.768-76.928z m109.824-16.832c18.048 0 32.96-16.896 32.96-38.08V483.2c0-21.12-14.72-38.016-32.96-38.016-18.048 0-32.896 16.832-32.896 38.016v216.96c0 21.12 14.464 38.08 32.896 38.08z m152.128-38.08V483.2c0-21.12-14.72-38.016-32.896-38.016-18.048 0-32.96 16.832-32.96 38.016v216.96c0 21.12 14.912 38.08 32.96 38.08 18.048 0 32.896-16.896 32.896-38.08z m92.48 38.08c18.048 0 32.896-16.896 32.896-38.08V483.2c0-21.12-14.72-38.016-32.896-38.016-18.048 0-32.96 16.832-32.96 38.016v216.96c0 21.12 14.4 38.08 32.96 38.08z"
                fill="#888888"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      {order.length
        ? order.map((vlue) => (
            <div className="box2" key={vlue.id}>
              {" "}
              <Card
                src={`/imgs/products/${vlue.product?.image}`}
                title={vlue.product?.description1}
                price={vlue.product?.price}
                shopDescription={state.shopDescription}
                delivery={state.delivery}
                shopName={!vlue.product ? `该商品已下架` : `商家自营店`}
              />
              <span className="sl">{`x ${vlue.num}`}</span>
            </div>
          ))
        : null}

      <div className="jine">
        <div>
          <span>
            共{order?.length}件商品 实付款 ¥ {data.totalPrice}
          </span>
        </div>
        <button>评价商品</button>
      </div>
    </div>
  );
};
export default ShowOrder;
