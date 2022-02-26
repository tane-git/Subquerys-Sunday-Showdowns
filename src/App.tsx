import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// antd
import 'antd/dist/antd.less'
import { Layout } from 'antd'

// internal components
import { Nav } from './components' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout >
      <Nav />
    </Layout>
  )
}

export default App
