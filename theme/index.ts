"use client"
import { allColors } from "@/const/colors";
import { createTheme, deepMerge, MantineThemeOverride, rem, virtualColor } from "@mantine/core";

export const baseThemeProvider: MantineThemeOverride = {
    fontFamily: "IRANSans",
    primaryColor: "primary",
    cursorType: 'pointer',
    defaultRadius: 'md',
    colors: {
        ...allColors,
        primary: virtualColor({
            name: 'primary',
            dark: 'primaryColor',
            light: 'secondary',
        }),

        bg: virtualColor({
            name: 'bg',
            dark: 'darkPalette',
            light: 'gray',
        }),
    },

    fontSizes: {
        xs: rem(10),
        sm: rem(12),
        md: rem(14),
        lg: rem(16),
        xl: rem(18),
        "2xl": rem(20),
        "3xl": rem(22),
        "4xl": rem(24),
    },

    components: {
        Container: {
            defaultProps: {
                px: rem(24),
                w: "100%",
                size: "1440px"
            }
        },
        InputBase: {
            defaultProps: {
                variant: "filled"
            }
        },
        Skeleton: {
            defaultProps: {
                animate: true
            }
        }
    },
};


const themeProvider = (themeOverrides?: MantineThemeOverride) => {
    return createTheme(deepMerge(baseThemeProvider, themeOverrides || {}))
}


export default themeProvider