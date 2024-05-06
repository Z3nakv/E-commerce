import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [showCarrito, setShowCarrito] = useState(false)

    const handleCart = ( newCart ) => {
        setCart( [...cart, newCart] )
    }

    const handleShowCarrito = () => {
        setShowCarrito(!showCarrito)
    }

    const handleDelete = ( currentId ) => {
        const auxCart = [...cart];
        const result = auxCart.filter( item => item.id !== currentId )
        setCart( result );
    }

    return (
        <GlobalContext.Provider value={{
            cart,
            handleCart,
            showCarrito,
            handleShowCarrito,
            handleDelete
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;