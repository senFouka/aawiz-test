"use client"
import DarkIcon from "@/icons/dark.svg";
import LightIcon from "@/icons/light.svg";
import { useMantineColorScheme } from '@mantine/core';
import ActionIcon from '../action-icon';






export function ColorSchemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme({
        keepTransitions: true
    });

    return (
        <ActionIcon
            onClick={toggleColorScheme}
            variant="transparent"
        >
            {
                colorScheme === "dark" ? <DarkIcon color="white" width={24} height={24} /> : <LightIcon width={24} height={24} />
            }
        </ActionIcon>
    );
}