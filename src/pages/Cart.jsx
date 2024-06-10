import "./Cart.scss";
import Card from "../components/Card";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect, useState } from "react";

function Cart() {
  const navigator = useNavigate();

  const { isAuthenticated, user } = useAuth();
  const [isAllChecked, setIsAllChecked] = useState("one");
  const [totalPrice, setTotalPrice] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [datas, setDatas] = useState(
    isAuthenticated &&
      JSON.parse(localStorage.getItem("users")).filter(
        (data) => data.username === user.username
      ).length
      ? JSON.parse(localStorage.getItem("users")).filter(
          (data) => data.username === user.username
        )[0].cart
      : []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAllCheckedChange = () => {
    setTotalPrice(0);

    setIsAllChecked((prev) => {
      if (prev === "one") {
        return true;
      } else return !prev;
    });
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
    let zhangh = originalData.filter((data) => data.username === user.username);
    zhangh[0] = { ...zhangh[0], totalPrice: totalPrice };

    const x = originalData.map((data) => {
      if (data.username === user.username) return zhangh[0];
      else {
        return data;
      }
    });

    localStorage.setItem("users", JSON.stringify(x));
    navigator("/order");
  }

  function inFo(id, key, value) {
    let originalData = JSON.parse(localStorage.getItem("users"));
    const zhangh = originalData.filter(
      (data) => data.username === user.username
    );
    let updatedData = {
      ...zhangh[0], // 复制原始数据的其他属性
      cart: zhangh[0].cart.map((item) => {
        if (item.id === id) {
          return { ...item, [key]: value };
        }
        return item;
      }),
    };
    const x = originalData.map((data) => {
      if (data.username === user.username) return updatedData;
      else {
        return data;
      }
    });

    localStorage.setItem("users", JSON.stringify(x));
  }

  function handleDele(productIdToDelete) {
    let users = JSON.parse(localStorage.getItem("users"));
    const zhangh = users.filter((data) => data.username === user.username);

    zhangh[0].cart = zhangh[0].cart.filter(
      (item) => item.id !== productIdToDelete
    );

    const x = users.map((data) => {
      if (data.username === user.username) return zhangh[0];
      else {
        return data;
      }
    });
    setDatas(zhangh[0].cart);

    // 更新localStorage中的数据
    localStorage.setItem("users", JSON.stringify(x));
  }

  return (
    <div className="cart">
      <h3>购物车</h3>
      {isAuthenticated && (
        <>
          {datas?.map((data) => (
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
                checked={isAllChecked === "one" ? false : isAllChecked}
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
