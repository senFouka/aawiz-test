import getQueryClient from '@/hooks/get-query-client'
import {
    dehydrate,
    HydrationBoundary
} from '@tanstack/react-query'
import { ReactNode } from 'react'


interface IProps {
    queryKey: any[]
    queryFn: () => Promise<any>
    children: ReactNode
}

export default async function ServerProvider({ queryKey, queryFn, children }: IProps) {
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery({
        queryKey: queryKey,
        queryFn: queryFn,
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    )
}