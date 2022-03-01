import React from 'react';
import { useState } from 'react'
import logo from './logo.svg'
// If App.css is imported here, it can't override antd styles
// import './App.css'

// antd
import 'antd/dist/antd.less'
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout 

// App.css can override antd styles when imported below 
import './App.css'

// internal components
import { Nav, RadioGroup, Button } from './components' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout >
      <Nav links={['Home', 'About', 'Register']} />
      <Content >
        <RadioGroup />
        <p>
          <Button />
        </p>
      </Content>
    </Layout>
  )
}

export default App
