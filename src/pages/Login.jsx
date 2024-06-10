import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useAuth } from "../contexts/FakeAuthContext";
import { useState } from "react";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  function handleSumbit(e) {
    e.preventDefault();
    if (!username || !password) return;

    if (login(username, password)) navigate("/");
  }
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
          <a className="link">马上注册</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
