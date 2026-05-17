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
    <section className="bg-header border-header border p-3 text-white shadow-sm sm:p-4 md:rounded-xl lg:p-5">
      <div className="space-y-4 lg:space-y-5">
        <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-around">
          <div className="flex flex-col lg:items-stretch">
            <div className="flex flex-col gap-4 pb-4 md:flex-row md:items-center md:justify-between lg:pb-5">
              <a
                href={`${FUNCTIONSPACE_DEMO_TRADING_BASE_URL}/${marketId}`}
                target="_blank"
                rel="noreferrer"
                className="fs-open-market-btn w-full justify-center md:w-auto md:shrink-0"
              >
                Open Live Market
              </a>

              <div className="min-w-0 flex-1">
                <MarketStats marketId={marketId} />
              </div>
            </div>

            <div className="flex min-w-0 lg:flex-1">
              <ConsensusChart marketId={marketId} height={420} zoomable />
            </div>
          </div>

          <aside className="min-w-0 space-y-3 md:grid md:grid-cols-2 md:items-start md:gap-3 md:space-y-0 lg:sticky lg:top-20 lg:block lg:w-[360px] lg:shrink-0 lg:space-y-3">
            <div className="min-w-0">
              <PasswordlessAuthWidget
                onLogin={(user) => rememberUsername(user.username)}
                onSignup={(user) => rememberUsername(user.username)}
                onLogout={forgetUsername}
              />
            </div>

            {isSignedIn && (
              <div className="min-w-0 space-y-3">
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
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
