"use client"

import { AaveProvider } from "@/providers/AaveProvider"
import { FSAaveRiskSignalsWidget } from "@/components/FSAaveRiskSignalsWidget"
import { ReserveSnapshot } from "@/components/ReserveSnapshot"
import type { MarketConfig } from "@/types/market"

type MarketProps = {
  market: MarketConfig
}

export function Market({ market }: MarketProps) {
  return (
    <AaveProvider>
      <div className="mt-8 grid gap-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ReserveSnapshot market={market} />
        </div>
        <FSAaveRiskSignalsWidget market={market} />
      </div>
    </AaveProvider>
  )
}
