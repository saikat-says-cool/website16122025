import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Identity from './pages/Identity'
import Mission from './pages/Mission'
import DeepEx from './pages/DeepEx'
import Governance from './pages/Governance'
import Blog from './pages/Blog'
import ResearchAndDevelopment from './pages/ResearchAndDevelopment'
import CompanyPress from './pages/CompanyPress'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/deepex" element={<DeepEx />} />
        <Route path="/research" element={<ResearchAndDevelopment />} />
        <Route path="/research/:id" element={<ResearchAndDevelopment />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/press" element={<CompanyPress />} />
        <Route path="/press/:id" element={<CompanyPress />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App

