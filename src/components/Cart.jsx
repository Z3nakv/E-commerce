import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context';
import iconTrash from '../assets/images/icon-delete.svg'

function Cart() {

    const { cart, handleDelete } = useContext(GlobalContext);

    return (
            <div className='lg:right-10 lg:top-20 lg:shadow-2xl lg:left-auto 
            absolute top-[calc(0px+87px)] right-10 bg-white h-[280px] w-[400px] rounded-xl'>
                <div className='border-b-2'>
                    <h3 className='font-700 p-5'>Cart</h3>
                </div>
                <div className='h-[calc(100%-85px)] overflow-y-auto'>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        {
                            cart && cart.length > 0
                            ? cart.map( item => (
                                <div className='flex flex-col gap-5 mb-5'>
                                    <div className='flex items-center gap-5' id={item.id} key={item.id}>
                                        <div className='rounded-lg overflow-hidden'>
                                            <img className='h-16 w-16' src={item.img} alt="mini-logo-producto" />
                                        </div>
                                        <div>
                                            <p className='capitalize text-darkGrayishBlue/80 font-400'>{item.name}</p>
                                            <div className='flex gap-2'>
                                                <div className='text-darkGrayishBlue/60 font-700'>
                                                    <span>${item.price}.00 x </span>
                                                    <span>{item.quantity}</span>
                                                </div>
                                                <span className='font-700'>${item.total}.00</span>
                                            </div>
                                        </div>
                                        <div
                                        onClick={ () => handleDelete(item.id) }
                                        className='cursor-pointer'>
                                            <img
                                            className='h-5'
                                            src={iconTrash}
                                            alt="delete" />
                                        </div>
                                    </div>
                                    <button
                                    className='capitalize bg-orange w-full rounded-lg justify-center items-center py-4 px-4 text-white font-700'
                                    >
                                        checkout
                                    </button>
                                </div>
                            ))
                            : <div className='font-700 text-darkGrayishBlue/80'>Your cart is empty</div>
                        }
                    </div>
                </div>
            </div>
    )
}

export default Cart
