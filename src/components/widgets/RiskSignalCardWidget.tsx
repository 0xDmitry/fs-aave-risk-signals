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
    <div className="flex h-full flex-1 items-stretch justify-stretch [&>div]:flex [&>div]:h-full [&>div]:flex-1 [&>div]:items-stretch [&>div]:justify-stretch">
      {loading ? (
        <span className="fs-risk-signal-card-skeleton" />
      ) : error ? (
        <span className="fs-risk-signal-card-error">Error</span>
      ) : market ? (
        <MarketCard market={market} />
      ) : (
        <span className="fs-risk-signal-card-error">Error</span>
      )}
    </div>
  )
}
