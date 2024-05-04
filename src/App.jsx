import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import CountingNumber from './components/CountingNumber'
import FooterH from './components/FooterH'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  

  return (
    <div>
      <Nav></Nav>

      <Home></Home>

      <About></About>

      <CountingNumber></CountingNumber>
      <Contact></Contact>

      <FooterH></FooterH>
    </div>
  )
}

export default App
