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
      <div className="grid gap-5 sm:gap-6 lg:gap-8">
        <AaveReserveStatus riskSignal={riskSignal} />
        <div className="min-h-[716px]">
          <RiskSignalTradingWidget
            marketId={riskSignal.functionSpaceMarketId}
            positionSelectorModes={
              riskSignal.type === "reserve-stress"
                ? ["range", "gaussian"]
                : ["gaussian", "range"]
            }
          />
        </div>
      </div>
    </AaveProvider>
  )
}
