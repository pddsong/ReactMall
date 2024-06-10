import styles from "./Login.module.css";
import { useState } from "react";

import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function AdimLogin() {
  const [inputs, setInputs] = useState({
    username: "",

    password: "",
  });
  const navigator = useNavigate();
  const [err, setError] = useState("");

  const { adimLogin } = useAuth();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  function handleLogin(e) {
    e.preventDefault();
    const s = adimLogin(inputs.username, inputs.password);

    if (!s) {
      setError("账号或密码错误！");
      return;
    }
    navigator("/admin");
  }
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Hello Wlcome.</h1>
        </div>
        <div className={styles.right}>
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="管理员账号"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="密码"
              name="password"
              onChange={handleChange}
            />
            {err && <p style={{ color: "red" }}>账号或密码错误💥</p>}
            <button onClick={handleLogin}>登录</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdimLogin;
