import React, { ReactElement } from 'react';
import Link from 'next/dist/client/link';
import { Layout, Menu, Breadcrumb} from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const {Sider } = Layout;

function Header():ReactElement{
    return(
        <Layout>
        <div className={`Header`}>
            <div className={`topbar`}>
                <div className={`logo`}>
                    ThaiBulksms
                </div>
                <div className={`details`}>
                        <div className={`remain`}>
                            เครดิตคงเหลือ
                        </div>
                        <div className={`value`}>
                            300,000 <span className={`unit`}>S</span>
                        </div>
                        <Link href="">
                            <a >ดูรายละเอียด</a>
                        </Link>
                        <div className={`value`}>
                            1,000 <span className={`coin`}>C</span>
                        </div>
                </div>
                <div className={`user`}>
                    icon
                    icon
                    พนิดา
                </div>
            </div>
            <Sider className={`sidebar`}
                style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
            width = {100}
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} style={{padding: '30px 0',fontSize: '24px', color:'white', backgroundColor: '#526069'}}>
                    <Menu.Item key="1">icon</Menu.Item>
                    <Menu.Item key="2">icon</Menu.Item>
                    <Menu.Item key="3">icon</Menu.Item>
                    <Menu.Item key="4">icon</Menu.Item>
                    <Menu.Item key="5">icon</Menu.Item>
                    <Menu.Item key="6">icon</Menu.Item>
                    <Menu.Item key="7">icon</Menu.Item>
                    <Menu.Item key="8">icon</Menu.Item>
                </Menu>
            </Sider>
        </div>
        </Layout>
    )
}

export default Header;