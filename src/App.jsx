
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Project from './pages/Projects/Project'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
