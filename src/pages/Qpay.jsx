import { useLocation, useNavigate } from "react-router-dom";
import "./Qpay.scss";
import { useAuth } from "../contexts/FakeAuthContext";

const generateUniqueId = () => {
  return new Date().getTime();
};

function getCurrentTimeString() {
  const now = new Date();
  const yearStr = now.getFullYear();
  const monthStr = String(now.getMonth() + 1).padStart(2, "0"); //
  const dayStr = String(now.getDate()).padStart(2, "0");
  const hoursStr = String(now.getHours()).padStart(2, "0");
  const minutesStr = String(now.getMinutes()).padStart(2, "0");
  const secondsStr = String(now.getSeconds()).padStart(2, "0");

  return `${yearStr}-${monthStr}-${dayStr} ${hoursStr}:${minutesStr}:${secondsStr}`;
}
function Qpay() {
  const pa = useLocation();
  const { user } = useAuth();
  const navigator = useNavigate();

  const datas = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const checkedItems = datas.cart.filter((item) => item.isCheck === true);

  const updatedItems = checkedItems.map((item) => {
    // eslint-disable-next-line no-unused-vars
    const { isCheck, ...rest } = item;
    return rest;
  });

  const handleOptionPay = () => {
    let newDatas = {
      ...datas,
      cart: datas.cart.filter((item) => !item.isCheck),
    };
    const oder = {
      id: generateUniqueId(),
      products: updatedItems,
      status: false,
      time: getCurrentTimeString(),
      totalPrice: datas.totalPrice,
      fs: s ? "支付宝" : "微信",
    };

    newDatas.order.unshift(oder);

    localStorage.setItem("users", JSON.stringify(newDatas));
    navigator("/cg");
  };
  const s = pa.pathname === "/qzf/1";
  return (
    <div className="ad">
      <div className="fr">
        <img src={s ? "/icons/zfb.jpg" : "/icons/wx.jpg"} alt="" />
        <span>{s ? "支付宝" : "微信"}支付</span>
      </div>
      <span>{user.name}的商品订单</span>
      <h2>¥{datas.totalPrice}</h2>
      <div className="tt">
        <p className="bb">
          <span>{s ? "支付宝" : "微信"}账号</span>
          <span>tagag****@faff.com</span>
        </p>
        <p className="bb">
          <span>{s ? "支付宝" : "微信"}账号</span>
          <span>tagag****@faff.com</span>
        </p>
        <div className="gg" onClick={handleOptionPay}>
          确认支付
        </div>
      </div>
    </div>
  );
}

export default Qpay;
