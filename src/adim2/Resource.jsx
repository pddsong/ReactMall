import { Table, Space } from "antd";

const Resource = () => {
  const columns = [
    {
      title: "编号",
      dataIndex: "s_id",
      key: "s_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "资源名称",
      dataIndex: "s_name",
      key: "s_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "资源路径",
      dataIndex: "s_road",
      key: "s_road",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "资源描述",
      dataIndex: "s_detail",
      key: "s_detail",
    },
    {
      title: "操作",
      key: "s_action",
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      s_id: 1,
      s_name: "首页",
      s_road: "/admin/home",
      s_detail: "首页介绍",
    },
    {
      key: "2",
      s_id: 2,
      s_name: "商品",
      s_road: "/admin/products",
      s_detail: "商品列表",
    },
    {
      key: "3",
      s_id: 3,
      s_name: "订单",
      s_road: "/admin/order",
      s_detail: "订单列表",
    },
    {
      key: "4",
      s_id: 4,
      s_name: "活动",
      s_road: "/admin/activity",
      s_detail: "优惠活动",
    },
    {
      key: "5",
      s_id: 5,
      s_name: "权限-用户列表",
      s_road: "/admin/manage/user",
      s_detail: "用户列表权限",
    },
    {
      key: "6",
      s_id: 6,
      s_name: "权限-角色列表",
      s_road: "/admin/manage/role",
      s_detail: "用户角色权限",
    },
    {
      key: "5",
      s_id: 5,
      s_name: "权限-菜单列表",
      s_road: "/admin/manage/menus",
      s_detail: "用户菜单权限",
    },
    {
      key: "5",
      s_id: 5,
      s_name: "权限-资源列表",
      s_road: "/admin/manage/resource",
      s_detail: "用户资源权限",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Resource;
