import { useState, useEffect } from 'react';

interface WindowDimensions {
    width: number;      // Viewport width
    height: number;     // Viewport height
}

export default function useWindowDimensions(): WindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        // Add event listener
        window.addEventListener('resize', handleResize);



        // Clean up listeners on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty array ensures effect runs only on mount and unmount

    return windowDimensions;
}