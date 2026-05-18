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
    <section className="bg-header border-header border p-3 text-white shadow-sm sm:rounded-xl sm:p-4 lg:p-5">
      <div className="space-y-4 lg:space-y-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-8">
          <div className="order-3 col-span-1 flex items-center justify-center md:order-1 md:col-span-1 lg:order-1 lg:col-span-1">
            <a
              href={`${FUNCTIONSPACE_DEMO_TRADING_BASE_URL}/${marketId}`}
              target="_blank"
              rel="noreferrer"
              className="fs-open-market-btn w-full text-center"
            >
              Open Market
            </a>
          </div>

          <div className="order-1 col-span-1 md:order-2 md:col-span-3 lg:order-2 lg:col-span-4">
            <MarketStats marketId={marketId} />
          </div>

          <div className="order-4 col-span-1 md:order-4 md:col-span-4 lg:order-3 lg:col-span-3">
            <PasswordlessAuthWidget
              onLogin={(user) => rememberUsername(user.username)}
              onSignup={(user) => rememberUsername(user.username)}
              onLogout={forgetUsername}
            />
          </div>

          <div
            className={`order-2 col-span-1 md:order-3 md:col-span-4 md:hidden lg:order-4 ${isSignedIn ? "lg:col-span-5" : "lg:col-span-8"}`}
          >
            <ConsensusChart marketId={marketId} height={250} zoomable />
          </div>
          <div
            className={`order-2 col-span-1 hidden md:order-3 md:col-span-4 md:block lg:order-4 ${isSignedIn ? "lg:col-span-5" : "lg:col-span-8"}`}
          >
            <ConsensusChart marketId={marketId} height={480} zoomable />
          </div>

          {isSignedIn && (
            <div className="order-5 col-span-1 md:order-5 md:col-span-4 lg:order-5 lg:col-span-3">
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
        </div>
      </div>
    </section>
  )
}
