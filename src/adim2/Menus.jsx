import React from 'react';
import { Table, Tag, Space, Switch } from 'antd';
import {
  KeyOutlined,
  UserOutlined,
  GiftOutlined,
  AccountBookOutlined,
  PoundCircleOutlined
} from '@ant-design/icons';

const Menus= () => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'm_id',
      key: 'm_id',
      render: text => <a>{text}</a>,
    },
    {
        title: '菜单名称',
        dataIndex: 'm_name',
        key: 'm_name',
        render: text => <a>{text}</a>,
    },
    {
      title: '菜单级数',
      dataIndex: 'm_level',
      key: 'm_level',
      render: text => <a>{text}</a>,
    },
    {
      title: '前端图标',
      dataIndex: 'm_logo',
      key: 'm_logo',
    },
    {
      title: '显示状态',
      key: 'm_state',
      dataIndex: 'm_state',
      render: (_, record) => {
        const [defaultState] = record.m_state;
        const isChecked = defaultState === '显示';
  
        const onChange = (checked) => {
          console.log(`switch to ${checked ? '显示' : '隐藏'}`);
        };
  
        return <Switch defaultChecked={isChecked} onChange={onChange} />;
      },
    },
    {
      title: '操作',
      key: 'm_action',
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
      m_id: 1,
      m_name: '首页',
      m_level: "一级",
      m_logo:<UserOutlined/>,
      m_state: ['显示', '隐藏'],
    },
    {
      key: '2',
      m_id: 2,
      m_name: '商品',
      m_level: "一级",
      m_logo:<GiftOutlined/>,
      m_state:  ['隐藏', '显示'],
    },
    {
      key: '3',
      m_id: 3,
      m_name: '订单',
      m_level: "一级",
      m_logo:<AccountBookOutlined/>,
      m_state:  ['显示', '隐藏'],
    },
    {
      key: '4',
      m_id: 4,
      m_name: '活动',
      m_level: "一级",
      m_logo:<PoundCircleOutlined/>,
      m_state:  ['显示', '隐藏'],
    },
    {
      key: '5',
      m_id: 5,
      m_name: '权限',
      m_level: "一级",
      m_logo:<KeyOutlined/>,
      m_state:  ['隐藏', '显示'],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Menus;