import "./Cart.scss";
import Card from "../components/Card";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect, useState } from "react";

function Cart() {
  const navigator = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [datas, setDatas] = useState(
    JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users")).cart
      : []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAllCheckedChange = () => {
    setTotalPrice(0);

    setIsAllChecked((prev) => !prev);
  };

  const handleCardCheckChange = (price, isChecked) => {
    if (isChecked) {
      setTotalPrice((value) => value + price);
    }
  };

  function handleJieS() {
    if (!totalPrice) {
      return;
    }
    let originalData = JSON.parse(localStorage.getItem("users"));
    originalData = { ...originalData, totalPrice: totalPrice };
    localStorage.setItem("users", JSON.stringify(originalData));
    navigator("/order");
  }

  function inFo(id, key, value) {
    let originalData = JSON.parse(localStorage.getItem("users"));
    let updatedData = {
      ...originalData, // 复制原始数据的其他属性
      cart: originalData.cart.map((item) => {
        if (item.id === id) {
          return { ...item, [key]: value };
        }
        return item;
      }),
    };
    localStorage.setItem("users", JSON.stringify(updatedData));
  }

  function handleDele(productIdToDelete) {
    let users = JSON.parse(localStorage.getItem("users"));

    users.cart = users.cart.filter((item) => item.id !== productIdToDelete);

    setDatas(users.cart);

    // 更新localStorage中的数据
    localStorage.setItem("users", JSON.stringify(users));
  }

  return (
    <div className="cart">
      <h3>购物车</h3>
      {isAuthenticated && (
        <>
          {datas.map((data) => (
            <div className="yq" key={data.id}>
              <span className="ss" onClick={() => handleDele(data.id)}>
                删除
              </span>
              <Card
                inFo={inFo}
                setTotalPrice={setTotalPrice}
                data={data}
                isAllChecked={isAllChecked}
                onCheckChange={handleCardCheckChange}
              />
            </div>
          ))}

          <div className="con">
            <div className="jies">
              <Checkbox
                checked={isAllChecked}
                onChange={handleAllCheckedChange}
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
              <div>
                <span>￥{totalPrice}元</span>

                <button onClick={handleJieS}>去结算</button>
              </div>
            </div>
          </div>
        </>
      )}

      {!isAuthenticated && (
        <div className="k">
          <span>空空如也！</span>
          <span className="a" onClick={() => navigator("/login")}>
            快去登录吧！
          </span>
        </div>
      )}
    </div>
  );
}

export default Cart;
