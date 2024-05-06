import { Link } from "react-router-dom";
import CloseIcon from "../assets/images/icon-close.svg"

const PrincipalMenu = ({ navRef }) => {

    const HandleClick = () => {
        navRef.current.classList.add('translate-x-[-100%]')
    }

    return (
        <div 
        className="absolute top-0 left-0 h-screen w-full translate-x-[-100%] z-50 transition bg-black/70 
        lg:transition-none lg:static lg:h-auto lg:z-auto lg:w-0 lg:ml-[-13rem] lg:text-grayishBlue"
        ref={navRef}
        >
            <div
                className="w-3/5 bg-white h-full lg:w-full lg:ml-[-12rem]"
                >
                    <button
                    className="text-3xl mt-5 ml-5 lg:hidden"
                    onClick={ HandleClick }
                    >
                        <img className="fill-black" src={CloseIcon} alt="" />
                    </button>
                    <ul className="font-700 flex flex-col gap-5 mt-12 pl-5 lg:flex-row lg:mt-0">
                        <li>
                            <Link to={'/collections'}>Collections</Link>
                        </li>
                        <li>
                            <Link to={'/men'}>Men</Link>
                        </li>
                        <li>
                            <Link to={'/women'}>Women</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
            </div>
        </div>
)}

export default PrincipalMenu
