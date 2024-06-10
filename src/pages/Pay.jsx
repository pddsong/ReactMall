import { useState } from "react";
import "./Pay.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function Pay() {
  const [selectedOption, setSelectedOption] = useState("");
  const { user } = useAuth();
  const datas = JSON.parse(localStorage.getItem("users")).filter(
    (data) => data.username === user.username
  ).length
    ? JSON.parse(localStorage.getItem("users")).filter(
        (data) => data.username === user.username
      )[0]
    : [];
  // const checkedItems = datas.cart.filter((item) => item.isCheck === true);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const updatedItems = checkedItems.map((item) => {
  //   // eslint-disable-next-line no-unused-vars
  //   const { isCheck, ...rest } = item;
  //   return rest;
  // });

  const handleOptionPay = () => {
    if (!selectedOption) return;
    if (selectedOption === "option1") {
      navigator("/pay/wx");
    } else {
      navigator("/pay/zfb");
    }
  };

  const navigator = useNavigate();

  return (
    <div className="zfym">
      <span className="fh" onClick={() => navigator(-1)}>
        &lt;
      </span>
      <div className="header">需要支付：{datas.totalPrice}元</div>
      <div className="payment-options">
        <div className="payment-option">
          <div className="payment-info">
            <img
              src="/icons/wx.jpg"
              alt="WeChat Pay"
              className="payment-icon"
            />
            <div>
              <div className="payment-title">
                <span className="payment-name">微信支付</span>
                <span className="recommend-badge">推荐</span>
              </div>
              <div className="payment-description">
                亿万用户的选择，更快更安全
              </div>
            </div>
          </div>
          <input
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            type="radio"
          />
        </div>
        <div className="payment-option">
          <div className="payment-info">
            <img src="/icons/zfb.jpg" alt="Alipay" className="payment-icon" />
            <div>
              <div className="payment-title">
                <span className="payment-name">支付宝支付</span>
              </div>
              <div className="payment-description">亿万用户的选择</div>
            </div>
          </div>
          <input
            value="option2"
            checked={selectedOption === "option2"}
            type="radio"
            onChange={handleOptionChange}
          />
        </div>
      </div>
      <button className="renew-button" onClick={handleOptionPay}>
        确定支付
      </button>
    </div>
  );
}

export default Pay;
