import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layowt/Layout'
import Home from './components/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} end>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
