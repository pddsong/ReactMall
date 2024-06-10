import { useState } from "react";
import { Table, Space, Switch, Button, Modal, Radio } from "antd";

const User = () => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isAssignRoleModalVisible, setIsAssignRoleModalVisible] =
    useState(false);
  const [selectedRole, setSelectedRole] = useState("orderAdmin");
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [users, setUsers] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );
  const roles = [
    { label: "系统管理员", value: "admin" },
    { label: "商品管理员", value: "productAdmin" },
    { label: "订单管理员", value: "orderAdmin" },
    { label: "活动管理员", value: "activityAdmin" },
  ];

  const columns = [
    {
      title: "编号",
      dataIndex: "u_id",
      key: "u_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "账号",
      dataIndex: "username",
      key: "u_account",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "u_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "密码",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "启用状态",
      key: "u_state",
      dataIndex: "u_state",
      render: (_, record) => {
        const [defaultState] = record.u_state;
        const isChecked = defaultState === "已启用";

        const onChange = (checked) => {
          console.log(`switch to ${checked ? "已启用" : "未启用"}`);
        };

        return <Switch defaultChecked={isChecked} onChange={onChange} />;
      },
    },
    {
      title: "操作",
      key: "u_action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleAssignRole(record.u_id)}>
            分配角色
          </Button>
          <Button type="link" onClick={() => handleDelete(record.username)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const data = users
    ? users.map((data, index) => {
        return {
          ...data,
          u_state: ["已启用", "未启用"],
          u_id: index + 1,
          key: index + 1,
        };
      })
    : [];

  // const data = [
  //   {
  //     key: "1",
  //     u_id: 1,
  //     u_account: "admin",
  //     u_name: "系统管理员",
  //     u_mail: "admin@163.com",
  //     u_state: ["已启用", "未启用"],
  //   },
  //   {
  //     key: "2",
  //     u_id: 2,
  //     u_account: "test",
  //     u_name: "测试账号",
  //     u_mail: "test@qq.com",
  //     u_state: ["已启用", "未启用"],
  //   },
  //   {
  //     key: "3",
  //     u_id: 3,
  //     u_account: "productAdmin",
  //     u_name: "商品管理员",
  //     u_mail: "productAdmin@163.com",
  //     u_state: ["已启用", "未启用"],
  //   },
  //   {
  //     key: "4",
  //     u_id: 4,
  //     u_account: "orderAdmin",
  //     u_name: "订单管理员1",
  //     u_mail: "orderAdmin1@qq.com",
  //     u_state: ["已启用", "未启用"],
  //   },
  //   {
  //     key: "5",
  //     u_id: 5,
  //     u_account: "orderAdmin2",
  //     u_name: "订单管理员2",
  //     u_mail: "orderAdmin2@qq.com",
  //     u_state: ["未启用", "已启用"],
  //   },
  //   {
  //     key: "6",
  //     u_id: 6,
  //     u_account: "activityAdmin",
  //     u_name: "活动管理员",
  //     u_mail: "activityAdmin@qq.com",
  //     u_state: ["已启用", "未启用"],
  //   },
  //   {
  //     key: "7",
  //     u_id: 7,
  //     u_account: "test55",
  //     u_name: "测试账号55",
  //     u_mail: "test55@qq.com",
  //     u_state: ["未启用", "已启用"],
  //   },
  // ];
  const handleAssignRole = (userId) => {
    setSelectedUserId(userId);
    setIsAssignRoleModalVisible(true);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleRoleOk = () => {
    console.log("为用户分配角色:", selectedUserId, selectedRole);
    setIsAssignRoleModalVisible(false);
  };

  const handleRoleCancel = () => {
    setIsAssignRoleModalVisible(false);
  };

  const handleDelete = (userId) => {
    setSelectedUserId(userId);
    setIsDeleteModalVisible(true);
  };

  const handleOk = () => {
    console.log("确认删除用户:", selectedUserId);
    setIsDeleteModalVisible(false);
    const users = JSON.parse(localStorage.getItem("users"));
    const udUsers = users.filter((order) => order.username !== selectedUserId);

    localStorage.setItem("users", JSON.stringify(udUsers));
    setUsers(udUsers);
  };

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
  };

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="确认删除"
        open={isDeleteModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>确定要删除该用户吗？</p>
      </Modal>
      <Modal
        title="分配角色"
        open={isAssignRoleModalVisible}
        onOk={handleRoleOk}
        onCancel={handleRoleCancel}
      >
        <Radio.Group onChange={handleRoleChange} value={selectedRole}>
          {roles.map((role) => (
            <Radio key={role.value} value={role.value}>
              {role.label}
            </Radio>
          ))}
        </Radio.Group>
      </Modal>
    </>
  );
};

export default User;
