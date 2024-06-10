import React from 'react';
import { Table, Tag, Space } from 'antd';

const Role= () => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'r_id',
      key: 'r_id',
      render: text => <a>{text}</a>,
    },
    {
      title: '角色名称',
      dataIndex: 'r_name',
      key: 'r_name',
      render: text => <a>{text}</a>,
    },
    {
      title: '权限描述',
      dataIndex: 'r_detail',
      key: 'r_detail',
    },
    {
      title: '启用状态',
      key: 'r_state',
      dataIndex: 'r_state',
      render: r_state => (
        <>
          {r_state.map(tag => {
            let color = tag === '已启用' ? 'green' : 'red';
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
      key: 'r_action',
      render: (_, record) => (
        <Space size="middle">
          <a>分配菜单</a>
          <a>分配资源</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      r_id: 1,
      r_name: '系统管理员',
      r_detail: "拥有所有查看和操作的权限",
      r_state: ['已启用'],
    },
    {
        key: '2',
        r_id: 2,
        r_name: '商品管理员',
        r_detail: "拥有查看和操作商品信息的权限",
        r_state: ['已启用'],
    },
    {
        key: '3',
        r_id: 3,
        r_name: '订单管理员',
        r_detail: "拥有查看和操作订单的权限",
        r_state: ['已启用'],
    },
    {
        key: '4',
        r_id: 4,
        r_name: '活动管理员',
        r_detail: "拥有查看和操作活动的权限",
        r_state: ['已启用'],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Role;