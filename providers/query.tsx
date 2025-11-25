"use client"

import { useState } from "react"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

interface IProps {
  children: React.ReactNode
}

const ClientQueryProvider = ({ children }: IProps) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 15, // 15 sec
        gcTime: 1000 * 60,
        retry: 2,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ClientQueryProvider
