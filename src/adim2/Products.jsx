import { useState } from "react";
import { Table, Tag, Space } from "antd";

const Products = () => {
  const columns = [
    {
      title: "商品编号",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "商品名称",
      dataIndex: "description1",
      key: "description1",
    },
    {
      title: "详细描述",
      dataIndex: "description2",
      key: "description2",
    },
    {
      title: "单价",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "审核状态",
      key: "p_state",
      dataIndex: "p_state",
      render: (p_state) => (
        <>
          {p_state.map((tag) => {
            let color = tag === "已发布" ? "green" : "red";
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "操作",
      key: "p_action",
      render: (_, record) => (
        <Space size="middle">
          <div onClick={() => handleDelete(record.id)}>删除</div>
        </Space>
      ),
    },
  ];

  const products = JSON.parse(localStorage.getItem("products"));
  const sj = products.map((da) => {
    return { ...da, key: da.id, p_state: ["已发布"] };
  });

  const [data, setDate] = useState(sj);

  function handleDelete(id) {
    console.log(id);
    let o = data.filter((order) => order.id !== id);
    setDate(o);
    localStorage.setItem("users", JSON.stringify(o));
  }

  // const data = [
  //   {
  //     key: "1",
  //     p_id: 1,
  //     p_name: "麦辣鸡腿堡",
  //     p_price: 18,
  //     p_count: 266,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "2",
  //     p_id: 2,
  //     p_name: "麦旋风",
  //     p_price: 12,
  //     p_count: 166,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "3",
  //     p_id: 3,
  //     p_name: "麦麦对讲机",
  //     p_price: 48,
  //     p_count: 56,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "4",
  //     p_id: 4,
  //     p_name: "东方树叶",
  //     p_price: 5,
  //     p_count: 152,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "5",
  //     p_id: 5,
  //     p_name: "海河牛奶",
  //     p_price: 3.5,
  //     p_count: 158,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "6",
  //     p_id: 6,
  //     p_name: "麻辣烫",
  //     p_price: 22,
  //     p_count: 256,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "7",
  //     p_id: 7,
  //     p_name: "宫保鸡丁",
  //     p_price: 18,
  //     p_count: 150,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "8",
  //     p_id: 8,
  //     p_name: "鱼香肉丝",
  //     p_price: 20,
  //     p_count: 200,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "9",
  //     p_id: 9,
  //     p_name: "糖醋里脊",
  //     p_price: 24,
  //     p_count: 180,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "10",
  //     p_id: 10,
  //     p_name: "清炒时蔬",
  //     p_price: 15,
  //     p_count: 120,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "11",
  //     p_id: 11,
  //     p_name: "红烧茄子",
  //     p_price: 16,
  //     p_count: 160,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "12",
  //     p_id: 12,
  //     p_name: "水煮肉片",
  //     p_price: 28,
  //     p_count: 220,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "13",
  //     p_id: 13,
  //     p_name: "回锅肉",
  //     p_price: 26,
  //     p_count: 190,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "14",
  //     p_id: 14,
  //     p_name: "酸辣土豆丝",
  //     p_price: 14,
  //     p_count: 110,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "15",
  //     p_id: 15,
  //     p_name: "干煸豆角",
  //     p_price: 18,
  //     p_count: 140,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "16",
  //     p_id: 16,
  //     p_name: "蒜蓉西兰花",
  //     p_price: 12,
  //     p_count: 90,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "17",
  //     p_id: 17,
  //     p_name: "烤鸭",
  //     p_price: 158,
  //     p_count: 300,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "18",
  //     p_id: 18,
  //     p_name: "爆肚",
  //     p_price: 28,
  //     p_count: 450,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "19",
  //     p_id: 19,
  //     p_name: "口水鸡",
  //     p_price: 48,
  //     p_count: 200,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "20",
  //     p_id: 20,
  //     p_name: "西湖醋鱼",
  //     p_price: 48,
  //     p_count: 150,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "21",
  //     p_id: 21,
  //     p_name: "肉夹馍",
  //     p_price: 10,
  //     p_count: 100,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "22",
  //     p_id: 22,
  //     p_name: "南门涮肉",
  //     p_price: 186,
  //     p_count: 80,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "23",
  //     p_id: 23,
  //     p_name: "重庆小面",
  //     p_price: 15,
  //     p_count: 60,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "24",
  //     p_id: 24,
  //     p_name: "热干面",
  //     p_price: 12,
  //     p_count: 50,
  //     p_state: ["已审核"],
  //   },
  //   {
  //     key: "25",
  //     p_id: 25,
  //     p_name: "臭豆腐",
  //     p_price: 10,
  //     p_count: 40,
  //     p_state: ["未审核"],
  //   },
  //   {
  //     key: "26",
  //     p_id: 26,
  //     p_name: "鸡蛋灌饼",
  //     p_price: 8,
  //     p_count: 30,
  //     p_state: ["已审核"],
  //   },
  // ];

  return <Table columns={columns} dataSource={data} />;
};

export default Products;
