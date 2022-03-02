import React from 'react';
import { useState } from 'react'
import logo from './logo.svg'
// If App.css is imported here, it can't override antd styles
import './App.css'

// antd
// import 'antd/lib/style/themes/default.less';
import 'antd/dist/antd.less'
import 'antd/lib/style/themes/default.less';
// import 'antd/dist/antd.css';
import { Col, Divider, Layout, Row, Typography } from 'antd'
const { Header, Content, Footer } = Layout 
import { Button as Button_antd } from 'antd'

// App.css can override antd styles when imported below 
// import './App.css'

// internal components
import { Nav, RadioGroup, Button } from './components' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout >
      <Nav links={['Home', 'About', 'Register']} />
      <Content className='m-4' >
        <Typography.Title> Standard Button </Typography.Title>
        <Row className='m-4'>
          <Col span={4}></Col>
          <Col span={4}>
            <p>Primary / Filled</p>
          </Col>
          <Col span={4}>
            <p>Primary / Outlined</p>
          </Col>
          <Col span={4}>
            <p>Neutral / Outlined</p>
          </Col>
          <Col span={4}>
            <p>Ghost</p>
          </Col>
          <Col span={4}>
            <p>Text Link</p>
          </Col>
        </Row>
        <Divider />
        <Row className='m-4'>
          <Col span={4}>
            <p>Default - Large</p>
          </Col>
          <Col span={4}>
            <Button label='Button' size='large' type='primary' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='large' type='primary' ghost={true} />
            {/* <Button label='Button' size='large' outlined={true} /> */}
          </Col>
          <Col span={4}>
            <Button label='Button' size='large' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='large' type='text' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='large' type='link'/>
          </Col>
        </Row>
        <Row className='m-4'>
          <Col span={4}>
            <p>Medium</p>
          </Col>
          <Col span={4}>
            <Button label='Button' size='middle' type='primary' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='middle' type='primary' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='middle' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='middle' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='middle' />
          </Col>
        </Row>
        <Row className='m-4'>
          <Col span={4}>
            <p>Small</p>
          </Col>
          <Col span={4}>
            <Button label='Button' size='small' type='primary' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='small' type='primary' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='small' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='small' />
          </Col>
          <Col span={4}>
            <Button label='Button' size='small' />
          </Col>
        </Row>
        <Divider />
        <Typography.Title> Gradient Button </Typography.Title>
        <Divider />
        <Row className='m-4'>
          <Col span={4}>
            <p>Default</p>
          </Col>
          <Col span={4}>
            <Button label='Button' colour='gradient' />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default App
