import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
function Cg() {
  const navigator = useNavigate();
  return (
    <div>
      <Result
        status="success"
        title="支付成功"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
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
