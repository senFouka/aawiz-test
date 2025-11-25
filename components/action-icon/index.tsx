import { ActionIconProps, ElementProps, ActionIcon as MantineActionIcon } from "@mantine/core"
import { FC } from "react"


export interface IActionIconProps extends ActionIconProps, ElementProps<"button", keyof ActionIconProps> {
}


const ActionIcon: FC<IActionIconProps> = ({ ...props }) => {
    return (
        <MantineActionIcon
            {...props}
        />
    )
}

export default ActionIcon