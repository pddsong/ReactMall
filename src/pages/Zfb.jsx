import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import "./Wx.scss";
function Zfb() {
  const { user } = useAuth();
  const navigator = useNavigate();
  const datas = JSON.parse(localStorage.getItem("users")).filter(
    (data) => data.username === user.username
  ).length
    ? JSON.parse(localStorage.getItem("users")).filter(
        (data) => data.username === user.username
      )[0]
    : [];
  return (
    <div className="biga">
      <div className="ft">
        <span onClick={() => navigator(-1)}>&lt;</span>
        <img src="/icons/zfb.jpg" alt="" />
        <h3>支付宝付款</h3>
      </div>
      <div className="a1">
        <span>{user.name}的商品订单</span>
        <h2>¥{datas.totalPrice}</h2>

        <div className="a">打开支付宝APP支付</div>
        <div className="b" onClick={() => navigator("/qzf/1")}>
          继续游览器支付
        </div>
        <p>下载支付宝APP付款</p>
      </div>
    </div>
  );
}

export default Zfb;
