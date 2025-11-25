"use client"
import { useMantineColorScheme } from '@mantine/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const Toast = () => {
    const { colorScheme } = useMantineColorScheme({
        keepTransitions: true
    });

    return (
        <ToastContainer
            autoClose={4000}
            position='bottom-center'
            draggablePercent={40}
            draggable={true}
            limit={4}
            stacked
            theme={colorScheme}
        />
    );
}

export default Toast