import React from 'react';
import { Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  BarChartOutlined,
  BellOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <Menu
      mode="inline"
      theme="light"
      defaultSelectedKeys={['dashboard']}
      style={{ height: '100vh',width:'200px', borderRight: 0,cursor:'pointer',
        backgroundColor: '#9CEC7C'}}
    >
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}
      style={{ color: '#000' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b8f5a9')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
        Overview
      </Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />}
      style={{ color: '#000' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b8f5a9')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
        Customers
      </Menu.Item>
      <Menu.Item key="analytics" icon={<BarChartOutlined />}
      style={{ color: '#000' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b8f5a9')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
        Analytics
      </Menu.Item>
      <Menu.Item key="notifications" icon={<BellOutlined />}
      style={{ color: '#000' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b8f5a9')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
        Notifications
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}
      style={{ color: '#000' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b8f5a9')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
        Settings
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}
      style={{ color: '#000' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b8f5a9')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
