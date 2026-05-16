import { useState } from "react"
import { FunctionSpaceProvider } from "@functionspace/react/src/FunctionSpaceProvider"
import type { FSThemeInput } from "@functionspace/react/src/FunctionSpaceProvider"
import { ConsensusChart } from "@functionspace/ui/src/charts/ConsensusChart"
import { MarketStats } from "@functionspace/ui/src/market/MarketStats"
import { TradePanel } from "@functionspace/ui/src/trading/TradePanel"
import { PasswordlessAuthWidget } from "@functionspace/ui/src/auth/PasswordlessAuthWidget"
import type { MarketConfig } from "@/types/market"
import { FUNCTIONSPACE_API_BASE_URL } from "@/config/markets"

type FSAaveRiskSignalsWidgetProps = {
  market: MarketConfig
}

const widgetTheme: FSThemeInput = {
  preset: "fs-dark",
  primary: "#2ebac6",
  accent: "#5856d6",
  background: "#101418",
  surface: "#151b22",
  text: "#f8fafc",
  textSecondary: "#94a3b8",
  border: "#293241",
}

export function FSAaveRiskSignalsWidget({
  market,
}: FSAaveRiskSignalsWidgetProps) {
  const [tradeError, setTradeError] = useState<string | null>(null)

  return (
    <FunctionSpaceProvider
      config={{
        baseUrl: FUNCTIONSPACE_API_BASE_URL,
        autoAuthenticate: false,
      }}
      theme={widgetTheme}
    >
      <section className="rounded-lg border border-ink bg-ink p-5 text-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-white/15 pb-5 lg:flex-row lg:items-start lg:justify-between">
          <a
            href={market.externalMarketUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded bg-aave px-4 text-sm font-semibold text-ink hover:bg-white"
          >
            Open live market
          </a>
        </div>
        <div className="space-y-4">
          <div style={{ flex: 3, minWidth: 0 }}>
            <PasswordlessAuthWidget />
          </div>
          <MarketStats marketId={market.functionSpaceMarketId} />

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0">
              <ConsensusChart
                marketId={market.functionSpaceMarketId}
                height={520}
                zoomable
              />
            </div>
            <div className="min-w-0 space-y-3">
              <TradePanel
                marketId={market.functionSpaceMarketId}
                modes={
                  market.signalType === "reserve-stress"
                    ? ["range", "gaussian"]
                    : ["gaussian", "range"]
                }
                onError={(error) => setTradeError(error.message)}
                onBuy={() => setTradeError(null)}
              />
              {tradeError ? (
                <div className="rounded border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-100">
                  {tradeError}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </FunctionSpaceProvider>
  )
}
