import { Link } from "react-router-dom";
import PrincipalMenu from "./PrincipalMenu";
import { FaBars } from "react-icons/fa6";
import { useContext, useRef } from "react";
import  logo  from '../assets/images/logo.svg'
import carrito from '../assets/images/icon-cart.svg'
import user from '../assets/images/image-avatar.png'
import { GlobalContext } from "../context/Context";

const Navbar = () => {

    const { handleShowCarrito, cart } = useContext(GlobalContext);
    
    const navRef = useRef(null);

    const HandleClick = () => {
        navRef.current.classList.remove('translate-x-[-100%]')
    }

    return (

        <div className="container mx-auto border-b-2 border-black-400">
            
            
            <div className="flex justify-between items-center p-4">
                
                    <div className="flex items-center gap-4">
                        <FaBars
                        className="h-6 w-10 cursor-pointer mt-1.5 lg:hidden"
                        onClick={HandleClick}
                        />
                        <Link to={'/'}>
                            <img className="h-6 cursor-pointer" src={logo} alt="logo" />
                        </Link>
                    </div>
                    
                    <PrincipalMenu navRef={navRef} />
                
                    
                <div className="flex items-center gap-4">
                    <div onClick={ handleShowCarrito } className="relative lg:mr-10 cursor-pointer">
                        <div className="bg-orange flex justify-center items-center rounded-xl px-3 absolute top-[-10px] right-[-10px]">
                            <span className="text-white text-sm font-700">{cart.length}</span>
                        </div>
                        <img className="h-6" src={carrito} alt="" />
                    </div>
                    <div className="hover:outline hover:outline-orange 
                    rounded-full duration-100 ease-linear">
                        <img className="h-10 cursor-pointer" src={user} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Navbar
