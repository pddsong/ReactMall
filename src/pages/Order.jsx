import { useNavigate } from "react-router-dom";
import "./Order.scss";
import { useAuth } from "../contexts/FakeAuthContext";
import React from "react";

function Order() {
  const { user } = useAuth();
  const datas = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

  const totalPrice = JSON.parse(localStorage.getItem("users")).totalPrice;

  const checkedItems = datas.cart.filter((item) => item.isCheck === true);
  console.log(checkedItems);
  const result = products.filter((item2) => {
    return checkedItems.some((item1) => item1.productId === item2.id);
  });

  const navigate = useNavigate();

  return (
    <div className="order-container">
      {/* Header */}
      <div className="header">
        <div className="header-inner">
          <div className="icon-button" onClick={() => navigate("/cart")}>
            <svg
              className="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </div>
          <h2 className="title">
            {checkedItems.length ? "创建订单" : "创建订单成功！"}
          </h2>
          <div></div>
        </div>
      </div>

      {/* Address Section */}
      <div className="section address-section">
        <div className="name">{user?.name}</div>
        <div className="phone">{user?.iPhone}</div>
        <div className="address">{user?.address}</div>
      </div>

      {/* Product Information Section */}
      {checkedItems.length ? (
        <>
          {" "}
          <div className="section product-section">
            <h3 className="section-title">商品信息</h3>
            <div className="product-list">
              {result.map((data) => (
                <React.Fragment key={data.id}>
                  {" "}
                  <div className="product-item">
                    <img
                      className="product-image"
                      src={`/imgs/products/${data.image}`}
                      alt="Product Image"
                    />
                    <div className="product-details">
                      <div className="product-name">{data.description1}</div>
                      <div className="product-specs">颜色: {data.type}</div>
                      <div className="product-discount">无优惠</div>
                      <div className="product-price">
                        ￥{data.price} x {checkedItems[0].num}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Coupon and Points Section */}
          <div className="section coupon-section">
            <div className="coupon-row">
              <div className="coupon-item">
                <span className="coupon-icon">🧧 优惠券</span>
                <span className="coupon-text">选择优惠券</span>
              </div>
              <span className="coupon-value">0</span>
            </div>
            <div className="coupon-row">
              <div className="coupon-item">
                <span className="coupon-icon">🏅 积分抵扣</span>
                <span className="coupon-text">0</span>
              </div>
            </div>
          </div>
          {/* Summary Section */}
          <div className="section summary-section">
            <div className="summary-row">
              <span className="summary-label">商品合计</span>
              <span className="summary-value">￥{totalPrice}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">运费</span>
              <span className="summary-value">￥0</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">活动优惠</span>
              <span className="summary-value discount">-￥0</span>
            </div>
          </div>
          {/* Total and Submit Button */}
          <div className="total-section">
            <span className="total-amount">实付金额 ￥{totalPrice}</span>
            <button className="submit-button" onClick={() => navigate("/pay")}>
              提交订单
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Order;
