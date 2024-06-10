import { useState } from "react";
import { Table, Tag, Space, Button } from "antd";

const Order = () => {
  const [data1, setData] = useState(
    localStorage.getItem("allOrder")
      ? { order: JSON.parse(localStorage.getItem("allOrder")) }
      : []
  );

  function handleFh(id, username) {
    const d = JSON.parse(localStorage.getItem("users")).filter(
      (data) => data.username === username
    )[0];

    const x = d.order.map((va) => {
      if (va.id === id) {
        va.status = true;
        return va;
      }
      return va;
    });

    const xinU = { ...d, order: x };

    let originalData = JSON.parse(localStorage.getItem("users"));
    const nUsers = originalData.map((value) => {
      if (value.username === username) return xinU;
      else return value;
    });

    localStorage.setItem("users", JSON.stringify(nUsers));

    const gaiO = x.find((order) => order.id === id);

    const aO = JSON.parse(localStorage.getItem("allOrder"));
    const xAo = aO.map((value) => {
      if (value.id === id) {
        return gaiO;
      } else return value;
    });

    localStorage.setItem("allOrder", JSON.stringify(xAo));

    setData({ order: xAo });
  }

  function handleSc(id, username) {
    console.log(id);
    const d = JSON.parse(localStorage.getItem("users")).filter(
      (data) => data.username === username
    )[0];
    console.log(d);
    const x = d.order.filter((va) => {
      if (va.id === id) {
        return false;
      }
      return true;
    });
    console.log(x);
    const xinU = { ...d, order: x };
    console.log(xinU);
    let originalData = JSON.parse(localStorage.getItem("users"));
    const nUsers = originalData.map((value) => {
      if (value.username === username) return xinU;
      else return value;
    });
    localStorage.setItem("users", JSON.stringify(nUsers));

    const aO = JSON.parse(localStorage.getItem("allOrder"));
    const updatedOrders = aO.filter((order) => order.id !== id);
    console.log(updatedOrders);

    localStorage.setItem("allOrder", JSON.stringify(updatedOrders));

    setData({ order: updatedOrders });
  }

  const columns = [
    {
      title: "编号",
      dataIndex: "o_num",
      key: "o_num",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "订单编号",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "提交时间",
      dataIndex: "time",
      key: "time",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "订单金额",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "支付方式",
      dataIndex: "fs",
      key: "fs",
    },
    {
      title: "订单状态",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status ? "green" : "red"}>
          {status ? "已发货" : "待发货"}
        </Tag>
      ),
    },
    {
      title: "操作",
      key: "o_action",
      render: (_, record) => (
        <Space size="middle">
          {!record.status && (
            <Button
              type="primary"
              onClick={() => handleFh(record.id, record.username)}
            >
              发货
            </Button>
          )}
          <Button onClick={() => handleSc(record.id, record.username)}>
            删除订单
          </Button>
        </Space>
      ),
    },
  ];

  const data = data1.order.map((va, index) => ({
    ...va,
    o_num: index + 1,
    key: index + 1,
  }));
  // const data = [
  //   {
  //     key: "1",
  //     o_num: 1,
  //     o_id: 2024011500001,
  //     o_account: "test1",
  //     o_time: "2024-01-15 11:28:27",
  //     o_price: "￥18732",
  //     o_pay: "微信",
  //     o_state: ["已发货"],
  //   },
  //   {
  //     key: "2",
  //     o_num: 2,
  //     o_id: 2024011700002,
  //     o_account: "test2",
  //     o_time: "2024-01-17 21:48:15",
  //     o_price: "￥5832",
  //     o_pay: "支付宝",
  //     o_state: ["未发货"],
  //   },
  //   {
  //     key: "3",
  //     o_num: 3,
  //     o_id: 2024011700003,
  //     o_account: "test1",
  //     o_time: "2024-01-17 22:45:16",
  //     o_price: "￥2817",
  //     o_pay: "未支付",
  //     o_state: ["已发货"],
  //   },
  //   {
  //     key: "4",
  //     o_num: 4,
  //     o_id: 2024011800004,
  //     o_account: "test4",
  //     o_time: "2024-01-18 09:10:55",
  //     o_price: "￥3642",
  //     o_pay: "微信",
  //     o_state: ["未发货"],
  //   },
  //   {
  //     key: "5",
  //     o_num: 5,
  //     o_id: 2024011800005,
  //     o_account: "test5",
  //     o_time: "2024-01-18 13:45:12",
  //     o_price: "￥8231",
  //     o_pay: "支付宝",
  //     o_state: ["已发货"],
  //   },
  //   {
  //     key: "6",
  //     o_num: 6,
  //     o_id: 2024011800006,
  //     o_account: "test6",
  //     o_time: "2024-01-18 17:32:44",
  //     o_price: "￥5321",
  //     o_pay: "微信",
  //     o_state: ["已发货"],
  //   },
  //   {
  //     key: "7",
  //     o_num: 7,
  //     o_id: 2024011900007,
  //     o_account: "test7",
  //     o_time: "2024-01-19 10:00:15",
  //     o_price: "￥9423",
  //     o_pay: "支付宝",
  //     o_state: ["已发货"],
  //   },
  //   {
  //     key: "8",
  //     o_num: 8,
  //     o_id: 2024011900008,
  //     o_account: "test8",
  //     o_time: "2024-01-19 14:20:35",
  //     o_price: "￥6312",
  //     o_pay: "微信",
  //     o_state: ["未发货"],
  //   },
  //   {
  //     key: "9",
  //     o_num: 9,
  //     o_id: 2024011900009,
  //     o_account: "test9",
  //     o_time: "2024-01-19 19:48:00",
  //     o_price: "￥4278",
  //     o_pay: "支付宝",
  //     o_state: ["已发货"],
  //   },
  //   {
  //     key: "10",
  //     o_num: 10,
  //     o_id: 2024012000010,
  //     o_account: "test10",
  //     o_time: "2024-01-20 08:30:25",
  //     o_price: "￥3124",
  //     o_pay: "微信",
  //     o_state: ["已发货"],
  //   },
  //   {
  //     key: "11",
  //     o_num: 11,
  //     o_id: 2024012000011,
  //     o_account: "test11",
  //     o_time: "2024-01-20 10:55:45",
  //     o_price: "￥7241",
  //     o_pay: "支付宝",
  //     o_state: ["已发货"],
  //   },
  //   {
  //     key: "12",
  //     o_num: 12,
  //     o_id: 2024012100012,
  //     o_account: "test12",
  //     o_time: "2024-01-21 14:42:05",
  //     o_price: "￥5287",
  //     o_pay: "微信",
  //     o_state: ["未发货"],
  //   },
  //   {
  //     key: "13",
  //     o_num: 13,
  //     o_id: 2024012100013,
  //     o_account: "test13",
  //     o_time: "2024-01-21 18:11:11",
  //     o_price: "￥9321",
  //     o_pay: "支付宝",
  //     o_state: ["已发货"],
  //   },
  //   {
  //     key: "14",
  //     o_num: 14,
  //     o_id: 2024012100014,
  //     o_account: "test14",
  //     o_time: "2024-01-21 21:22:33",
  //     o_price: "￥6342",
  //     o_pay: "微信",
  //     o_state: ["未发货"],
  //   },
  // ];

  return <Table columns={columns} dataSource={data} />;
};

export default Order;
