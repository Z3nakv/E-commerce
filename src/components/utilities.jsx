import { useEffect, useState } from "react";

const useMediaValue = () => {

    const [mediaAlert, setMediaAlert] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setMediaAlert(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Limpia el evento de cambio de tamaño al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    
    }, [mediaAlert]);

    return  {mediaAlert} 
}

export default useMediaValue;