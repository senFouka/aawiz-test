import { ButtonProps, ElementProps, Button as MantineButton } from "@mantine/core"
import { FC, Ref } from "react"


export interface IButtonProps extends ButtonProps, ElementProps<"button", keyof ButtonProps> {
    ref?: Ref<HTMLButtonElement>
}


const Button: FC<IButtonProps> = ({ ...props }) => {
    return (
        <MantineButton
            {...props}
        />
    )
}

export default Button