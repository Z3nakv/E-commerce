import { useEffect, useRef, useState } from 'react';

import  useMediaValue  from './utilities';

import {
    ProductImage1, 
    ProductImage2, 
    ProductImage3, 
    ProductImage4, 
    miniProduct1, 
    miniProduct2, 
    miniProduct3, 
    miniProduct4, 
    leftTag, 
    rightTag
} from './indexs'

function Slider({ handleShowModal }) {

    const [products, setProducts] = useState([ProductImage1, ProductImage2, ProductImage3, ProductImage4]);
    const [miniProducts, setMiniProducts] = useState([miniProduct1, miniProduct2, miniProduct3, miniProduct4]);
    const [count, setCount] = useState(0);
    const { mediaAlert } = useMediaValue();
    
    const sliderRef = useRef(null);
    
    const handleClickRight = () => {
        if(count === 3){
            setCount(0)
        }else{
            setCount(count + 1)
        }
    }

    const handleClickLeft = () => {
        if(count === 0){
            setCount(3)
        }else{
            setCount(count - 1)
        }
    }

    const handleClickMiniature = (idx) => {
        setCount(idx)
    }

    useEffect(() => {
        sliderRef.current.style.transform = `translateX(calc(${count * -25}%))`
    },[count])

    return (
        <div className="lg:h-full lg:flex lg:flex-col lg:justify-between 
        relative w-[100%] overflow-hidden">
            <div className="lg:mb-8">
            <div className="flex w-[400%] transition" ref={sliderRef}>
                {products &&
                products.map((item, idx) => (
                    <img
                    key={idx}
                    src={item}
                    alt="product-principal"
                    className="lg:rounded-lg lg:h-[450px] lg:cursor-pointer
                    w-full h-[300px] object-cover"
                    onClick={ mediaAlert > 1024 ? handleShowModal : null }
                    />
                ))}
            </div>
            
            
                <div className='lg:hidden'>
                    <div
                        className="cursor-pointer bg-white h-10 w-10 rounded-full flex justify-center items-center absolute top-[calc(50%-20px)]"
                        onClick={handleClickLeft}
                        >
                        <img src={leftTag} alt="left-tag" />
                    </div>
                    <div
                        className="cursor-pointer bg-white h-10 w-10 rounded-full flex justify-center items-center absolute top-[calc(50%-20px)] right-0"
                        onClick={handleClickRight}
                        >
                        <img src={rightTag} alt="right-tag" />
                    </div>
                </div>
            
            </div>
            
            <div className="justify-between hidden lg:flex">
                {
                    miniProducts && miniProducts.map( (item, idx) => (
                        <button onClick={ () => handleClickMiniature(idx) }>
                            <img
                                className="rounded-lg h-24"
                                src={item}
                                alt={`minifoto${idx}`}
                            />
                        </button>
                    ))
                }
            </div>
        
        </div>
    );
}

export default Slider
