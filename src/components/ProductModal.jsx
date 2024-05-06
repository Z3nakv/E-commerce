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
    rightTag,
    closingTag
} from './indexs'
import { useEffect, useRef, useState } from 'react';

function ProductModal({ handleShowModal }) {

    const [products, setProducts] = useState([ProductImage1, ProductImage2, ProductImage3, ProductImage4]);
    const [miniProducts, setMiniProducts] = useState([miniProduct1, miniProduct2, miniProduct3, miniProduct4]);
    const [count, setCount] = useState(0);
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
        <div 
        className='bg-black/60 absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center'
        >
            <div 
            className='ml-[27rem] mb-[1rem] cursor-pointer'
            onClick={ handleShowModal }
            >
                <img src={closingTag} alt="delete-tag" />
            </div>

            <div
            className="flex flex-col justify-between w-[450px] overflow-hidden"
            >

            <div>
                <div 
                className="flex w-[400%] mb-6 transition" 
                ref={sliderRef}>
                {products &&
                    products.map((item, idx) => (
                    <img
                        key={idx}
                        src={item}
                        alt="product-principal"
                        className="rounded-lg h-[450px] w-full object-cover"
                    />
                    ))}
                </div>

                    <div className='relative'>
                        <div
                        className="cursor-pointer bg-white h-10 w-10 rounded-full flex justify-center items-center absolute top-[calc(50%-16rem)] left-0"
                        onClick={handleClickLeft}
                        >
                            <img src={leftTag} alt="left-tag" />
                        </div>
                        <div
                        className="cursor-pointer bg-white h-10 w-10 rounded-full flex justify-center items-center absolute top-[calc(50%-16rem)] right-0"
                        onClick={handleClickRight}
                        >
                            <img src={rightTag} alt="right-tag" />
                        </div>
                    </div>
                
            
                <div className="flex justify-around">
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
                </div>
        </div>
    );
}

export default ProductModal
