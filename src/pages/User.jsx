import { useNavigate } from "react-router-dom";
import "./User.scss";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function User() {
  const navigator = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-zinc-100 min-h-screen">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="text-lg font-bold">设置</div>
          {isAuthenticated ? (
            <div className="text-lg" onClick={() => logout()}>
              退出
            </div>
          ) : (
            <div className="text-lg" onClick={() => navigator("/login")}>
              登录
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        <div className="relative">
          <img
            src="/imgs/banner_2.jpg"
            alt="Background Image"
            className="background-image"
          />
          <div className="overlay">
            <div className="text-center">
              {isAuthenticated && (
                <img
                  src="imgs/DM_20240607230047_019.jpg"
                  alt="Profile Image"
                  className="profile-image"
                />
              )}
              <div className="text-white mt-2">
                {isAuthenticated ? user.name : "游客"}
              </div>
              <div className="text-yellow-400">黄金会员</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div>
              <div className="text-lg font-bold">5000</div>
              <div className="text-zinc-500">积分</div>
            </div>
            <div>
              <div className="text-lg font-bold">1000</div>
              <div className="text-zinc-500">成长值</div>
            </div>
            <div>
              <div className="text-lg font-bold">暂无</div>
              <div className="text-zinc-500">优惠券</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="grid-content">
            <div
              onClick={() => {
                if (!isAuthenticated) return;
                navigator("/myOrder");
              }}
            >
              <div className="text-2xl">📦</div>
              <div className="text-zinc-500">全部订单</div>
            </div>
            <div>
              <div className="text-2xl">⌛</div>
              <div className="text-zinc-500">待付款</div>
            </div>
            <div>
              <div className="text-2xl">📬</div>
              <div className="text-zinc-500">待收货</div>
            </div>
            <div>
              <div className="text-2xl">🔄</div>
              <div className="text-zinc-500">退换/售后</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="list-item">
            <div className="list-content">
              <div className="text-2xl text-green-500">📍</div>
              <div className="ml-2">地址管理</div>
            </div>
            <div className="text-zinc-500">&gt;</div>
          </div>
          <div className="list-item">
            <div className="list-content">
              <div className="text-2xl text-red-500">🕒</div>
              <div className="ml-2">我的足迹</div>
            </div>
            <div className="text-zinc-500">&gt;</div>
          </div>
          <div className="list-item">
            <div className="list-content">
              <div className="text-2xl text-green-500">🌟</div>
              <div className="ml-2">我的关注</div>
            </div>
            <div className="text-zinc-500">&gt;</div>
          </div>
          <div className="list-item">
            <div className="list-content">
              <div className="text-2xl text-blue-500">⭐</div>
              <div className="ml-2">我的收藏</div>
            </div>
            <div className="text-zinc-500">&gt;</div>
          </div>
          <div className="list-item">
            <div className="list-content">
              <div className="text-2xl text-yellow-500">💬</div>
              <div className="ml-2">我的评价</div>
            </div>
            <div className="text-zinc-500">&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
