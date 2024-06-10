import { useNavigate, useParams } from "react-router-dom";
import "./Details.scss";

function Details() {
  const { id } = useParams();
  const navigator = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const product = JSON.parse(localStorage.getItem("products")).filter(
    (data) => data.id === Number(id)
  );

  // { id: 1, productId: 1, num: 1, isCheck: false }

  // 生成一个唯一的ID（时间戳）
  const generateUniqueId = () => {
    return new Date().getTime();
  };

  function handleOnClick() {
    const newProduct = {
      id: generateUniqueId(), // 生成唯一ID
      productId: Number(id),
      num: 1,
      isCheck: false,
    };
    const users = JSON.parse(localStorage.getItem("users"));
    users.cart.push(newProduct);
    localStorage.setItem("users", JSON.stringify(users));
    navigator("/cart");
  }

  return (
    <div className="widget">
      <div className="navbar">
        <div className="navbar-inner">
          <div className="icon-button">
            <span onClick={() => navigator(-1)}>&lt;</span>
          </div>
          <span className="title">详细展示</span>
          <button className="icon-button"></button>
        </div>
      </div>
      <div className="content">
        <div className="image-container">
          <img
            src={`/imgs/products/${product[0].image}`}
            alt="Product Image"
            className="product-image"
          />
        </div>

        <div className="product-details">
          <h1 className="product-title">{product[0].description1}</h1>
          <p className="product-description">{product[0].description2}</p>
          <div className="price-section">
            <span className="current-price">{product[0].price}</span>
            <span className="original-price">{product[0].price}</span>
          </div>
          <div className="stats">
            <span>销量: 0</span>
            <span>库存: 198</span>
            <span>浏览量: 768</span>
          </div>
        </div>

        <div className="info-section">
          <div className="info-row">
            <span className="info-label">购买类型</span>
            <span className="info-value">银{product[0].type}</span>
          </div>
          <div className="info-row">
            <span className="info-label">商品参数</span>
            <span className="info-value">查看</span>
          </div>
          <div className="info-row">
            <span className="info-label">优惠券</span>
            <span className="info-value red">领取优惠券</span>
          </div>
          <div className="info-row">
            <span className="info-label">促销活动</span>
            <span className="info-value">暂无优惠</span>
          </div>
          <div className="info-row">
            <span className="info-label">服务</span>
            <span className="info-value">无忧退货 快速退款 免费包邮</span>
          </div>
        </div>

        <div className="reviews-section">
          <h2 className="reviews-title">评价 (86)</h2>
          <div className="review">
            <div className="review-header">
              <span className="review-author">Leo yo</span>
              <span className="review-rating">好评率 100%</span>
            </div>
            <p className="review-text">
              商品收到啦，79元无敌，质量不错，试了一下有点...
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div onClick={() => navigator("/")}>首页</div>
        <div>
          <button className="buy-now">立即购买</button>
          <button className="add-to-cart" onClick={handleOnClick}>
            加入购物车
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
