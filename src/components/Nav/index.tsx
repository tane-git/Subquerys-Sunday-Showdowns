import React, { useState } from 'react';

// antd
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import { Col, Menu, Row } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// const { SubMenu } = Menu;

// internal
import styles from './styles/style.module.less';
import logo from './images/logo.svg';
import logIn from './images/logIn.svg';

// can i console log styles to see how to access ant-layout-header?
console.log('styles: ', styles)
console.log('styles.ant-layout-header: ', styles.antLayoutHeader)

// Navigation Bar
export const Nav: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  // Configure the links the menu will display:
  const links: string[] = [
    'Home',
    'Explorer',
    'Projects',
    'Grants',
    'Documentation',
    'GitHub'
  ]
  // Refactor to require links to be passed to component?

  return (
    // NOTES: Different ways to override AntD styles:

    // Overriding AntD style with new class
    // <Header className={styles.test}>

    // Overriding AntD class
    // <Header className={styles['ant-layout-header']} >

    // Overriding AntD style with TailwindCSS
    // <Header className='bg-pink-500'>

    // Overiding AntD style with global CSS
    // <Header className='test'>

    // Modifying AntD variable
    // <Header >

    // CODE:
    <Header >
      <Row>
        <Col span={6}>
        {/* <Col span={6} className='bg-red-400 items-end custom'> */}
          <img src={logo} alt="logo" />
        </Col>

        <Col span={12}>
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
            {links.map((link: string) => (
              <Menu.Item key={link}>
                {link}
              </Menu.Item>
            ))}
          </Menu>
        </Col>

        <Col span={6}>
          <img src={logIn} alt="logIn" />
        </Col>
      </Row>
    </Header>
  );
}