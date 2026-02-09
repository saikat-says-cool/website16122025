import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Identity from './pages/Identity'
import Mission from './pages/Mission'
import DeepEx from './pages/DeepEx'
import Governance from './pages/Governance'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/deepex" element={<DeepEx />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App

