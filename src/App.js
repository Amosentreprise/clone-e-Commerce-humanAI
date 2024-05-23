
import { Link, Route, Routes } from 'react-router-dom';
import FormationPage from './views/FormationPage';
import FormationDetail from './views/FormationDetail';
import Cart from './views/Cart';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from 'react';
import {CartContext} from './contexts/CartContext';
function App() {
  const {numberFormationCart} = useContext(CartContext)
  return (
    <div  className='bg-slate-200 '>
      <Routes>
          <Route path='/' element={<FormationPage/>}/>
          <Route path='formations/:detail' element={<FormationDetail/>}/>
          <Route path='formation/cart' element={<Cart/>}/>
      </Routes>

      <div className='fixed bottom-5 right-5'>
          <Link to="formation/cart" className=' w-14 h-14  p-2 bg-white rounded-full shadow-xl flex justify-center items-center text-2xl cursor-pointer text-black'>
          <span className=''>
            <AiOutlineShoppingCart />
            
          </span>
          <span className='absolute -top-2 right-0 p-2 w-6 h-6 font-bold bg-blue-500 text-white flex justify-center items-center text-sm rounded-full'>{numberFormationCart}</span>
          </Link>
      </div>
    </div>
  );
}

export default App;
