import { useState } from "react"
import { useAuth } from "@functionspace/react"
import { ConsensusChart } from "@functionspace/ui/src/charts/ConsensusChart"
import { MarketStats } from "@functionspace/ui/src/market/MarketStats"
import { TradePanel } from "@functionspace/ui/src/trading/TradePanel"
import { PasswordlessAuthWidget } from "@functionspace/ui/src/auth/PasswordlessAuthWidget"

import {
  FunctionSpaceProvider,
  useFunctionSpaceAuthPersistence,
} from "@/providers/FunctionSpaceProvider"
import { FUNCTIONSPACE_DEMO_TRADING_BASE_URL } from "@/config/function-space-markets"

type RiskSignalTradingWidgetProps = {
  marketId: number
  positionSelectorModes?: ("gaussian" | "range")[]
}

export function RiskSignalTradingWidget({
  marketId,
  positionSelectorModes,
}: RiskSignalTradingWidgetProps) {
  return (
    <FunctionSpaceProvider>
      <RiskSignalTrading
        marketId={marketId}
        positionSelectorModes={positionSelectorModes}
      />
    </FunctionSpaceProvider>
  )
}

function RiskSignalTrading({
  marketId,
  positionSelectorModes,
}: RiskSignalTradingWidgetProps) {
  const [tradeError, setTradeError] = useState<string | null>(null)

  const { user, isAuthenticated } = useAuth()
  const isSignedIn = Boolean(isAuthenticated || user)

  const { rememberUsername, forgetUsername } = useFunctionSpaceAuthPersistence()

  return (
    <section className="bg-header border-header rounded-xl border p-4 text-white shadow-sm sm:p-5">
      <div className="space-y-5">
        <div className="flex flex-col gap-4 border-b border-white/15 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <MarketStats marketId={marketId} />
          </div>

          <a
            href={`${FUNCTIONSPACE_DEMO_TRADING_BASE_URL}/${marketId}`}
            target="_blank"
            rel="noreferrer"
            className="fs-open-market-btn"
          >
            Open Live Market
          </a>
        </div>

        <div className="lg:flex-items-stretch grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)]">
          <div className="flex-items-stretch flex min-w-0 overflow-hidden">
            <ConsensusChart marketId={marketId} height={520} zoomable />
          </div>

          <aside className="min-w-0 space-y-3 lg:sticky lg:top-20 lg:self-start">
            <PasswordlessAuthWidget
              onLogin={(user) => rememberUsername(user.username)}
              onSignup={(user) => rememberUsername(user.username)}
              onLogout={forgetUsername}
            />

            {isSignedIn && (
              <>
                <TradePanel
                  marketId={marketId}
                  modes={positionSelectorModes}
                  onError={(error) => setTradeError(error.message)}
                  onBuy={() => setTradeError(null)}
                />

                {tradeError ? (
                  <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-100">
                    {tradeError}
                  </div>
                ) : null}
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
