import { DirectionProvider, MantineThemeOverride } from '@mantine/core';
import { FC, ReactNode } from 'react';
import AppMantineProvider from './mantine';
import '@mantine/core/styles.css';
import ErrorBoundary from '@/components/error-boundary';
import ClientQueryProvider from './query';
import Toast from './toast';






interface IProps {
    children: ReactNode
    themeOverrides?: MantineThemeOverride
}



const AppProvider: FC<IProps> = ({ children, themeOverrides }) => {
    return (
        <ErrorBoundary>
            <DirectionProvider
                initialDirection='ltr'
            >
                <ErrorBoundary>
                    <AppMantineProvider
                        themeOverrides={themeOverrides}
                    >
                        <Toast />

                        <ClientQueryProvider>
                            <ErrorBoundary>
                                {children}
                            </ErrorBoundary>
                        </ClientQueryProvider>
                    </AppMantineProvider>
                </ErrorBoundary>
            </DirectionProvider>
        </ErrorBoundary>
    );
}

export default AppProvider