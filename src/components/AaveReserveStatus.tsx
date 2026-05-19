import { AaveReserveMetric } from "@/components/AaveReserveMetric"
import type { RiskSignal } from "@/types/risk-signal"

type AaveReserveInfoProps = {
  riskSignal: RiskSignal
}

export function AaveReserveStatus({ riskSignal }: AaveReserveInfoProps) {
  const isYieldMarket = riskSignal.type === "forward-yield"

  const metricLabel = isYieldMarket ? "Average APY" : "Current Utilization Rate"

  const description = isYieldMarket
    ? "Live Aave V3 Ethereum USDC 30-Day Average Supply APY (May 8 - June 6 2026)"
    : "Live Aave V3 Ethereum WETH Reserve Utilization"

  return (
    <section className="border border-line bg-paper p-5 sm:rounded-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Live Aave V3 reserve status
        </p>
        <a
          href={riskSignal.reservePageUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted transition hover:text-ink"
        >
          View on Aave V3 ↗
        </a>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs text-muted">Reserve</p>
          <p className="mt-1 text-xl font-semibold text-ink">
            {riskSignal.reserveSymbol}
          </p>
        </div>

        <div>
          <p className="text-xs text-muted">Network</p>
          <p className="mt-1 text-xl font-semibold text-ink">Ethereum</p>
        </div>

        <div>
          <p className="text-xs text-muted">{metricLabel}</p>
          <AaveReserveMetric riskSignal={riskSignal} />
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-ink-muted">{description}</p>
    </section>
  )
}
