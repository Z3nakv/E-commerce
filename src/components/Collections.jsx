import { useContext, useEffect, useState } from 'react';
import cartIcon from '../assets/images/icon-cart.svg'
import Slider from './Slider';
import miniProductImg from '../assets/images/image-product-1-thumbnail.jpg'
import ProductModal from './ProductModal';
import  useMediaValue  from './utilities';
import { GlobalContext } from '../context/Context';


const Collections = () => {

  const [count, setCount] = useState(0);
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { handleCart } = useContext(GlobalContext);
  const LG_MEDIA_QUERY = 'lg:grid lg:grid-columns-2'

  const { mediaAlert } = useMediaValue();

  const handleSum = () => {
    setCount(count + 1)
  }

  const handleMin = () => {
    if(count === 0){
      return;
    }else {
      setCount(count - 1)
    }
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
}

  const handleChange = (e) => {
    setCount(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.querySelector('#titulo').textContent;
    const price = Number(document.querySelector('#price').textContent);
    const total = count * price

    const newProduct = {
      img: miniProductImg,
      name: name,
      price: price,
      quantity: count,
      total: total,
      id: Date.now()
    }
    setProduct( newProduct )
    
  }

  useEffect(() => {
    if(product){
      handleCart( product );
      setProduct(null);
      setCount(0);
    }
  },[product])

  

  return (
    <div className='lg:flex lg:justify-center lg:items-center 
    container mx-auto h-[calc(100vh-76px)]'>
      <div className='lg:grid lg:grid-cols-2 lg:items-center 
      min-h-min'>
        <div className='lg:p-5 lg:h-full'>
          <Slider handleShowModal={ handleShowModal } />
        </div>
        <div className='py-7 px-7 h-[calc(100vh-376px)] flex flex-col justify-between'>
          <h4 className='text-orange/70 font-700 uppercase text-sm'>sneaker company</h4>
          <h1 className='capitalize text-4xl font-700' id='titulo'>fall limited edition sneakers</h1>
          <p className='text-darkGrayishBlue/55 text-base font-700'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className='flex justify-between'>
            <div className='flex gap-5'>
              <p className='text-3xl font-700'><span>$</span><span id='price'>125</span><span>.00</span></p>
              <span className='text-orange/70 font-700 text-lg bg-orange/15 flex items-center px-2'>50%</span>
            </div>
            <span className='text-darkGrayishBlue/55 text-base font-700 line-through'>$250.00</span>
          </div>
          <form className='flex flex-col gap-4' onSubmit={ handleSubmit } >
            <div className='w-full flex justify-between items-center bg-lightGrayishBlue py-2 px-4 rounded-lg'>
              <button type='button' className='text-orange text-4xl font-700' onClick={ handleMin }>-</button>
              <input className='text-2xl font-700 text-center bg-lightGrayishBlue' onChange={handleChange} value={count} ></input>
              <button type='button' className='text-orange text-4xl font-700' onClick={ handleSum }>+</button>
            </div>
        
              <button
              type='submit'
              className='flex bg-orange w-full rounded-lg justify-center items-center py-4 px-4'
              >
                <img src={cartIcon} alt="icono-carrito" />
                <span className='text-white font-700 ml-5'>Add to cart</span>
              </button>
        
          </form>
        </div>
      </div>
      {
          showModal && mediaAlert > 1024 ? <ProductModal handleShowModal={ handleShowModal } /> : null
      }
    </div>
  )
}

export default Collections;
