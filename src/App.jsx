import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/page.jsx'


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
