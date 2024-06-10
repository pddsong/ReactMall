import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  KeyOutlined,
  UserOutlined,
  GiftOutlined,
  AccountBookOutlined,
  PoundCircleOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MyLayout = ({
  children,
  setIsH,
  setIsO,
  setIsP,
  setIsQ,
  setIsU,
  setIsJ,
}: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      id="components-layout-demo-custom-trigger"
      style={{ backgroundColor: "#fff", height: "100vh" }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed} id="sider1">
        <div className="demo-logo-vertical" />
        <Menu
          style={{ backgroundColor: "#fff", height: "100vh" }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["/admin/home"]}
          onClick={({ key }) => {
            console.log(key);
            switch (key) {
              case "/admin/home":
                {
                  setIsP(false),
                    setIsH(false),
                    setIsO(false),
                    setIsQ(false),
                    setIsU(false);
                  setIsJ(true);
                }
                break;
              case "/admin/products":
                {
                  setIsP(true),
                    setIsH(false),
                    setIsO(false),
                    setIsQ(false),
                    setIsU(false);
                  setIsJ(false);
                }
                break;
              case "/admin/order":
                {
                  setIsP(false),
                    setIsH(false),
                    setIsO(true),
                    setIsQ(false),
                    setIsU(false);
                  setIsJ(false);
                }
                break;
              case "/admin/activity":
                {
                  setIsP(false),
                    setIsH(true),
                    setIsO(false),
                    setIsQ(false),
                    setIsU(false);
                  setIsJ(false);
                }
                break;
              case "/admin/activity":
                {
                  setIsP(false),
                    setIsH(true),
                    setIsO(false),
                    setIsQ(false),
                    setIsU(false);
                  setIsJ(false);
                }
                break;
              case "/admin/manage/user":
                {
                  setIsP(false),
                    setIsH(false),
                    setIsO(false),
                    setIsQ(false),
                    setIsU(true);
                  setIsJ(false);
                }
                break;
            }
          }}
          items={[
            {
              key: "/admin/home",
              icon: <UserOutlined />,
              label: "首页",
            },
            {
              key: "/admin/products",
              icon: <GiftOutlined />,
              label: "商品",
            },
            {
              key: "/admin/order",
              icon: <AccountBookOutlined />,
              label: "订单",
            },
            {
              key: "/admin/activity",
              icon: <PoundCircleOutlined />,
              label: "活动",
            },
            {
              key: "/admin/manage",
              icon: <KeyOutlined />,
              label: "权限",
              children: [
                {
                  label: "用户列表",
                  key: "/admin/manage/user",
                },
                {
                  label: "角色列表",
                  key: "/admin/manage/role",
                },
                {
                  label: "菜单列表",
                  key: "/admin/manage/menus",
                },
                {
                  label: "资源列表",
                  key: "/admin/manage/resource",
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <span className="headtitle">adim的信息管理系统</span>
          <Button
            type="text"
            style={{
              fontSize: "16px",
              height: 64,
            }}
          >
            退出登录
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
