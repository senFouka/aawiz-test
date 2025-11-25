import { ElementProps, NumberInput as MantineNumberInput, NumberInputProps } from "@mantine/core"
import { FC, memo, ReactNode } from "react"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"


export interface INumberInputProps extends Omit<NumberInputProps, "onChange" | "min" | "max" | "error">, ElementProps<'input', keyof NumberInputProps> {
    onChange?: (val: any) => void
    inputMin?: number
    inputMax?: number
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}



const NumberInput: FC<INumberInputProps> = ({ inputMin, inputMax, ...props }) => {


    return (
        <MantineNumberInput
            hideControls
            type="tel"
            inputMode="numeric"
            {...props}
            error={props?.error as ReactNode}
            value={(props?.value || props?.value === 0) ? props.value : ''}
            min={inputMin}
            max={inputMax}
        />
    )
}

export default memo(NumberInput)