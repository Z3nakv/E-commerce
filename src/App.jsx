import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Collections, Men, Women, About, Contact, Navbar } from './components/indexs'
import { useContext } from 'react';
import { GlobalContext } from './context/Context';
import Cart from './components/Cart';

const App = () => {

  const { showCarrito } = useContext(GlobalContext);

  return (
  <div className='relative font-KumbhSans'>
    
      <Navbar />
    
    <Routes>
      <Route path='/collections' element={<Collections />} />
      <Route path='/men' element={<Men />} />
      <Route path='/women' element={<Women />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    {
      showCarrito && <Cart />
    }
  </div>
)}

export default App
