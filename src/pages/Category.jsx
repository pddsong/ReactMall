import { useReducer } from "react";

import { Menu, Layout } from "antd";
import "./Category.scss";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Clothing from "../components/Clothing";
import Iphone from "../components/Iphone";
import Electrical from "../components/Electrical";
import Furniture from "../components/Furniture";
import Car from "../components/Car";
import Computer from "../components/Computer";

const items = [
  {
    key: "fc",

    label: "服装服饰",
  },
  {
    key: "sj",

    label: "手机数码",
  },
  {
    key: "jd",

    label: "家用电器",
  },
  {
    key: "jj",

    label: "家具家装",
  },
  {
    key: "qc",

    label: " 汽车用品",
  },
  {
    key: "dn",

    label: " 电脑办公",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "fc":
      return {
        fc: true,
        sj: false,
        jd: false,
        jj: false,
        qc: false,
        dn: false,
      };
    case "sj":
      return {
        fc: false,
        sj: true,
        jd: false,
        jj: false,
        qc: false,
        dn: false,
      };
    case "jd":
      return {
        fc: false,
        sj: false,
        jd: true,
        jj: false,
        qc: false,
        dn: false,
      };
    case "jj":
      return {
        fc: false,
        sj: false,
        jd: false,
        jj: true,
        qc: false,
        dn: false,
      };
    case "qc":
      return {
        fc: false,
        sj: false,
        jd: false,
        jj: false,
        qc: true,
        dn: false,
      };
    case "dn":
      return {
        fc: false,
        sj: false,
        jd: false,
        jj: false,
        qc: false,
        dn: true,
      };
  }
}
function Category() {
  const initialState = {
    fc: true,
    sj: false,
    jd: false,
    jj: false,
    qc: false,
    dn: false,
  };
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleClick = (key) => {
    // 这里假设菜单项的key与reducer中case的值对应
    dispatch({ type: key });
  };
  return (
    <>
      <div className="nav">
        <h2>分类</h2>
      </div>
      <Layout style={{ minHeight: "100vh" }}>
        {/* 添加minHeight: '100vh' 让布局至少占据视口高度 */}
        <Sider
          style={{
            overflow: "auto",
            height: "100%" /* 让Sider沾满高度 */,
            position: "fixed" /* 固定侧边栏 */,
            left: 0,
            top: 0,
            bottom: 0 /* 使侧边栏延伸到底部 */,
            backgroundColor: "#fff",
            marginTop: "3.5625rem",
          }}
          width={120}
        >
          <Menu
            items={items.map((item) => ({
              ...item,
              onClick: () => handleClick(item.key),
            }))}
            mode="inline"
            theme="light"
          />
        </Sider>
        <Layout style={{ marginTop: "3.5625rem" }}>
          {/* 如果有主内容区域，这里放置主内容的代码 */}
          <Content
            style={{
              paddingLeft: 120,
              display: "flex",
              justifyContent: "spaceBetween",
              flexWrap: "wrap",
            }}
          >
            {count.fc && <Clothing />}
            {count.sj && <Iphone />}
            {count.jd && <Electrical />}
            {count.jj && <Furniture />}
            {count.qc && <Car />}
            {count.dn && <Computer />}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Category;
