"use client"
import { ElementProps, TextInput as MantineTextInput, TextInputProps } from "@mantine/core"
import { FC, memo, ReactNode } from "react"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"


export interface IInputProps extends Omit<TextInputProps, "error">, ElementProps<'input', keyof TextInputProps> {
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}


const Input: FC<IInputProps> = ({ ...props }) => {

    return (
        <MantineTextInput
            {...props}
            error={props?.error as ReactNode}
        />
    )
}

export default memo(Input)