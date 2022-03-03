import React from 'react';
import { useState } from 'react'
import logo from './logo.svg'

// STYLES
import './App.less'

// ANTD COMPONENTS
import { Col, Divider, Layout, Row, Typography } from 'antd'
const { Header, Content, Footer } = Layout 
// import { Button as Button_antd } from 'antd'

// INTERNAL COMPONENTS
import { Nav, RadioGroup, Button } from './components' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout className='bg-transparent'>
      <Nav links={['Home', 'About', 'Register']} />
      <Content className='m-4 bg-transparent' >
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
            <p>Text</p>
          </Col>
          <Col span={4}>
            <p>Link</p>
          </Col>
        </Row>
        <Divider />
        <Row className='m-4'>
          <Col span={4}>
            <p>Default - Large</p>
          </Col>
          <Col span={4}>
            <Button label='Button' type='primary' />
          </Col>
          <Col span={4}>
            <Button label='Button' type='primary' outlined />
          </Col>
          <Col span={4}>
            <Button label='Button' type='default' />
          </Col>
          <Col span={4}>
            <Button label='Button' type='text' />
          </Col>
          <Col span={4}>
            <Button label='Link-Button' type='link'/>
          </Col>
        </Row>
        <Row className='m-4'>
          <Col span={4}>
            <p>Medium</p>
          </Col>
          <Col span={4}>
            <Button size='middle' label='Button' type='primary' />
          </Col>
          <Col span={4}>
            <Button size='middle' label='Button' type='primary' outlined />
          </Col>
          <Col span={4}>
            <Button size='middle' label='Button' type='default' />
          </Col>
          <Col span={4}>
            <Button size='middle' label='Button' type='text' />
          </Col>
          <Col span={4}>
            <Button size='middle' label='Link-Button' type='link'/>
          </Col>
        </Row>
        <Row className='m-4'>
          <Col span={4}>
            <p>Small</p>
          </Col>
          <Col span={4}>
            <Button size='small' label='Button' type='primary' />
          </Col>
          <Col span={4}>
            <Button size='small' label='Button' type='primary' outlined />
          </Col>
          <Col span={4}>
            <Button size='small' label='Button' type='default' />
          </Col>
          <Col span={4}>
            <Button size='small' label='Button' type='text' />
          </Col>
          <Col span={4}>
            <Button size='small' label='Link-Button' type='link'/>
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
            {/* <Button label='Button' colour='gradient' /> */}
            <Button label='Button' gradient />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default App
