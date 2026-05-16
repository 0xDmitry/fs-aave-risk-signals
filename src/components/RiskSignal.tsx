"use client"

import { AaveProvider } from "@/providers/AaveProvider"
import { RiskSignalTradingWidget } from "@/components/widgets/RiskSignalTradingWidget"
import { AaveReserveInfo } from "@/components/AaveReserveInfo"
import type { RiskSignal } from "@/types/risk-signal"

type RiskSignalProps = {
  riskSignal: RiskSignal
}

export function RiskSignal({ riskSignal }: RiskSignalProps) {
  return (
    <AaveProvider>
      <div className="mt-8 grid gap-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AaveReserveInfo riskSignal={riskSignal} />
        </div>
        <RiskSignalTradingWidget riskSignal={riskSignal} />
      </div>
    </AaveProvider>
  )
}
