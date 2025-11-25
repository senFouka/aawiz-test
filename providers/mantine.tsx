"use client"
import themeProvider from '@/theme';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { NavigationProgress, nprogress } from '@mantine/nprogress';
import { usePathname } from 'next/navigation';
import { FC, ReactNode, useEffect } from 'react';
import '@mantine/nprogress/styles.css';






interface IProps {
    children: ReactNode
    themeOverrides?: MantineThemeOverride
}



const AppMantineProvider: FC<IProps> = ({ children, themeOverrides }) => {
    const theme = themeProvider(themeOverrides)

    const pathname = usePathname();

    useEffect(() => {
        nprogress.start();

        const timeout = setTimeout(() => {
            nprogress.complete();
        }, 300);

        return () => clearTimeout(timeout);
    }, [pathname]);


    return (
        <MantineProvider
            theme={theme}
            defaultColorScheme="auto"
        >
            <NavigationProgress

            />

            {children}
        </MantineProvider>
    );
}

export default AppMantineProvider