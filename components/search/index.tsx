"use client"
import { ChangeEvent, FC } from 'react';
import Input, { IInputProps } from '../input';
import SearchIcon from "@/icons/search.svg"
import { useDebouncedCallback } from '@mantine/hooks';
import { Loader } from '@mantine/core';



interface IProps extends Omit<IInputProps, "onChange"> {
    onChange?: (val?: string) => void
    onSearch?: (val?: string) => void
    loading?: boolean
    delay?: number
}

const Search: FC<IProps> = ({ onChange, onSearch, loading, delay = 600, ...props }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onSearch) {
            onSearchValue?.(e.target.value)
        }

        onChange?.(e.target.value)
    }


    const onSearchValue = useDebouncedCallback((value: string) => {
        onSearch?.(value || undefined)
    }, delay)


    return (
        <Input
            leftSection={<SearchIcon width={20} height={20} />}
            placeholder='جستجو'
            {...props}
            onChange={onChangeHandler}
            rightSection={loading ? <Loader size={14} /> : <></>}
        />
    );
};

export default Search;
