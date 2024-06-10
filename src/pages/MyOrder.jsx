import { useState } from "react";
import { Tabs } from "@nutui/nutui-react";
import "@nutui/nutui-react/dist/style.css"; // 引入 NutUI 样式
import "./MyOrder.scss";
import { useNavigate } from "react-router-dom";
import ShowOrder from "../components/ShowOrder";

function MyOrder() {
  const [tab1value, setTab1value] = useState("0");
  const allOrder = JSON.parse(localStorage.getItem("users")).order;
  const daiOrder = allOrder.filter((data) => !data.status);
  const wOrder = allOrder.filter((data) => {
    return data.status;
  });
  const navigator = useNavigate();
  const handleChange = (value) => {
    setTab1value(value);
  };

  return (
    <>
      <div className="fh">
        <span onClick={() => navigator(-1)}>&lt;</span>
      </div>
      <h3 className="title">我的订单</h3>
      <div className="dingd">
        <Tabs value={tab1value} onChange={handleChange} activeType="smile">
          <Tabs.TabPane title="全部" value="0">
            <div>
              {tab1value === "0" &&
                allOrder.map((data) => (
                  <ShowOrder key={data.id} data1={data} />
                ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane title="待发货" value="1">
            <div>
              {daiOrder.map((data) => (
                <ShowOrder key={data.id} data1={data} />
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane title="已完成" value="2">
            <div>
              {wOrder.map((data) => (
                <ShowOrder key={data.id} data1={data} />
              ))}
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>

      {/* 也可以在外部条件渲染内容 */}
    </>
  );
}

export default MyOrder;
