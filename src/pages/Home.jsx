import { Input, Space, Card } from "antd";
const { Search } = Input;

const { Meta } = Card;
import "./Home.scss";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(
    localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <div className="search">
        <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#bbb">
          <rect fill="none" height="24" width="24" />
          <path d="M9.5,6.5v3h-3v-3H9.5 M11,5H5v6h6V5L11,5z M9.5,14.5v3h-3v-3H9.5 M11,13H5v6h6V13L11,13z M17.5,6.5v3h-3v-3H17.5 M19,5h-6v6 h6V5L19,5z M13,13h1.5v1.5H13V13z M14.5,14.5H16V16h-1.5V14.5z M16,13h1.5v1.5H16V13z M13,16h1.5v1.5H13V16z M14.5,17.5H16V19h-1.5 V17.5z M16,16h1.5v1.5H16V16z M17.5,14.5H19V16h-1.5V14.5z M17.5,17.5H19V19h-1.5V17.5z M22,7h-2V4h-3V2h5V7z M22,22v-5h-2v3h-3v2 H22z M2,22h5v-2H4v-3H2V22z M2,2v5h2V4h3V2H2z" />
        </svg>
        <Space direction="vertical">
          <Search placeholder="请输入商品 如：手机" enterButton />
        </Space>
        <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#bbb">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </div>

      <Carousel />
      <div className="fl">
        <div className="flex flex-col items-center">
          <img
            src="icons/DM_20240607230047_006.png"
            alt="专题"
            className="rounded-full"
          />
          <span className="mt-2 text-sm">专题</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="icons/DM_20240607230047_007.png"
            alt="话题"
            className="rounded-full"
          />
          <span className="mt-2 text-sm">话题</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="icons/DM_20240607230047_008.png"
            alt="优选"
            className="rounded-full"
          />
          <span className="mt-2 text-sm">优选</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="icons/DM_20240607230047_009.png"
            alt="特惠"
            className="rounded-full"
          />
          <span className="mt-2 text-sm">特惠</span>
        </div>
      </div>
      <div className="hot">
        <div className="head">
          <img src="icons/local_fire_department_24dp.png" alt="" />
          <div>
            <h3>人气推荐</h3>
            <p>大家都赞不绝口</p>
          </div>
          <span>
            <pre>&gt;</pre>
          </span>
        </div>
        <div className="shop">
          {products.length
            ? products.map((product) => (
                <Card
                  key={product.id}
                  onClick={() => navigate(`/details/${product.id}`)}
                  className="card"
                  hoverable
                  style={{
                    width: 180,
                    margin: 0,
                    marginTop: 10,
                  }}
                  cover={
                    <img alt="example" src={`imgs/products/${product.image}`} />
                  }
                >
                  <Meta
                    title={
                      <div
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.description1}
                      </div>
                    }
                    description={
                      <div
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.description2}
                      </div>
                    }
                  />
                </Card>
              ))
            : null}
        </div>
      </div>
      <div className="footer">
        <span>没有更多数据了...</span>
      </div>
    </div>
  );
}

export default Home;
