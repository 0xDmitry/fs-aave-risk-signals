"use client"

import { AaveClient, AaveProvider as AaveProviderDefault } from "@aave/react"

const client = AaveClient.create()

export function AaveProvider({ children }: { children: React.ReactNode }) {
  return <AaveProviderDefault client={client}>{children}</AaveProviderDefault>
}
