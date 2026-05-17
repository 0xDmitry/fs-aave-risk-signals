"use client"

import { AaveProvider } from "@/providers/AaveProvider"
import { RiskSignalTradingWidget } from "@/components/widgets/RiskSignalTradingWidget"
import { AaveReserveStatus } from "@/components/AaveReserveStatus"
import type { RiskSignal } from "@/types/risk-signal"

type RiskSignalProps = {
  riskSignal: RiskSignal
}

export function RiskSignal({ riskSignal }: RiskSignalProps) {
  return (
    <AaveProvider>
      <div className="mt-8 grid gap-6">
        <AaveReserveStatus riskSignal={riskSignal} />
        <RiskSignalTradingWidget
          marketId={riskSignal.functionSpaceMarketId}
          positionSelectorModes={
            riskSignal.type === "reserve-stress"
              ? ["range", "gaussian"]
              : ["gaussian", "range"]
          }
        />
      </div>
    </AaveProvider>
  )
}
