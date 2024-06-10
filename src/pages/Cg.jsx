import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
function Cg() {
  const navigator = useNavigate();
  const { user } = useAuth();
  const datas = JSON.parse(localStorage.getItem("users")).filter(
    (data) => data.username === user.username
  ).length
    ? JSON.parse(localStorage.getItem("users")).filter(
        (data) => data.username === user.username
      )[0]
    : [];

  return (
    <div>
      <Result
        status="success"
        title="支付成功"
        subTitle={`Order number: ${datas.order[0].id}  Cloud server configuration takes 1-5 minutes, please wait.`}
        style={{ backgroundColor: "#fff" }}
        extra={[
          <Button type="primary" key="console" onClick={() => navigator("/")}>
            返回首页
          </Button>,
          <Button key="buy" onClick={() => navigator("/cart")}>
            购物车
          </Button>,
        ]}
      />
    </div>
  );
}

export default Cg;
