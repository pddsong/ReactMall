import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import "./Wx.scss";
function Wx() {
  const { user } = useAuth();
  const navigator = useNavigate();
  const datas = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  return (
    <div className="biga">
      <div className="ft">
        <span>&lt;</span>
        <img src="/icons/wx.jpg" alt="" />
        <h3>微信付款</h3>
      </div>
      <div className="a1">
        <span>{user.name}的商品订单</span>
        <h2>¥{datas.totalPrice}</h2>

        <div className="a">打开微信APP支付</div>
        <div className="b" onClick={() => navigator("/qzf/2")}>
          继续游览器支付
        </div>
        <p>下载微信APP付款</p>
      </div>
    </div>
  );
}

export default Wx;
