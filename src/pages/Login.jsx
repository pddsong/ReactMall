import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useAuth } from "../contexts/FakeAuthContext";
import { useState } from "react";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [iphone, setIphone] = useState("");

  const [address, setAddress] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [hasUser, setHasUser] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  function handleSumbit(e) {
    e.preventDefault();
    if (!username || !password) return;

    if (login(username, password)) navigate("/");
  }

  function handleZc(e) {
    e.preventDefault();
    if (!username || !password || !iphone || !address) return;

    const users = JSON.parse(localStorage.getItem("users")).find(
      (da) => da.username === username
    );
    if (users) {
      setHasUser(true);
    } else {
      const u = JSON.parse(localStorage.getItem("users"));
      const us = {
        name: username,
        username: username,
        password: Number(password),
        iPhone: iphone,
        address: address,
        cart: [],
        order: [],
        totalPrice: 0,
      };
      u.unshift(us);
      localStorage.setItem("users", JSON.stringify(u));
      setIsLogin(true);
      setAddress("");
      setIphone("");
      setUserName("");
      setPassword("");
    }
  }

  if (!isLogin)
    return (
      <div className="widget-container">
        <div className="widget-box">
          <div className="back-button" onClick={() => navigate(-1)}>
            &lt;
          </div>
          <div className="header">
            <div className="title">注册</div>
          </div>
          <h2 className="welcome-text">欢迎注册!</h2>
          <form onSubmit={handleZc}>
            <div className="input-group">
              <label className="label" htmlFor="username">
                用户名
              </label>
              <input
                className="input"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="password">
                密码
              </label>
              <input
                className="input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="iphone">
                手机号
              </label>
              <input
                className="input"
                type="iphone"
                id="iphone"
                value={iphone}
                onChange={(e) => setIphone(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="address">
                地址
              </label>
              <input
                className="input"
                type="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {hasUser && <p className="hasU">该用户已存在</p>}
            <button className="login-button">注册</button>
          </form>
          <div className="register">
            <span className="register-text">已有账号?</span>
            <a className="link" onClick={() => setIsLogin(true)}>
              登录
            </a>
          </div>
        </div>
      </div>
    );

  return (
    <div className="widget-container">
      <div className="widget-box">
        <div className="back-button" onClick={() => navigate(-1)}>
          &lt;
        </div>
        <div className="header">
          <div className="title">LOGIN</div>
        </div>
        <h2 className="welcome-text">欢迎回来!</h2>
        <form onSubmit={handleSumbit}>
          <div className="input-group">
            <label className="label" htmlFor="username">
              用户名
            </label>
            <input
              className="input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="password">
              密码
            </label>
            <input
              className="input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button">登录</button>

          <div className="forgot-password">
            <a className="link">忘记密码?</a>
          </div>
        </form>
        <div className="register">
          <span className="register-text">还没有账号?</span>
          <a className="link" onClick={() => setIsLogin(false)}>
            马上注册
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
