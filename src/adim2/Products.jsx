import { useState } from "react";
import { Table, Tag, Space } from "antd";
import { Button } from "antd";

const Products = () => {
  const columns = [
    {
      title: "编号",
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
        <Space size="middle" wrap>
          <Button type="primary" onClick={() => handleDelete(record.id)}>
            删除
          </Button>
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
    localStorage.setItem("products", JSON.stringify(o));
  }

  return <Table columns={columns} dataSource={data} />;
};

export default Products;
