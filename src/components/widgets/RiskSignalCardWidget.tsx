import { useMarket } from "@functionspace/react"
import { MarketCard } from "@functionspace/ui/src/market/MarketCard"

import { FunctionSpaceProvider } from "@/providers/FunctionSpaceProvider"

type RiskSignalCardWidgetProps = {
  marketId: number
}

export function RiskSignalCardWidget({ marketId }: RiskSignalCardWidgetProps) {
  return (
    <FunctionSpaceProvider>
      <RiskSignalCard marketId={marketId} />
    </FunctionSpaceProvider>
  )
}

type RiskSignalCardProps = {
  marketId: number
}

function RiskSignalCard({ marketId }: RiskSignalCardProps) {
  const { market, loading, error } = useMarket(marketId)

  return (
    <div>
      {loading ? (
        <span className="fs-skeleton" />
      ) : error ? (
        <span style={{ color: "var(--fs-negative)", fontSize: "0.75rem" }}>
          Error
        </span>
      ) : market ? (
        <MarketCard market={market} />
      ) : (
        <span style={{ color: "var(--fs-negative)", fontSize: "0.75rem" }}>
          Error
        </span>
      )}
    </div>
  )
}
