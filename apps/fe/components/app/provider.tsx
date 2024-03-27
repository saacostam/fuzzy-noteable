"use client";

import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from 'react-query';
import { SessionProvider } from "next-auth/react";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  )
};
