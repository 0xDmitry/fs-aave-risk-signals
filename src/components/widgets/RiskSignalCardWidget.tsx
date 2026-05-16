import { FunctionSpaceProvider } from "@functionspace/react/src/FunctionSpaceProvider"
import { useMarket } from "@functionspace/react/src/useMarket"
import type { FSThemeInput } from "@functionspace/react/src/FunctionSpaceProvider"
import { MarketCard } from "@functionspace/ui/src/market/MarketCard"
import { FUNCTIONSPACE_API_BASE_URL } from "@/config/function-space-markets"

type RiskSignalCardWidgetProps = {
  marketId: number
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

export function RiskSignalCardWidget({ marketId }: RiskSignalCardWidgetProps) {
  return (
    <FunctionSpaceProvider
      config={{
        baseUrl: FUNCTIONSPACE_API_BASE_URL,
        autoAuthenticate: false,
      }}
      theme={widgetTheme}
    >
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
    <div className="group block rounded-lg border border-line bg-white p-5 transition hover:border-ink hover:shadow-sm">
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
