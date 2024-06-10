import React from 'react';
import { Table, Tag, Space } from 'antd';

const Activity= () => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'a_id',
      key: 'a_id',
      render: text => <a>{text}</a>,
    },
    {
      title: '优惠券名称',
      dataIndex: 'a_name',
      key: 'a_name',
      render: text => <a>{text}</a>,
    },
    {
        title: '优惠券类型',
        dataIndex: 'a_type',
        key: 'a_type',
        render: text => <a>{text}</a>,
    },
    {
        title: '使用门槛',
        dataIndex: 'a_limit',
        key: 'a_limit',
        render: text => <a>{text}</a>,
    },
    {
      title: '面值',
      dataIndex: 'a_money',
      key: 'a_money',
    },
    {
        title: '有效期',
        dataIndex: 'a_date',
        key: 'a_date',
    },
    {
      title: '状态',
      key: 'u_state',
      dataIndex: 'u_state',
      render: u_state => (
        <>
          {u_state.map(tag => {
            let color = tag === '未过期' ? 'green' : 'red';
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
      title: '操作',
      key: 'u_action',
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
      key: '1',
      a_id: 1,
      a_name: '全品类通用券',
      a_type: "全场通用",
      a_limit:"满100可用",
      a_money:"￥20",
      a_date:"2023-11-08至2024-11-08",
      u_state: ['未过期'],
    },
    {
        key: '2',
        a_id: 2,
        a_name: '手机类通用券',
        a_type: "指定分类",
        a_limit:"满3000可用",
        a_money:"￥200",
        a_date:"2024-1-08至2024-3-08",
        u_state: ['已过期'],
    },
    {
        key: '3',
        a_id: 3,
        a_name: '食品类通用券',
        a_type: "指定分类",
        a_limit:"满50可用",
        a_money:"￥5",
        a_date:"2024-2-17至2024-7-17",
        u_state: ['未过期'],
    },
    {
        "key": "4",
        "a_id": 4,
        "a_name": "电子产品专用券",
        "a_type": "指定分类",
        "a_limit": "满2000可用",
        "a_money": "￥150",
        "a_date": "2024-4-01至2024-8-01",
        "u_state": ["未过期"]
    },
    {
        "key": "5",
        "a_id": 5,
        "a_name": "服装类通用券",
        "a_type": "指定分类",
        "a_limit": "满500可用",
        "a_money": "￥50",
        "a_date": "2024-3-15至2024-5-15",
        "u_state": ["已过期"]
    },
    {
        "key": "6",
        "a_id": 6,
        "a_name": "美妆个护券",
        "a_type": "指定分类",
        "a_limit": "满200可用",
        "a_money": "￥30",
        "a_date": "2024-2-10至2024-4-10",
        "u_state": ["已过期"]
    },
    {
        "key": "7",
        "a_id": 7,
        "a_name": "家居用品券",
        "a_type": "指定分类",
        "a_limit": "满800可用",
        "a_money": "￥80",
        "a_date": "2024-5-01至2024-7-01",
        "u_state": ["未过期"]
    },
    {
        "key": "8",
        "a_id": 8,
        "a_name": "图书音像券",
        "a_type": "指定分类",
        "a_limit": "满100可用",
        "a_money": "￥10",
        "a_date": "2024-1-20至2024-3-20",
        "u_state": ["已过期"]
    },
    {
        "key": "9",
        "a_id": 9,
        "a_name": "运动户外券",
        "a_type": "指定分类",
        "a_limit": "满400可用",
        "a_money": "￥40",
        "a_date": "2024-6-10至2024-8-10",
        "u_state": ["未过期"]
    },
    {
        "key": "10",
        "a_id": 10,
        "a_name": "婴儿用品券",
        "a_type": "指定分类",
        "a_limit": "满300可用",
        "a_money": "￥30",
        "a_date": "2024-4-20至2024-6-20",
        "u_state": ["未过期"]
    },
    {
        "key": "11",
        "a_id": 11,
        "a_name": "箱包配饰券",
        "a_type": "指定分类",
        "a_limit": "满1000可用",
        "a_money": "￥100",
        "a_date": "2024-2-08至2024-4-08",
        "u_state": ["已过期"]
    },
    {
        "key": "12",
        "a_id": 12,
        "a_name": "家电优惠券",
        "a_type": "指定分类",
        "a_limit": "满5000可用",
        "a_money": "￥500",
        "a_date": "2024-5-15至2024-7-15",
        "u_state": ["未过期"]
    },
    {
        "key": "13",
        "a_id": 13,
        "a_name": "旅游出行券",
        "a_type": "指定分类",
        "a_limit": "满2000可用",
        "a_money": "￥200",
        "a_date": "2024-3-25至2024-8-25",
        "u_state": ["未过期"]
    }
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Activity;